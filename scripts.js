
// v31 — menu mobile, link ativo e ano no rodapé

// Menu mobile
const btn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (btn) {
  btn.addEventListener('click', () => {
    const shown = getComputedStyle(menu).display !== 'none';
    menu.style.display = shown ? 'none' : 'flex';
    if (!shown) menu.style.flexWrap = 'wrap';
  });
}

// Destacar link atual
const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('.menu a').forEach(a=>{
  const href = (a.getAttribute('href')||'').toLowerCase();
  if ((here === '' && href.endsWith('index.html')) || here === href) a.classList.add('active');
});

// Ano no rodapé
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
