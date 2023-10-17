  function mobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuOpen = document.querySelector(".mobile-menu-open");
const body = document.querySelector('body');
    
    menuOpen.addEventListener("click", changeMenu);


    function changeMenu () 
    {const isMenuOpen =  menuOpen.getAttribute('aria-expanded') === "true" || false;
menuOpen.setAttribute('aria-expanded', !isMenuOpen);
mobileMenu.classList.toggle("is-open");
menuOpen.classList.toggle("is-open");


}
//закоментував Андрій, не чіпати і не розкоментовувати
// menuOpen.addEventListener("click", changeMenu);

// window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     menuOpen.setAttribute('aria-expanded', false);
//     // bodyScrollLock.enableBodyScroll(document.body);
//   });
};
mobileMenu();


// function mobileMenuFunc() {
//     const mobileMenu = document.querySelector(".mobile-menu");
//     const menuOpen = document.querySelector(".mobile-menu-open");
  
//     function changeMenu() {
//       if (mobileMenu.classList.contains("is-open")) {
//         mobileMenu.classList.remove("is-open");
//         menuOpen.classList.remove("is-open");
//       } else {
//         mobileMenu.classList.add("is-open");
//         menuOpen.classList.add("is-open");
//       }
//     }
  
//     menuOpen.addEventListener("click", changeMenu);
//   }
  
//   mobileMenuFunc();


