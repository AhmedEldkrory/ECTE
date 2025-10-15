const fs = require('fs');

const content = fs.readFileSync('seed.js', 'utf8');

// Regex to match each term object
const termRegex = /\{\s*english:\s*'([^']*)',\s*arabic:\s*'([^']*)',\s*icon:\s*'([^']*)',\s*definition_en:\s*'([^']*)',\s*definition_ar:\s*'([^']*)'\s*\},?/g;

let match;
const terms = [];
while ((match = termRegex.exec(content)) !== null) {
  terms.push({
    english: match[1],
    arabic: match[2],
    icon: match[3],
    definition_en: match[4],
    definition_ar: match[5]
  });
}

// Deduplicate based on english
const seen = new Set();
const unique = terms.filter(term => {
  if (seen.has(term.english)) return false;
  seen.add(term.english);
  return true;
});

// Find the position of the terms array
const startIndex = content.indexOf('const terms = [') + 'const terms = ['.length;
const endIndex = content.lastIndexOf('];');

const before = content.substring(0, startIndex);
const after = content.substring(endIndex + 2); // +2 for '];'

// Reconstruct the unique terms array with original formatting
const uniqueStr = unique.map(term => `  {
    english: '${term.english}',
    arabic: '${term.arabic}',
    icon: '${term.icon}',
    definition_en: '${term.definition_en}',
    definition_ar: '${term.definition_ar}'
  }`).join(',\n');

const newContent = before + '\n' + uniqueStr + '\n];\n' + after;

fs.writeFileSync('seed.js', newContent);

console.log(`Deduplicated to ${unique.length} unique terms from ${terms.length} total entries.`);
