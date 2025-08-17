// v43 — burger com classe .open, link ativo e ano no rodapé

// Menu mobile: abre/fecha com classe (CSS cuida do layout)
const btn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  // fecha ao tocar num link
  menu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> menu.classList.remove('open'));
  });
}

// Link ativo no menu
const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('.menu a').forEach(a=>{
  const href = (a.getAttribute('href')||'').toLowerCase();
  if ((here === '' && href.endsWith('index.html')) || here === href) a.classList.add('active');
});

// Ano no rodapé
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
