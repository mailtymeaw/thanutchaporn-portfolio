const cards = [...document.querySelectorAll('.cert-card')];
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('#certSearch');
const noResults = document.querySelector('.no-results');
let activeFilter = 'all';

function applyFilters() {
  const term = search.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach((card) => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const text = `${card.dataset.search || ''} ${card.textContent}`.toLowerCase();
    const searchMatch = !term || text.includes(term);
    card.hidden = !(categoryMatch && searchMatch);
    if (!card.hidden) shown += 1;
  });
  noResults.hidden = shown !== 0;
}

filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  applyFilters();
}));
search.addEventListener('input', applyFilters);

const viewer = document.querySelector('#certViewer');
const viewerPdf = document.querySelector('#viewerPdf');
const viewerImage = document.querySelector('#viewerImage');
const viewerTitle = document.querySelector('#viewerTitle');

document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => {
  const source = button.dataset.view;
  const type = button.dataset.type;
  const title = button.closest('.cert-card').querySelector('h3').textContent;
  viewer.className = `viewer ${type}-mode`;
  viewerTitle.textContent = title;
  if (type === 'pdf') {
    viewerPdf.src = `${source}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;
    viewerImage.removeAttribute('src');
  } else {
    viewerImage.src = source;
    viewerImage.alt = `${title} certificate`;
    viewerPdf.removeAttribute('src');
  }
  viewer.showModal();
}));

function closeViewer() {
  viewer.close();
  viewerPdf.removeAttribute('src');
  viewerImage.removeAttribute('src');
}
document.querySelector('#viewerClose').addEventListener('click', closeViewer);
viewer.addEventListener('click', (event) => { if (event.target === viewer) closeViewer(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && viewer.open) closeViewer(); });

// Best-effort protection for a view-only presentation. Browser content can never
// be made fully copy-proof, but these controls prevent casual saving and printing.
document.addEventListener('contextmenu', (event) => event.preventDefault());
document.addEventListener('dragstart', (event) => {
  if (event.target.closest('.card-visual, .viewer-stage')) event.preventDefault();
});
document.addEventListener('keydown', (event) => {
  const blockedShortcut = (event.ctrlKey || event.metaKey) && ['s', 'p'].includes(event.key.toLowerCase());
  if (blockedShortcut) {
    event.preventDefault();
    event.stopPropagation();
  }
}, true);
