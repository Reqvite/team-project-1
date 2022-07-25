(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open__btn'),
    closeMenuBtn: document.querySelector('.close-menu__btn'),
    menu: document.querySelector('.mob__menu'),
    body: document.querySelector('body'),
    closeMenuLink: document.querySelector('.mob-nav__link'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLink.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.menu.classList.toggle('menu-scroll');
    refs.body.classList.toggle('no-scroll');
  }
})();
