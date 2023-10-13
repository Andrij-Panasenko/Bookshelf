const scrollUpButton = document.querySelector(".scroll-up-btn");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
        scrollUpButton.classList.add("show");
        scrollUpButton.classList.remove("hide");
    } else {
        scrollUpButton.classList.add("hide");
        scrollUpButton.classList.remove("show");
    }
});

scrollUpButton.addEventListener("click", scrollToTop);