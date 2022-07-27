(() => {
  const refs = {
    openModalBtn: document.querySelector('.contacts__button--red'),
    closeModalBtn: document.querySelector('.modal__close-btn'),
    modal: document.querySelector('.contacts__modal'),
    body: document.querySelector('body'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
// contacts__button--red     contact-modal-open
// contacts__modal          contact-modal
// modal__close-btn          contact-modal-close
