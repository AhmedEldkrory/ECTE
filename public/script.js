// Global state
let terms = [];
let currentIndex = 0;
let isFlipped = false;
let autoplayInterval = null;
let voiceSpeed = 1.0;

// DOM elements
const modeSelect = document.getElementById('mode-select');
const uploadSection = document.getElementById('upload-section');
const manualSection = document.getElementById('manual-section');
const searchSection = document.getElementById('search-section');
const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
const englishWord = document.getElementById('english-word');
const englishDefinition = document.getElementById('english-definition');
const manualBtn = document.getElementById('manual-btn');
const searchInput = document.getElementById('search-input');
const loadBtn = document.getElementById('load-btn');
const exportBtn = document.getElementById('export-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const autoplayBtn = document.getElementById('autoplay-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const voiceSpeedSlider = document.getElementById('voice-speed');
const speedValue = document.getElementById('speed-value');
const flashcardWrapper = document.getElementById('flashcard-wrapper');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

// Mode selection handler
modeSelect.addEventListener('change', (e) => {
    const mode = e.target.value;
    uploadSection.classList.add('hidden');
    manualSection.classList.add('hidden');
    searchSection.classList.add('hidden');
    
    if (mode === 'upload') {
        uploadSection.classList.remove('hidden');
    } else if (mode === 'manual') {
        manualSection.classList.remove('hidden');
    } else if (mode === 'search') {
        searchSection.classList.remove('hidden');
    }
});

// Load cards
loadBtn.addEventListener('click', async () => {
    try {
        showNotification('Loading flashcards...', 'info');
        const response = await fetch('/api/terms');
        if (!response.ok) throw new Error('Failed to load terms');
        terms = await response.json();
        if (terms.length === 0) {
            showNotification('No flashcards found. Add some first!', 'error');
            return;
        }
        currentIndex = 0;
        isFlipped = false;
        displayCard();
        showNotification(`Loaded ${terms.length} flashcards!`, 'success');
    } catch (error) {
        showNotification('Error loading flashcards: ' + error.message, 'error');
        console.error(error);
    }
});

// File upload
uploadBtn.addEventListener('click', async () => {
    const file = fileInput.files[0];
    if (!file) {
        showNotification('Please select a file', 'error');
        return;
    }
    
    const formData = new FormData();
    formData.append('file', file);
    
    try {
        showNotification('Processing file...', 'info');
        uploadBtn.disabled = true;
        uploadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) throw new Error('Upload failed');
        const result = await response.json();
        
        showNotification(`Processed ${result.processed} words, ${result.new} new flashcards added!`, 'success');
        fileInput.value = '';
        
        // Reload cards
        await loadCards();
    } catch (error) {
        showNotification('Error uploading file: ' + error.message, 'error');
        console.error(error);
    } finally {
        uploadBtn.disabled = false;
        uploadBtn.innerHTML = '<i class="fas fa-upload"></i> Upload & Process';
    }
});

// Manual entry
manualBtn.addEventListener('click', async () => {
    const word = englishWord.value.trim();
    const definition = englishDefinition.value.trim();
    
    if (!word || !definition) {
        showNotification('Please enter both word and definition', 'error');
        return;
    }
    
    try {
        showNotification('Processing...', 'info');
        manualBtn.disabled = true;
        manualBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        
        const response = await fetch('/api/process-manual', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ english: word, definition_en: definition })
        });
        
        if (!response.ok) throw new Error('Processing failed');
        const result = await response.json();
        
        showNotification(`Flashcard added! (${result.new} new)`, 'success');
        englishWord.value = '';
        englishDefinition.value = '';
        
        // Reload cards
        await loadCards();
    } catch (error) {
        showNotification('Error adding flashcard: ' + error.message, 'error');
        console.error(error);
    } finally {
        manualBtn.disabled = false;
        manualBtn.innerHTML = '<i class="fas fa-plus"></i> Add Flashcard';
    }
});

// Search
let searchTimeout;
searchInput.addEventListener('input', async (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.trim();
    
    if (query.length < 2) {
        if (query.length === 0) {
            await loadCards();
        }
        return;
    }
    
    searchTimeout = setTimeout(async () => {
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('Search failed');
            terms = await response.json();
            currentIndex = 0;
            isFlipped = false;
            displayCard();
        } catch (error) {
            showNotification('Error searching: ' + error.message, 'error');
            console.error(error);
        }
    }, 300);
});

// Export
exportBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('/api/export');
        if (!response.ok) throw new Error('Export failed');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'engineering-terms.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        showNotification('Excel file downloaded!', 'success');
    } catch (error) {
        showNotification('Error exporting: ' + error.message, 'error');
        console.error(error);
    }
});

// Navigation
prevBtn.addEventListener('click', () => {
    if (terms.length === 0) return;
    currentIndex = (currentIndex - 1 + terms.length) % terms.length;
    isFlipped = false;
    displayCard();
});

nextBtn.addEventListener('click', () => {
    if (terms.length === 0) return;
    currentIndex = (currentIndex + 1) % terms.length;
    isFlipped = false;
    displayCard();
});

// Shuffle
shuffleBtn.addEventListener('click', () => {
    if (terms.length === 0) return;
    
    // Disable shuffle button during animation
    shuffleBtn.disabled = true;
    shuffleBtn.style.opacity = '0.6';
    shuffleBtn.style.cursor = 'not-allowed';
    
    // Add shuffling animation class
    const flashcard = document.getElementById('current-flashcard');
    if (flashcard) {
        flashcard.classList.add('shuffling');
    }
    
    // Wait for fade-out animation, then shuffle
    setTimeout(() => {
        // Remove shuffling class
        if (flashcard) {
            flashcard.classList.remove('shuffling');
        }
        
        // Shuffle the array
        for (let i = terms.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [terms[i], terms[j]] = [terms[j], terms[i]];
        }
        currentIndex = 0;
        isFlipped = false;
        
        // Display new card with fade-in
        displayCard();
        
        // Add fade-in animation
        setTimeout(() => {
            const newFlashcard = document.getElementById('current-flashcard');
            if (newFlashcard) {
                newFlashcard.classList.add('shuffle-in');
                setTimeout(() => {
                    newFlashcard.classList.remove('shuffle-in');
                }, 600);
            }
        }, 50);
        
        // Re-enable shuffle button
        shuffleBtn.disabled = false;
        shuffleBtn.style.opacity = '1';
        shuffleBtn.style.cursor = 'pointer';
        
        showNotification('Cards shuffled!', 'success');
    }, 800); // Wait 800ms for shuffle animation
});

// Autoplay
autoplayBtn.addEventListener('click', () => {
    if (terms.length === 0) return;
    
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
        autoplayBtn.innerHTML = '<i class="fas fa-play"></i>';
        autoplayBtn.classList.remove('active');
    } else {
        // Increased delay to 6 seconds (6000ms) for better reading time
        autoplayInterval = setInterval(() => {
            nextBtn.click();
        }, 6000);
        autoplayBtn.innerHTML = '<i class="fas fa-pause"></i>';
        autoplayBtn.classList.add('active');
    }
});

// Voice speed
voiceSpeedSlider.addEventListener('input', (e) => {
    voiceSpeed = parseFloat(e.target.value);
    speedValue.textContent = voiceSpeed.toFixed(1) + 'x';
});

// Display card
function displayCard() {
    if (terms.length === 0) {
        flashcardWrapper.innerHTML = `
            <div class="welcome-message">
                <i class="fas fa-book-open"></i>
                <h2>Welcome to ETCE</h2>
                <p>Load your flashcards to get started!</p>
            </div>
        `;
        updateProgress();
        return;
    }
    
    const term = terms[currentIndex];
    isFlipped = false;
    
    flashcardWrapper.innerHTML = `
        <div class="flashcard" id="current-flashcard">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <div class="flashcard-header">
                        <div class="flashcard-icon">${term.icon || '📚'}</div>
                    </div>
                    <div>
                        <div class="flashcard-word">${term.english}</div>
                        <div class="flashcard-definition">${term.definition_en || ''}</div>
                    </div>
                    <div class="flashcard-actions">
                        <button class="btn btn-primary btn-small" onclick="pronounceWord('${term.english}', 'en')">
                            <i class="fas fa-volume-up"></i> Play Audio
                        </button>
                    </div>
                </div>
                <div class="flashcard-back">
                    <div class="flashcard-header">
                        <div class="flashcard-icon">${term.icon || '📚'}</div>
                    </div>
                    <div>
                        <div class="flashcard-word">${term.arabic || ''}</div>
                        <div class="flashcard-definition">${term.definition_ar || ''}</div>
                    </div>
                    <div class="flashcard-actions">
                        <button class="btn btn-primary btn-small" onclick="pronounceWord(${JSON.stringify(term.arabic || term.english)}, 'ar')">
                            <i class="fas fa-volume-up"></i> Play Audio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add click handler for flip with professional animation
    const flashcard = document.getElementById('current-flashcard');
    flashcard.addEventListener('click', () => {
        flashcard.classList.add('flipping');
        flashcard.classList.toggle('flipped');
        isFlipped = !isFlipped;
        
        // Remove flipping class after animation completes
        setTimeout(() => {
            flashcard.classList.remove('flipping');
        }, 800);
    });
    
    updateProgress();
}

// Update progress
function updateProgress() {
    if (terms.length === 0) {
        progressFill.style.width = '0%';
        progressText.textContent = '0 / 0';
        return;
    }
    
    const progress = ((currentIndex + 1) / terms.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `${currentIndex + 1} / ${terms.length}`;
}

// Pronounce word with enhanced Arabic support
function pronounceWord(word, lang) {
    console.log('pronounceWord called:', { word, lang });
    
    if (!word || word.trim() === '') {
        showNotification('No text to pronounce', 'error');
        return;
    }
    
    // For Arabic, use web-based TTS as primary method
    if (lang === 'ar') {
        pronounceArabic(word);
    } else {
        pronounceEnglish(word);
    }
}

// Arabic pronunciation using web-based TTS (Google Translate API)
function pronounceArabic(text) {
    console.log('Attempting Arabic pronunciation:', text);
    showNotification('Playing Arabic audio...', 'success');
    
    // Cancel any ongoing speech
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    
    // Use Google Translate TTS API (free, reliable, no key required)
    const encodedText = encodeURIComponent(text);
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${encodedText}`;
    
    const audio = new Audio(ttsUrl);
    
    // Adjust playback rate
    audio.playbackRate = voiceSpeed;
    
    audio.onerror = (e) => {
        console.error('Web TTS error:', e);
        // Fallback to browser TTS
        tryBrowserArabicTTS(text);
    };
    
    audio.onplay = () => {
        console.log('Web Arabic audio playing');
    };
    
    audio.onended = () => {
        console.log('Web Arabic audio completed');
    };
    
    audio.play().catch(err => {
        console.error('Audio play error:', err);
        // Fallback to browser TTS
        tryBrowserArabicTTS(text);
    });
}

// Browser-based Arabic TTS fallback
function tryBrowserArabicTTS(text) {
    console.log('Trying browser-based Arabic TTS');
    
    if (!('speechSynthesis' in window)) {
        showNotification('Arabic pronunciation not available. Please check your internet connection.', 'error');
        return;
    }
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = voiceSpeed;
    utterance.lang = 'ar-SA';
    
    const trySpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log('Available voices:', voices.length);
        console.log('Arabic voices:', voices.filter(v => v.lang.includes('ar')).map(v => v.name));
        
        const arabicVoices = voices.filter(v => 
            v.lang.startsWith('ar-SA') || 
            v.lang.startsWith('ar-EG') || 
            v.lang.startsWith('ar-AE') ||
            v.lang.startsWith('ar-') ||
            v.lang === 'ar' ||
            v.name.toLowerCase().includes('arabic')
        );
        
        if (arabicVoices.length > 0) {
            utterance.voice = arabicVoices[0];
            console.log('Using Arabic voice:', arabicVoices[0].name);
        } else {
            utterance.lang = 'ar';
            console.warn('No Arabic voice found, using default');
        }
        
        utterance.onerror = (e) => {
            console.error('Browser TTS error:', e);
            showNotification('Arabic pronunciation failed. Please install Arabic language pack.', 'error');
        };
        
        utterance.onstart = () => {
            console.log('Browser Arabic speech started');
        };
        
        window.speechSynthesis.speak(utterance);
    };
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
            trySpeak();
            window.speechSynthesis.onvoiceschanged = null;
        };
        setTimeout(() => trySpeak(), 1000);
    } else {
        trySpeak();
    }
}

// English pronunciation
function pronounceEnglish(text) {
    if (!('speechSynthesis' in window)) {
        showNotification('Speech synthesis not supported', 'error');
        return;
    }
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = voiceSpeed;
    utterance.lang = 'en-US';
    
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => 
        v.lang.startsWith('en-US') || 
        v.lang.startsWith('en-GB') ||
        v.lang.startsWith('en')
    );
    
    if (englishVoice) {
        utterance.voice = englishVoice;
    }
    
    utterance.onerror = (e) => {
        console.error('English speech error:', e);
        showNotification('Error playing audio', 'error');
    };
    
    window.speechSynthesis.speak(utterance);
}

// Load cards helper
async function loadCards() {
    try {
        const response = await fetch('/api/terms');
        if (!response.ok) throw new Error('Failed to load terms');
        terms = await response.json();
        currentIndex = 0;
        isFlipped = false;
        displayCard();
        return true;
    } catch (error) {
        console.error('Error loading cards:', error);
        return false;
    }
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Load voices when available
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        // Voices loaded
    };
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Set initial mode
    modeSelect.dispatchEvent(new Event('change'));
    
    // Automatically load cards from seed on page load
    const loaded = await loadCards();
    if (loaded && terms.length > 0) {
        showNotification(`Loaded ${terms.length} flashcards from database!`, 'success');
    } else if (loaded && terms.length === 0) {
        showNotification('No flashcards found. Add some using the controls above!', 'info');
    }
});

