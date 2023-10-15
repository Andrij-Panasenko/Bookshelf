import getRefs from './refs';
const { categoryContainerEl } = getRefs();

import { fetchSelectedBooks } from './fetchSelectedBooks';
import { renderBooksByCategory } from './renderSelectedCategory';
// import { scrollToTop } from './back-to-top'; - //❗❗❗❗❗ НЕ РОЗКОМЕНТОВУВАТИ ❗❗❗❗❗
import { renderMainTitle } from './render-main-title';


categoryContainerEl.addEventListener('click', seeMoreBtnClickHandler);

async function seeMoreBtnClickHandler(e) {
  if (!e.target.classList.contains('see-more-btn')) return;

  const id = e.target.dataset.id;
  const data = await fetchSelectedBooks(id);

  renderMainTitle(id);

  const categoriesBtn = document.querySelectorAll('.category-btn');
  const activeCategoryBtn = document.querySelector('.active-category');
  for (const btn of categoriesBtn) {
    if (btn.dataset.id === id) {
      btn.classList.add('active-category');
    }
  }
  activeCategoryBtn.classList.remove('active-category');

  renderBooksByCategory(data);
  scrollToTop();
}
