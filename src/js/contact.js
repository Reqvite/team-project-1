(() => {
  const refs = {
    openModalBtn: document.querySelector('[contact-modal-open]'),
    closeModalBtn: document.querySelector('[contact-modal-close]'),
    modal: document.querySelector('[contact-modal]'),
    body: document.querySelector('body'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
