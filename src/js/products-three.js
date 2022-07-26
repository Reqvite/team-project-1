(() => {
    const menuBtnRef = document.querySelector("[data-productsthree-button]");
    const mobileMenuRef = document.querySelector("[data-productsthree]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
    });
  })();