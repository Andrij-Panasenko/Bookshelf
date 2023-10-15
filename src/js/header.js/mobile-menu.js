 export function mobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuOpen = document.querySelector(".mobile-menu-open");
    const menuClose = document.querySelector(".mobile-menu-close");

    menuOpen.addEventListener("click", changeMenu);
    menuClose.addEventListener("click", changeMenu);

    function changeMenu () {const isMenuOpen =  menuOpen.getAttribute('aria-expanded') === "true" || false;
menuOpen.setAttribute('aria-expanded', !isMenuOpen);
mobileMenu.classList.toggle("is-open");}

// const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);

//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//         if (!e.matches) return;
//         mobileMenu.classList.remove('is-open');
//         menuOpen.setAttribute('aria-expanded', false);
//         bodyScrollLock.enableBodyScroll(document.body);
//       });
  
};
mobileMenu();