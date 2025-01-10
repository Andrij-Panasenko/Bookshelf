import { throttle } from './func-throttle';

const scrollUpButton = document.querySelector('.scroll-up-btn');

scrollUpButton.addEventListener('click', scrollToTop);

const throttledScrollHandler = throttle(() => {
  if (document.documentElement.scrollTop > 100) {
    scrollUpButton.classList.replace('hide', 'show'); //remove class 'hide', add class 'show'
  } else {
    scrollUpButton.classList.replace('show', 'hide'); //remove class 'show', add class 'hide'
  }
}, 350);

window.addEventListener('scroll', throttledScrollHandler);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
