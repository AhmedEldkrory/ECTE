document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const uploadBtn = document.getElementById('uploadBtn');
  const manualWord = document.getElementById('manualWord');
  const manualDef = document.getElementById('manualDef');
  const manualBtn = document.getElementById('manualBtn');
  const wordListSelect = document.getElementById('wordListSelect');
  const loadCardsBtn = document.getElementById('loadCardsBtn');
  const exportBtn = document.getElementById('exportBtn');
  const termsContainer = document.getElementById('termsContainer');
  const voiceSpeed = document.getElementById('voiceSpeed');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const suggestions = document.getElementById('suggestions');
  const inputsSection = document.getElementById('inputsSection');
  const searchSection = document.getElementById('searchSection');
  const cardsArea = document.getElementById('cardsArea');
  const memorizeControls = document.getElementById('memorizeControls');

  let allTerms = [];
  let currentTerms = [];
  let voiceRate = 1;
  let currentIndex = 0;
  let autoplayInterval;
  let currentMode = 'memorize';

  // Upload File
  uploadBtn.addEventListener('click', async () => {
    const file = fileInput.files[0];
    if (!file) return alert('Please select a file.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Processed ${data.processed} words from file, ${data.new} new.`);
        loadTerms();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Network error: ' + err.message);
    }
  });

  // Add Manual Flashcard
  manualBtn.addEventListener('click', async () => {
    const english = manualWord.value.trim();
    const definition_en = manualDef.value.trim();
    if (!english || !definition_en) return alert('Please enter word and definition.');

    try {
      const response = await fetch('/api/process-manual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ english, definition_en })
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Added flashcard: ${data.new ? 'New' : 'Already exists'}.`);
        manualWord.value = '';
        manualDef.value = '';
        loadTerms();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Network error: ' + err.message);
    }
  });

  // Word List Select
  wordListSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      inputsSection.style.display = 'block';
      cardsArea.style.display = 'block';
      searchSection.style.display = 'none';
    } else if (value === 'upload') {
      fileInput.click();
      inputsSection.style.display = 'block';
    }
  });

  // Load Cards Button
  loadCardsBtn.addEventListener('click', loadTerms);

  // Voice Speed Slider
  voiceSpeed.addEventListener('input', (e) => {
    voiceRate = parseFloat(e.target.value);
  });

  // Search Input Event Listener
  searchInput.addEventListener('input', showSuggestions);
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  suggestions.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown-item')) {
      searchInput.value = e.target.dataset.term;
      suggestions.style.display = 'none';
      performSearch();
    }
  });

  // Navigation Buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const mode = e.target.dataset.mode;
      switchMode(mode);
    });
  });

  function switchMode(mode) {
    currentMode = mode;
    inputsSection.style.display = 'none';
    searchSection.style.display = 'none';
    memorizeControls.style.display = 'none';
    document.getElementById('gridView').style.display = 'none';
    document.getElementById('singleCardView').style.display = 'none';
    cardsArea.style.display = 'block';

    const progress = document.getElementById('progressIndicator');
    if (progress) {
      if (mode === 'search') {
        progress.style.display = 'none';
      } else {
        progress.style.display = 'block';
      }
    }

    if (mode === 'memorize') {
      memorizeControls.style.display = 'block';
      document.getElementById('singleCardView').style.display = 'block';
      if (currentTerms.length > 0) {
        shuffleTerms();
        currentIndex = 0;
        updateProgress();
        displaySingleCard(currentTerms[currentIndex]);
      } else {
        document.getElementById('singleCard').innerHTML = '<p class="text-muted">No terms available. Load terms first.</p>';
        updateProgress();
      }
    } else if (mode === 'search') {
      searchSection.style.display = 'block';
      document.getElementById('singleCardView').style.display = 'block';
      if (searchInput.value.trim()) {
        performSearch();
      } else {
        document.getElementById('singleCard').innerHTML = '<p class="text-muted">Enter a search term to view the card.</p>';
      }
    }
  }

  // Show suggestions for autocomplete
  function showSuggestions() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      suggestions.style.display = 'none';
      return;
    }
    const matches = allTerms.filter(term =>
      term.english.toLowerCase().includes(query) || term.arabic.includes(query)
    ).slice(0, 10);
    if (matches.length > 0) {
      suggestions.innerHTML = matches.map(term => `<button class="dropdown-item" data-term="${term.english}">${term.english} (${term.arabic})</button>`).join('');
      suggestions.style.display = 'block';
    } else {
      suggestions.style.display = 'none';
    }
  }

  // Perform search
  function performSearch() {
    const query = searchInput.value.trim();
    if (!query) return;
    suggestions.style.display = 'none';
    filterTerms();
  }

  // Search Filter - Now shows single card for search results
  async function filterTerms() {
    const query = searchInput.value.trim();
    if (!query) {
      currentTerms = [...allTerms];
      document.getElementById('singleCard').innerHTML = '<p class="text-muted">Enter a search term to view the card.</p>';
      return;
    }
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      currentTerms = await response.json();
      if (currentTerms.length > 0) {
        // Show first result as single card
        displaySingleCard(currentTerms[0]);
      } else {
        document.getElementById('singleCard').innerHTML = '<p class="text-muted">No results found for "' + query + '".</p>';
      }
    } catch (err) {
      alert('Error searching terms: ' + err.message);
      currentTerms = [];
      document.getElementById('singleCard').innerHTML = '<p class="text-muted">Search error. Try again.</p>';
    }
  }

  // Shuffle terms array
  function shuffleTerms() {
    for (let i = currentTerms.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currentTerms[i], currentTerms[j]] = [currentTerms[j], currentTerms[i]];
    }
  }

  // Update progress indicator
  function updateProgress() {
    const progress = document.getElementById('progressIndicator');
    if (currentTerms.length > 0) {
      progress.textContent = `${currentIndex + 1} / ${currentTerms.length}`;
    } else {
      progress.textContent = '0 / 0';
    }
  }

  // Display single card for both modes
  function displaySingleCard(term) {
    const singleCard = document.getElementById('singleCard');
    if (term) {
      singleCard.innerHTML = `
        <div class="top-section">
          <h2 class="english">${term.english}</h2>
          <span class="term-icon">${term.icon || ''}</span>
          <button class="btn btn-outline-primary pronounce-btn" data-word="${term.english}">🔊 Play Audio</button>
          <p class="card-text">${term.definition_en}</p>
        </div>
        <div class="bottom-section">
          <h2 class="arabic">${term.arabic}</h2>
          ${term.definition_ar ? `<p class="card-text">${term.definition_ar}</p>` : ''}
        </div>
      `;
      // Add event listener for pronounce
      const pronounceBtn = singleCard.querySelector('.pronounce-btn');
      if (pronounceBtn) {
        pronounceBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          pronounceWord(term.english);
        });
      }
    } else {
      singleCard.innerHTML = '<p class="text-muted">No terms available</p>';
    }
    if (currentMode === 'memorize') {
      updateProgress();
    }
  }

  // Grid display deprecated for search; using single card view
  function displayGridTerms(terms) {
    console.log('Grid view no longer used; search now displays single card.');
  }

  // Load Terms from API
  async function loadTerms() {
    try {
      const response = await fetch('/api/terms');
      allTerms = await response.json();
      currentTerms = [...allTerms];
      if (currentMode === 'memorize') {
        if (currentTerms.length > 0) {
          shuffleTerms();
          currentIndex = 0;
          updateProgress();
          displaySingleCard(currentTerms[0]);
        } else {
          document.getElementById('singleCard').innerHTML = '<p class="text-muted">No terms available. Load terms first.</p>';
          updateProgress();
        }
      } else if (currentMode === 'search') {
        if (searchInput.value.trim()) {
          filterTerms();
        } else {
          document.getElementById('singleCard').innerHTML = '<p class="text-muted">Enter a search term to view the card.</p>';
        }
      }
    } catch (err) {
      alert('Error loading terms: ' + err.message);
    }
  }

  // Pronounce Word using Web Speech API
  function pronounceWord(word) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = voiceRate;
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis not supported in this browser.');
    }
  }

  // Export XLSX
  exportBtn.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/export');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'flashcards.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert('Error exporting: ' + err.message);
    }
  });

  // Memorize Controls Event Listeners
  document.getElementById('shuffleBtn').addEventListener('click', () => {
    if (currentTerms.length > 0) {
      shuffleTerms();
      currentIndex = 0;
      displaySingleCard(currentTerms[0]);
    }
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentTerms.length > 0) {
      currentIndex = (currentIndex + 1) % currentTerms.length;
      displaySingleCard(currentTerms[currentIndex]);
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(nextCard, 3000); // Auto next every 3 seconds
      }
    }
  });

  function nextCard() {
    if (currentTerms.length > 0) {
      currentIndex = (currentIndex + 1) % currentTerms.length;
      displaySingleCard(currentTerms[currentIndex]);
    }
  }

  document.getElementById('autoplayBtn').addEventListener('click', () => {
    const btn = document.getElementById('autoplayBtn');
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
      btn.textContent = 'Autoplay';
      btn.className = 'btn btn-info me-2';
    } else {
      if (currentTerms.length > 0) {
        autoplayInterval = setInterval(nextCard, 3000);
        btn.textContent = 'Stop Autoplay';
        btn.className = 'btn btn-warning me-2';
      }
    }
  });

  // Initial load
  loadTerms();
  switchMode('memorize');
});
