const btnMenu = document.getElementById('btn-menu');
const nav = document.querySelector('aside nav');
const body = document.body;
const main = document.querySelector('main');

btnMenu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  btnMenu.setAttribute('aria-expanded', isOpen);
  body.classList.toggle('no-scroll', isOpen);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (nav.classList.contains('open')) {
      e.preventDefault();

      const targetId = link.getAttribute('href');

      // Fecha o menu
      nav.classList.remove('open');
      btnMenu.setAttribute('aria-expanded', false);
      body.classList.remove('no-scroll');

      setTimeout(() => {
        if (targetId.startsWith('#')) {
          const targetElement = main.querySelector(targetId);
          if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            main.scrollTo({
              top: offsetTop - 180,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    }
  });
});
