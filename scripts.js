// Atualiza o ano do rodapé automaticamente
document.querySelectorAll('#ano').forEach(el=>el.textContent=new Date().getFullYear());

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
