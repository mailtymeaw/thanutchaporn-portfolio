(() => {
  const counters = document.querySelectorAll('[data-visitor-count]');
  if (!counters.length) return;
  const baseUrl = 'https://api.counterapi.dev/v1/thanutchaporn_portfolio/public_visitors/';
  const storageKey = 'thanutchaporn_portfolio_visitor_counted';
  let alreadyCounted = false;
  try { alreadyCounted = localStorage.getItem(storageKey) === 'yes'; } catch (_) {}
  fetch(alreadyCounted ? baseUrl : `${baseUrl}up`, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error('Counter unavailable');
      return response.json();
    })
    .then((data) => {
      const count = Number(data.count);
      if (!Number.isFinite(count)) throw new Error('Invalid counter value');
      counters.forEach((counter) => { counter.textContent = count.toLocaleString('en-US'); });
      if (!alreadyCounted) {
        try { localStorage.setItem(storageKey, 'yes'); } catch (_) {}
      }
    })
    .catch(() => counters.forEach((counter) => { counter.textContent = '—'; }));
})();
