let allTerms = [];

document.addEventListener('DOMContentLoaded', () => {
  loadTerms();

  // Search functionality
  document.getElementById('searchInput').addEventListener('input', filterTerms);

  // Add form
  document.getElementById('addForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const english = document.getElementById('addEnglish').value.trim();
    const arabic = document.getElementById('addArabic').value.trim();
    const icon = document.getElementById('addIcon').value.trim();
    const definition_en = document.getElementById('addDefEn').value.trim();
    const definition_ar = document.getElementById('addDefAr').value.trim();

    try {
      const response = await fetch('/api/terms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ english, arabic, icon, definition_en, definition_ar })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Term added successfully');
        document.getElementById('addForm').reset();
        loadTerms();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Network error: ' + err.message);
    }
  });

  // Save edit
  document.getElementById('saveEdit').addEventListener('click', async () => {
    const id = document.getElementById('editId').value;
    const english = document.getElementById('editEnglish').value.trim();
    const arabic = document.getElementById('editArabic').value.trim();
    const icon = document.getElementById('editIcon').value.trim();
    const definition_en = document.getElementById('editDefEn').value.trim();
    const definition_ar = document.getElementById('editDefAr').value.trim();

    try {
      const response = await fetch(`/api/terms/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ english, arabic, icon, definition_en, definition_ar })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Term updated successfully');
        bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
        loadTerms();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Network error: ' + err.message);
    }
  });
});

async function loadTerms() {
  try {
    const response = await fetch('/api/terms');
    allTerms = await response.json();
    displayTerms(allTerms);
  } catch (err) {
    alert('Error loading terms: ' + err.message);
  }
}

function displayTerms(terms) {
  const tbody = document.getElementById('termsBody');
  tbody.innerHTML = terms.map(term => `
    <tr>
      <td>${term.id}</td>
      <td>${term.english}</td>
      <td>${term.arabic}</td>
      <td>${term.icon || ''}</td>
      <td>${term.definition_en}</td>
      <td>${term.definition_ar}</td>
      <td>
        <button class="btn btn-sm btn-primary" onclick="editTerm(${term.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteTerm(${term.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function filterTerms() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) {
    displayTerms(allTerms);
    return;
  }
  const filtered = allTerms.filter(term =>
    term.english.toLowerCase().includes(query) ||
    term.arabic.includes(query) ||
    term.definition_en.toLowerCase().includes(query) ||
    term.definition_ar.includes(query)
  );
  displayTerms(filtered);
}

async function editTerm(id) {
  try {
    const response = await fetch('/api/terms');
    const terms = await response.json();
    const term = terms.find(t => t.id == id);
    if (term) {
      document.getElementById('editId').value = term.id;
      document.getElementById('editEnglish').value = term.english;
      document.getElementById('editArabic').value = term.arabic;
      document.getElementById('editIcon').value = term.icon || '';
      document.getElementById('editDefEn').value = term.definition_en;
      document.getElementById('editDefAr').value = term.definition_ar;
      new bootstrap.Modal(document.getElementById('editModal')).show();
    }
  } catch (err) {
    alert('Error loading term: ' + err.message);
  }
}

async function deleteTerm(id) {
  if (confirm('Are you sure you want to delete this term?')) {
    try {
      const response = await fetch(`/api/terms/${id}`, { method: 'DELETE' });
      const data = await response.json();
      if (response.ok) {
        alert('Term deleted successfully');
        loadTerms();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Network error: ' + err.message);
    }
  }
}
