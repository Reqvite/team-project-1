(() => {
  const refs = {
    openAboutBtn: document.querySelector('.about__button'),
    closeAboutBtn: document.querySelector('.about-close__button'),
    about: document.querySelector('.about__modal'),
    body: document.querySelector('body'),
  };
  refs.openAboutBtn.addEventListener('click', toggleAbout);
  refs.closeAboutBtn.addEventListener('click', toggleAbout);
  function toggleAbout() {
    refs.about.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
