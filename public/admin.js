// DOM elements
const addTermForm = document.getElementById('add-term-form');
const adminSearch = document.getElementById('admin-search');
const searchBtn = document.getElementById('search-btn');
const refreshBtn = document.getElementById('refresh-btn');
const termsContainer = document.getElementById('terms-container');
const editModal = document.getElementById('edit-modal');
const editTermForm = document.getElementById('edit-term-form');

// Load terms on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTerms();
});

// Add term form
addTermForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const term = {
        english: document.getElementById('add-english').value.trim(),
        arabic: document.getElementById('add-arabic').value.trim(),
        icon: document.getElementById('add-icon').value.trim() || '',
        definition_en: document.getElementById('add-definition-en').value.trim(),
        definition_ar: document.getElementById('add-definition-ar').value.trim()
    };
    
    if (!term.english || !term.arabic || !term.definition_en || !term.definition_ar) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    try {
        const response = await fetch('/api/terms', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(term)
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to add term');
        }
        
        showNotification('Term added successfully!', 'success');
        addTermForm.reset();
        loadTerms();
    } catch (error) {
        showNotification('Error adding term: ' + error.message, 'error');
        console.error(error);
    }
});

// Search
searchBtn.addEventListener('click', async () => {
    const query = adminSearch.value.trim();
    if (!query) {
        loadTerms();
        return;
    }
    
    try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Search failed');
        const terms = await response.json();
        displayTerms(terms);
    } catch (error) {
        showNotification('Error searching: ' + error.message, 'error');
        console.error(error);
    }
});

adminSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Refresh
refreshBtn.addEventListener('click', () => {
    loadTerms();
    adminSearch.value = '';
});

// Load terms
async function loadTerms() {
    try {
        termsContainer.innerHTML = `
            <div class="loading-message">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading terms...</p>
            </div>
        `;
        
        const response = await fetch('/api/terms');
        if (!response.ok) throw new Error('Failed to load terms');
        const terms = await response.json();
        displayTerms(terms);
    } catch (error) {
        showNotification('Error loading terms: ' + error.message, 'error');
        console.error(error);
        termsContainer.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error loading terms</p>
            </div>
        `;
    }
}

// Display terms
function displayTerms(terms) {
    if (terms.length === 0) {
        termsContainer.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-inbox"></i>
                <p>No terms found</p>
            </div>
        `;
        return;
    }
    
    termsContainer.innerHTML = terms.map(term => `
        <div class="term-card">
            <div class="term-card-header">
                <div class="term-icon">${term.icon || '📚'}</div>
                <div class="term-actions">
                    <button class="btn btn-icon" onclick="editTerm(${term.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-icon btn-danger" onclick="deleteTerm(${term.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="term-word">${escapeHtml(term.english)}</div>
            <div class="term-translation">${escapeHtml(term.arabic)}</div>
            <div class="term-definition">${escapeHtml(term.definition_en)}</div>
            <div class="term-definition term-definition-ar">${escapeHtml(term.definition_ar)}</div>
        </div>
    `).join('');
}

// Edit term
function editTerm(id) {
    fetch(`/api/terms`)
        .then(res => res.json())
        .then(terms => {
            const term = terms.find(t => t.id === id);
            if (!term) {
                showNotification('Term not found', 'error');
                return;
            }
            
            document.getElementById('edit-id').value = term.id;
            document.getElementById('edit-english').value = term.english;
            document.getElementById('edit-arabic').value = term.arabic;
            document.getElementById('edit-icon').value = term.icon || '';
            document.getElementById('edit-definition-en').value = term.definition_en;
            document.getElementById('edit-definition-ar').value = term.definition_ar;
            
            editModal.classList.add('show');
        })
        .catch(error => {
            showNotification('Error loading term: ' + error.message, 'error');
            console.error(error);
        });
}

// Edit form submit
editTermForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const id = document.getElementById('edit-id').value;
    const term = {
        english: document.getElementById('edit-english').value.trim(),
        arabic: document.getElementById('edit-arabic').value.trim(),
        icon: document.getElementById('edit-icon').value.trim() || '',
        definition_en: document.getElementById('edit-definition-en').value.trim(),
        definition_ar: document.getElementById('edit-definition-ar').value.trim()
    };
    
    if (!term.english || !term.arabic || !term.definition_en || !term.definition_ar) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    try {
        const response = await fetch(`/api/terms/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(term)
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to update term');
        }
        
        showNotification('Term updated successfully!', 'success');
        closeEditModal();
        loadTerms();
    } catch (error) {
        showNotification('Error updating term: ' + error.message, 'error');
        console.error(error);
    }
});

// Delete term
async function deleteTerm(id) {
    if (!confirm('Are you sure you want to delete this term?')) {
        return;
    }
    
    try {
        const response = await fetch(`/api/terms/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to delete term');
        }
        
        showNotification('Term deleted successfully!', 'success');
        loadTerms();
    } catch (error) {
        showNotification('Error deleting term: ' + error.message, 'error');
        console.error(error);
    }
}

// Close edit modal
function closeEditModal() {
    editModal.classList.remove('show');
    editTermForm.reset();
}

// Close modal on outside click
editModal.addEventListener('click', (e) => {
    if (e.target === editModal) {
        closeEditModal();
    }
});

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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

// Make functions global for onclick handlers
window.editTerm = editTerm;
window.deleteTerm = deleteTerm;
window.closeEditModal = closeEditModal;


