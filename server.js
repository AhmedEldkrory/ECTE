require('dotenv').config();
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const OpenAI = require('openai');
const XLSX = require('xlsx');
const cors = require('cors');
const async = require('async');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const pdf = require('pdf-parse');

const app = express();
const PORT = process.env.PORT || 3000;
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE) || 20;
const CONCURRENCY = parseInt(process.env.CONCURRENCY) || 3;
const DB_PATH = process.env.DB_PATH || './data.db';

// Multer setup for file uploads (in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// OpenAI Client
let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

// SQLite Setup
const db = new sqlite3.Database(DB_PATH);
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS terms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    english TEXT UNIQUE,
    arabic TEXT,
    icon TEXT,
    definition_en TEXT,
    definition_ar TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Seed database on startup
  const { seedDatabase } = require('./seed');
  seedDatabase(db);
});

// Helper: Check existing words in DB
function getExistingWords(words, callback) {
  const placeholders = words.map(() => '?').join(',');
  db.all(`SELECT english FROM terms WHERE english IN (${placeholders})`, words, (err, rows) => {
    if (err) {
      callback(err, []);
    } else {
      const existing = rows.map(row => row.english);
      const newWords = words.filter(word => !existing.includes(word));
      callback(null, newWords);
    }
  });
}

// Helper: Extract words from text
function extractWords(text) {
  const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
  return [...new Set(words)];
}

// Retry function for OpenAI calls
function retryOpenAI(fn, maxRetries = 3, baseDelay = 2000) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      fn().then(resolve).catch(err => {
        if (err.status === 429 && n < maxRetries) {
          const delay = baseDelay * Math.pow(2, n); // Exponential backoff
          console.log(`Rate limit hit, retrying in ${delay}ms (attempt ${n + 1}/${maxRetries})`);
          setTimeout(() => attempt(n + 1), delay);
        } else {
          reject(err);
        }
      });
    }
    attempt(0);
  });
}

// Helper: Call OpenAI for batch of words (auto definitions)
function processBatchWithOpenAI(words, callback) {
  const prompt = `You are an engineering terminology assistant.
For each English word, return its:
- Arabic translation of the word
- Emoji/icon (REQUIRED - always provide at least one relevant emoji that represents the concept, even for common words. Use engineering/science-related emojis when appropriate)
- Engineering definition in English
- Arabic translation of that definition
Return a pure JSON array, e.g.:
[
  {"English":"Electricity","Arabic":"الكهرباء","Icon":"⚡","Definition_English":"Electricity is the flow of electric charge.","Definition_Arabic":"الكهرباء هي تدفق الشحنة الكهربائية."}
]
IMPORTANT: Always include an Icon field with at least one emoji for every word. Do not leave it empty.
Words: ${words.join(', ')}`;

  retryOpenAI(() => openai.chat.completions.create({
    model: process.env.MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: prompt }
    ],
    temperature: 0,
  })).then(response => {
    let content = response.choices[0].message.content;
    // Try to extract JSON array, even if extra text
    try {
      const start = content.indexOf('[');
      const end = content.lastIndexOf(']');
      if (start !== -1 && end !== -1) {
        content = content.substring(start, end + 1);
      }
      const results = JSON.parse(content);
      callback(null, results);
    } catch (e) {
      callback(new Error('Failed to parse OpenAI response'), []);
    }
  }).catch(err => {
    console.error('OpenAI error:', err);
    callback(err, []);
  });
}

// Helper: Call OpenAI for manual entry (translate word and definition)
function processManualWithOpenAI(english, definition_en, callback) {
  const prompt = `Translate the following English word and its definition to Arabic.
Word: ${english}
Definition: ${definition_en}
Return pure JSON: {"arabic_word": "Arabic translation of word", "arabic_definition": "Arabic translation of definition"}`;

  retryOpenAI(() => openai.chat.completions.create({
    model: process.env.MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: prompt }
    ],
    temperature: 0,
  })).then(response => {
    let content = response.choices[0].message.content;
    try {
      const start = content.indexOf('{');
      const end = content.lastIndexOf('}');
      if (start !== -1 && end !== -1) {
        content = content.substring(start, end + 1);
      }
      const result = JSON.parse(content);
      callback(null, result);
    } catch (e) {
      callback(new Error('Failed to parse OpenAI response'), {});
    }
  }).catch(err => {
    console.error('OpenAI error:', err);
    callback(err, {});
  });
}

// Helper: Insert terms into DB
function insertTerms(terms, callback) {
  if (terms.length === 0) {
    callback(null, []);
    return;
  }

  const stmt = db.prepare(`INSERT OR IGNORE INTO terms (english, arabic, icon, definition_en, definition_ar)
                           VALUES (?, ?, ?, ?, ?)`);
  terms.forEach(term => {
    stmt.run(term.English || term.english, term.Arabic || term.arabic, term.Icon || term.icon || '',
             term.Definition_English || term.definition_en, term.Definition_Arabic || term.definition_ar);
  });
  stmt.finalize(callback);
}

// Helper: Insert manual term
function insertManualTerm(english, arabic, definition_en, definition_ar, callback) {
  db.run(`INSERT OR IGNORE INTO terms (english, arabic, icon, definition_en, definition_ar)
          VALUES (?, ?, '', ?, ?)`, [english, arabic, definition_en, definition_ar], callback);
}

// Helper: Append new words to user_seeds.json
function appendToUserSeeds(terms) {
  const userSeedsPath = path.join(__dirname, 'data', 'user_seeds.json');
  try {
    // Read existing user seeds
    let userSeeds = [];
    if (fs.existsSync(userSeedsPath)) {
      const data = fs.readFileSync(userSeedsPath, 'utf8');
      userSeeds = JSON.parse(data);
      if (!Array.isArray(userSeeds)) {
        userSeeds = [];
      }
    }

    // Normalize function for deduplication
    const normalize = (s) => (s || '').trim().toLowerCase();
    const existingKeys = new Set(userSeeds.map(t => normalize(t.english)));

    // Add new terms that don't already exist
    terms.forEach(term => {
      const key = normalize(term.english || term.English);
      if (key && !existingKeys.has(key)) {
        userSeeds.push({
          english: (term.english || term.English || '').trim(),
          arabic: (term.arabic || term.Arabic || '').trim(),
          icon: (term.icon || term.Icon || '').trim(),
          definition_en: (term.definition_en || term.Definition_English || '').trim(),
          definition_ar: (term.definition_ar || term.Definition_Arabic || '').trim(),
        });
        existingKeys.add(key);
      }
    });

    // Ensure data directory exists
    const dataDir = path.dirname(userSeedsPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write back to file
    fs.writeFileSync(userSeedsPath, JSON.stringify(userSeeds, null, 2), 'utf8');
    console.log(`Added ${terms.length} new terms to user_seeds.json`);
  } catch (err) {
    console.error('Error appending to user_seeds.json:', err);
  }
}

// POST /api/process (for text input)
app.post('/api/process', (req, res) => {
  const { words } = req.body;
  if (!words || !Array.isArray(words)) {
    return res.status(400).json({ error: 'Words array required' });
  }

  getExistingWords(words, (err, newWords) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (newWords.length === 0) {
      return res.json({ processed: words.length, new: 0 });
    }

    // Process in batches
    const batches = [];
    for (let i = 0; i < newWords.length; i += BATCH_SIZE) {
      batches.push(newWords.slice(i, i + BATCH_SIZE));
    }

    const allProcessedTerms = [];
    async.eachLimit(batches, CONCURRENCY, (batch, batchCallback) => {
      processBatchWithOpenAI(batch, (err, results) => {
        if (err) {
          console.error('OpenAI error:', err);
          batchCallback(err);
        } else {
          // Normalize keys if needed
          const normalized = results.map(r => ({
            english: r.English || r.english,
            arabic: r.Arabic || r.arabic,
            icon: r.Icon || r.icon || '',
            definition_en: r.Definition_English || r.definition_en,
            definition_ar: r.Definition_Arabic || r.definition_ar
          }));
          // Collect all processed terms for saving to seed file
          allProcessedTerms.push(...normalized);
          insertTerms(normalized, (insertErr) => {
            if (insertErr) {
              batchCallback(insertErr);
            } else {
              // Delay 2 seconds before signaling completion to respect rate limits
              setTimeout(() => batchCallback(null), 2000);
            }
          });
        }
      });
    }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      // Save all new words to user_seeds.json
      if (allProcessedTerms.length > 0) {
        appendToUserSeeds(allProcessedTerms);
      }
      res.json({ processed: words.length, new: newWords.length });
    });
  });
});

// POST /api/upload
app.post('/api/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  let text;
  try {
    if (req.file.mimetype === 'application/pdf') {
      const data = await pdf(req.file.buffer);
      text = data.text;
    } else if (req.file.mimetype === 'text/plain') {
      text = req.file.buffer.toString('utf8');
    } else {
      return res.status(400).json({ error: 'Unsupported file type. Only PDF and TXT allowed.' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Failed to parse file' });
  }

  const words = extractWords(text);
  if (words.length === 0) {
    return res.json({ processed: 0, new: 0 });
  }

  getExistingWords(words, (err, newWords) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (newWords.length === 0) {
      return res.json({ processed: words.length, new: 0 });
    }

    // Process in batches
    const batches = [];
    for (let i = 0; i < newWords.length; i += BATCH_SIZE) {
      batches.push(newWords.slice(i, i + BATCH_SIZE));
    }

    const allProcessedTerms = [];
    async.eachLimit(batches, CONCURRENCY, (batch, batchCallback) => {
      processBatchWithOpenAI(batch, (err, results) => {
        if (err) {
          console.error('OpenAI error:', err);
          batchCallback(err);
        } else {
          const normalized = results.map(r => ({
            english: r.English || r.english,
            arabic: r.Arabic || r.arabic,
            icon: r.Icon || r.icon || '',
            definition_en: r.Definition_English || r.definition_en,
            definition_ar: r.Definition_Arabic || r.definition_ar
          }));
          // Collect all processed terms for saving to seed file
          allProcessedTerms.push(...normalized);
          insertTerms(normalized, (insertErr) => {
            if (insertErr) {
              batchCallback(insertErr);
            } else {
              // Delay 2 seconds before signaling completion to respect rate limits
              setTimeout(() => batchCallback(null), 2000);
            }
          });
        }
      });
    }, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      // Save all new words to user_seeds.json
      if (allProcessedTerms.length > 0) {
        appendToUserSeeds(allProcessedTerms);
      }
      res.json({ processed: words.length, new: newWords.length });
    });
  });
});

// POST /api/process-manual
app.post('/api/process-manual', (req, res) => {
  const { english, definition_en } = req.body;
  if (!english || !definition_en) {
    return res.status(400).json({ error: 'English word and definition required' });
  }

  // Check if exists
  db.get('SELECT english FROM terms WHERE english = ?', [english], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      return res.json({ processed: 1, new: 0 });
    }

    processManualWithOpenAI(english, definition_en, (err, result) => {
      if (err) {
        console.error('OpenAI error:', err);
        return res.status(500).json({ error: err.message });
      }

      insertManualTerm(english, result.arabic_word, definition_en, result.arabic_definition, (err) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        // Save to user_seeds.json
        appendToUserSeeds([{
          english: english,
          arabic: result.arabic_word,
          icon: '',
          definition_en: definition_en,
          definition_ar: result.arabic_definition
        }]);
        res.json({ processed: 1, new: 1 });
      });
    });
  });
});

// GET /api/terms
app.get('/api/terms', (req, res) => {
  db.all('SELECT * FROM terms ORDER BY created_at DESC', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// GET /api/search
app.get('/api/search', (req, res) => {
  const query = req.query.q || '';
  if (!query) {
    return res.json([]);
  }
  const sql = `SELECT * FROM terms WHERE english LIKE ? OR arabic LIKE ? ORDER BY created_at DESC`;
  const searchTerm = `%${query}%`;
  db.all(sql, [searchTerm, searchTerm], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// GET /api/export
app.get('/api/export', (req, res) => {
  db.all('SELECT * FROM terms', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Terms');
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

    res.set({
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': 'attachment; filename=engineering-terms.xlsx'
    });
    res.send(buf);
  });
});

// POST /api/terms - Add a new term manually
app.post('/api/terms', (req, res) => {
  const { english, arabic, icon, definition_en, definition_ar } = req.body;
  if (!english || !arabic || !definition_en || !definition_ar) {
    return res.status(400).json({ error: 'All fields required: english, arabic, definition_en, definition_ar' });
  }

  db.run(`INSERT INTO terms (english, arabic, icon, definition_en, definition_ar)
          VALUES (?, ?, ?, ?, ?)`, [english, arabic, icon || '', definition_en, definition_ar], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, message: 'Term added successfully' });
  });
});

// PUT /api/terms/:id - Update a term
app.put('/api/terms/:id', (req, res) => {
  const { id } = req.params;
  const { english, arabic, icon, definition_en, definition_ar } = req.body;
  if (!english || !arabic || !definition_en || !definition_ar) {
    return res.status(400).json({ error: 'All fields required' });
  }

  db.run(`UPDATE terms SET english = ?, arabic = ?, icon = ?, definition_en = ?, definition_ar = ?
          WHERE id = ?`, [english, arabic, icon || '', definition_en, definition_ar, id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Term not found' });
    }
    res.json({ message: 'Term updated successfully' });
  });
});

// DELETE /api/terms/:id - Delete a term
app.delete('/api/terms/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM terms WHERE id = ?`, [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Term not found' });
    }
    res.json({ message: 'Term deleted successfully' });
  });
});

// GET /api/pronounce/:word - Return word for client-side TTS
app.get('/api/pronounce/:word', (req, res) => {
  const { word } = req.params;
  res.json({ word });
});

// Serve admin.html
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
