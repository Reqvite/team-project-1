(() => {
  const refs = {
    closeMobileBtn: document.querySelector('[data-nav__link]'),
    mobile: document.querySelector('.lama'),

    closeMobileABtn: document.querySelector('[data-nav__link-a]'),
    mobilea: document.querySelector('.lama-a'),

    closeMobileBBtn: document.querySelector('[data-nav__link-b]'),
    mobileb: document.querySelector('.lama-b'),

    body: document.querySelector('body'),
  };
  refs.closeMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileABtn.addEventListener('click', toggleMobile);
  refs.closeMobileBBtn.addEventListener('click', toggleMobile);
  function toggleMobile() {
    refs.mobile.classList.toggle('is-hidden');
    refs.mobilea.classList.toggle('is-hidden');
    refs.mobileb.classList.toggle('is-hidden');

    refs.body.classList.toggle('menu-scroll');
  }
})();
