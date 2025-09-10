const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});
