(() => {
  const $ = (id) => document.getElementById(id);
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

  const items = (window.UNIVERSITY_WORK || []).filter(item => item.visibility !== 'private');
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fileType = (item) => {
    if (item.type) return item.type;
    const ext = (item.file_name || item.url || '').split('?')[0].split('.').pop().toLowerCase();
    if (ext === 'pdf') return 'PDF';
    if (['png','jpg','jpeg','gif','webp','svg'].includes(ext)) return 'Image';
    if (['ppt','pptx','odp'].includes(ext)) return 'PowerPoint';
    return 'Code';
  };
  const card = (item) => `<article class="work-card">
    <div class="work-meta"><span class="work-chip">${esc(item.academic_year)}</span><span class="work-chip">${esc(fileType(item))}</span></div>
    <h4>${esc(item.title)}</h4><p>${esc(item.description || 'University coursework.')}</p>
    <div class="work-card-actions"><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Open in Google Drive ↗</a></div>
  </article>`;
  const render = () => {
    const year = $('year-filter').value;
    const type = $('type-filter').value;
    const filtered = items.filter(item => (year === 'all' || item.academic_year === year) && (type === 'all' || fileType(item) === type));
    $('work-grid').innerHTML = filtered.map(card).join('');
    $('work-count').textContent = `${filtered.length} public ${filtered.length === 1 ? 'item' : 'items'}`;
    $('work-status').textContent = filtered.length ? 'Showing publicly shared university work. Files open through Google Drive.' : 'No public tasks here yet. Add a public Drive link to drive-work.js to display your first task.';
  };
  $('year-filter').addEventListener('change', render);
  $('type-filter').addEventListener('change', render);
  render();
})();
