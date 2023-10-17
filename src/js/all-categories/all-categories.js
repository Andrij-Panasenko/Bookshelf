import { fetchCatrgoryList } from '../api/category-list';
// import { renderTopBooks } from '.';
import { seeMoreBtnClickHandler } from '../bestsellers/seeMore';
import { renderBooksByCategory } from '../bestsellers/renderSelectedCategory';
import { fetchBookById } from '../api/get-book-by-id';
import { warningNotify } from '../notify';
import { fetchSelectedBooks } from '../bestsellers/fetchSelectedBooks';
import { renderMainTitle } from '../bestsellers/render-main-title';

const list = document.querySelector('.categories-list');
const allCategoriesBtn = document.querySelector('.categories-btn');

fetchCatrgoryList().then(resp => {
  console.log(resp);
  resp.forEach(element => {
    list.insertAdjacentHTML(
      'beforeend',
      `<li><button type="submit" class="item-btn" data-id="${element.list_name}">${element.list_name}</button></li>`
    );
  });
});

fetchCatrgoryList();

list.addEventListener('click', onCategoryClick);

async function onCategoryClick(e) {
  allCategoriesBtn.classList.remove('categories-btn');
  allCategoriesBtn.classList.add('item-btn');

  try {
    if (!e.target.dataset.id) {
      return
    }

    e.target.disabled = true;
     
    const id = e.target.dataset.id;
    const data = await fetchSelectedBooks(id);
    renderBooksByCategory(data);
    renderMainTitle(id)
  } catch (error) {
    warningNotify();
  }
}

// allCategoriesBtn.addEventListener('click', onAllCategoriesClick);

// function onAllCategoriesClick() {
//   renderTopBooks();
// }
