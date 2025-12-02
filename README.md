# 🌟 Engineering Terms and Concepts Elicitation (ETCE)

A modern, interactive flashcard application for Engineering Terms and Concepts Elicitation with English-Arabic vocabulary learning, AI-powered translations, pronunciation features, and a beautiful user interface.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)

## ✨ Features

### 🎴 Flashcard System
- **Flippable Cards**: Click to flip between English and Arabic sides
- **English Side**: Word, icon, pronunciation button, and English definition
- **Arabic Side**: Arabic translation with pronunciation support
- **Smooth Animations**: Beautiful card flip animations and transitions

### 🔊 Pronunciation
- **English Pronunciation**: Built-in Web Speech API for English words
- **Arabic Pronunciation**: Support for Arabic text-to-speech (requires Arabic language pack)
- **Voice Speed Control**: Adjustable pronunciation speed
- **Multi-language Support**: Automatic voice detection and selection

### 📚 Learning Modes
- **Memorize Mode**: Study flashcards one at a time with shuffle and autoplay
- **Search Mode**: Quick search through all flashcards
- **Progress Tracking**: See your progress (current card / total cards)

### 📁 File Management
- **File Upload**: Upload PDF or TXT files to extract and process words automatically
- **Manual Entry**: Add flashcards manually with English word and definition
- **Auto Translation**: AI-powered automatic Arabic translation using OpenAI
- **Export to Excel**: Download all flashcards as XLSX file

### 🎨 Modern UI/UX
- **Beautiful Design**: Modern gradient backgrounds with light green theme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Card flips, hover effects, and transitions
- **Glassmorphism Effects**: Modern frosted glass design elements
- **Dark/Light Friendly**: Optimized color scheme for readability

### 👨‍💼 Admin Panel
- **Term Management**: Add, edit, and delete flashcards
- **Search Functionality**: Quick search through all terms
- **Modern Dashboard**: Clean and intuitive admin interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key (for automatic translations)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/engineering-terms-concepts-elicitation.git
   cd engineering-terms-concepts-elicitation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   MODEL=gpt-4o-mini
   PORT=3000
   BATCH_SIZE=20
   CONCURRENCY=3
   DB_PATH=./data.db
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 📖 Usage

### Adding Flashcards

#### Method 1: File Upload
1. Select "Upload File" from the dropdown
2. Choose a PDF or TXT file
3. Click "Upload & Process"
4. The system will extract words and create flashcards automatically

#### Method 2: Manual Entry
1. Select "Custom Text" from the dropdown
2. Enter English word and definition
3. Click "Add Flashcard"
4. Arabic translation will be generated automatically

### Studying Flashcards

1. Click "Load Cards" to load all flashcards
2. Choose a mode:
   - **Memorize**: Study cards one by one
   - **Search**: Search for specific words
3. Click on the card to flip and see the Arabic translation
4. Use "Play Audio" buttons to hear pronunciation
5. Use "Next" to move to the next card
6. Use "Shuffle" to randomize the order
7. Use "Autoplay" to automatically advance cards

### Admin Panel

1. Navigate to `/admin.html`
2. Add new terms with English, Arabic, icon, and definitions
3. Edit or delete existing terms
4. Search through all terms

## 🔧 API Endpoints

### Terms Management
- `GET /api/terms` - Get all flashcards
- `POST /api/terms` - Add a new flashcard
- `PUT /api/terms/:id` - Update a flashcard
- `DELETE /api/terms/:id` - Delete a flashcard
- `GET /api/search?q=query` - Search flashcards

### File Processing
- `POST /api/upload` - Upload and process PDF/TXT file
- `POST /api/process-manual` - Process manual entry

### Export
- `GET /api/export` - Download flashcards as XLSX

### Example API Calls

```bash
# Get all terms
curl http://localhost:3000/api/terms

# Add a new term
curl -X POST http://localhost:3000/api/terms \
  -H "Content-Type: application/json" \
  -d '{
    "english": "example",
    "arabic": "مثال",
    "definition_en": "A sample instance",
    "definition_ar": "مثال على شيء"
  }'

# Search terms
curl http://localhost:3000/api/search?q=example
```

## 🎨 Customization

### Changing Colors

Edit `public/styles.css` and modify the CSS variables:

```css
:root {
  --primary-color: #10b981;      /* Main green color */
  --primary-light: #34d399;      /* Light green */
  --primary-lighter: #6ee7b7;    /* Lighter green */
  /* ... */
}
```

### Adjusting Voice Speed

The voice speed slider in the controls section adjusts pronunciation speed from 0.5x to 2.0x.

## 🌐 Browser Compatibility

- Chrome/Edge (Recommended)
- Firefox
- Safari
- Opera

**Note**: For Arabic pronunciation, you need to install Arabic language pack in your operating system:
- **Windows**: Settings → Language → Add Arabic → Download language pack
- **Mac**: System Preferences → Accessibility → Spoken Content → Add Arabic voices

## 🚢 Deployment

### Quick Deploy Options

#### Option 1: Render (Recommended - Free Tier Available)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/etce.git
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Render will auto-detect the `render.yaml` configuration
   - Add environment variables:
     - `OPENAI_API_KEY` (from your OpenAI account)
     - `MODEL` (optional, defaults to gpt-4o-mini)
   - Click "Create Web Service"
   - Your app will be live at `https://your-app-name.onrender.com`

#### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Add environment variables in Vercel dashboard
   - Your app will be live automatically

#### Option 3: Railway

1. **Push to GitHub** (same as Render step 1)

2. **Deploy on Railway**
   - Go to [Railway](https://railway.app/)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Add environment variables
   - Railway auto-detects Node.js and deploys
   - Your app will be live at `https://your-app-name.up.railway.app`

#### Option 4: Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Deploy**
   ```bash
   heroku create your-app-name
   git push heroku main
   heroku config:set OPENAI_API_KEY=your_key_here
   ```

### Environment Variables

Create a `.env` file (or set in your hosting platform):

```env
OPENAI_API_KEY=your_openai_api_key_here
MODEL=gpt-4o-mini
PORT=3000
BATCH_SIZE=20
CONCURRENCY=3
DB_PATH=./data.db
```

**Important**: Never commit `.env` file to GitHub! Use `.env.example` as a template.

### GitHub Repository Setup

1. **Initialize Git** (if not already done)
   ```bash
   git init
   ```

2. **Add all files**
   ```bash
   git add .
   ```

3. **Create initial commit**
   ```bash
   git commit -m "Initial commit: ETCE flashcard app"
   ```

4. **Create GitHub repository**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., `etce` or `engineering-terms-app`)
   - Don't initialize with README (you already have one)

5. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Post-Deployment Checklist

- [ ] Environment variables are set in hosting platform
- [ ] Database file is created (SQLite will auto-create)
- [ ] OpenAI API key is valid and has credits
- [ ] App is accessible via HTTPS
- [ ] Test file upload functionality
- [ ] Test flashcard creation
- [ ] Test pronunciation features

### Troubleshooting Deployment

**Issue**: App crashes on startup
- Check environment variables are set correctly
- Verify Node.js version (requires 14+)
- Check logs in hosting platform dashboard

**Issue**: Database errors
- Ensure `DB_PATH` is writable
- Some platforms may need persistent storage (Render, Railway support this)

**Issue**: OpenAI API errors
- Verify API key is correct
- Check API credits/usage limits
- Ensure `MODEL` environment variable matches available models

## 🛠️ Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **SQLite3** - Database
- **OpenAI API** - AI translations
- **Multer** - File upload handling
- **pdf-parse** - PDF text extraction
- **XLSX** - Excel export

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Interactivity
- **Bootstrap 5** - UI framework
- **Font Awesome** - Icons
- **Google Fonts (Poppins)** - Typography
- **Web Speech API** - Text-to-speech

## 📝 Project Structure

```
engineering-translator-ai/
├── public/              # Frontend files
│   ├── index.html      # Main page
│   ├── admin.html      # Admin panel
│   ├── script.js       # Main JavaScript
│   ├── admin.js        # Admin JavaScript
│   ├── styles.css      # Main styles
│   └── admin.css       # Admin styles
├── data/               # Data files
│   └── user_seeds.json # Seed data
├── server.js           # Express server
├── seed.js             # Database seeding
├── package.json        # Dependencies
├── .env                # Environment variables (not in git)
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Dr. Mazen Badawy** - Doctor of Teaching and Testing

## 🙏 Acknowledgments

- OpenAI for translation API
- Bootstrap for UI components
- Font Awesome for icons
- All contributors and users

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/yourusername/engineering-terms-concepts-elicitation/issues) page
2. Create a new issue with details
3. Check browser console for errors (F12)

## 🎯 Roadmap

- [ ] User authentication
- [ ] Progress tracking and statistics
- [ ] Spaced repetition algorithm
- [ ] Multiple language support
- [ ] Mobile app version
- [ ] Offline mode
- [ ] Study sessions and goals

---

⭐ If you find this project helpful, please give it a star on GitHub!
