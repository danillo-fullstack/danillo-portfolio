const btnMenu = document.getElementById('btn-menu');
const nav = document.querySelector('aside nav');
const body = document.body;

btnMenu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  btnMenu.setAttribute('aria-expanded', isOpen);

  body.classList.toggle('no-scroll', isOpen);
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      btnMenu.setAttribute('aria-expanded', false);
      body.classList.remove('no-scroll');
    }
  });
});
