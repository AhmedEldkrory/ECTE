# Interactive English Flashcards

An interactive flashcard app for English-Arabic vocabulary learning, with pronunciation, file upload, and manual entry support.

## Features

- Upload PDF or TXT files to extract and process words automatically
- Manual input for English words and definitions (auto Arabic translation)
- Flippable flashcards: Front shows English word, pronunciation audio, English definition; Back shows Arabic translation
- Store flashcards in SQLite database for saving and reloading
- Responsive UI with Bootstrap
- Export flashcards to XLSX
- Pronunciation using Web Speech API

## Installation

1. Clone or download the project.
2. Navigate to the project directory: `cd interactive-english-flashcards`
3. Install dependencies: `npm install`
4. Copy `.env.example` to `.env` and fill in your OpenAI API key.

## Environment Variables

Create a `.env` file with:

```
OPENAI_API_KEY=your_openai_api_key_here
MODEL=gpt-4o-mini
PORT=3000
BATCH_SIZE=20
CONCURRENCY=3
DB_PATH=./data.db
```

## Running Locally

1. Start the server: `npm start`
2. Open your browser to `http://localhost:3000`

## API Endpoints

- `POST /api/process` - Process words from text: `{ "words": ["word1", "word2"] }`
- `POST /api/upload` - Upload file (multipart/form-data, field 'file'): Processes PDF/TXT to words
- `POST /api/process-manual` - Add manual flashcard: `{ "english": "word", "definition_en": "definition" }`
- `GET /api/terms` - Get all saved flashcards
- `GET /api/export` - Download XLSX file
- `GET /api/pronounce/:word` - Get word for pronunciation (client-side)

Example curl for process:

```bash
curl -X POST http://localhost:3000/api/process \
  -H "Content-Type: application/json" \
  -d '{"words": ["electricity", "voltage"]}'
```

Example curl for manual:

```bash
curl -X POST http://localhost:3000/api/process-manual \
  -H "Content-Type: application/json" \
  -d '{"english": "example", "definition_en": "Sample definition"}'
```

## Deployment

### Render

1. Push to GitHub.
2. Connect to Render, set build command to `npm install`, start command to `npm start`.
3. Set environment variables in Render dashboard.

### Vercel

For frontend, deploy static files to Vercel, backend to Render.

## Technologies

- Backend: Node.js, Express, SQLite, Multer, pdf-parse
- Frontend: HTML, CSS, JavaScript, Bootstrap 5
- AI: OpenAI API for translations
