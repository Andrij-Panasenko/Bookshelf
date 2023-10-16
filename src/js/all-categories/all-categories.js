import { fetchCatrgoryList } from '../api/category-list';
// import { renderTopBooks } from '.';

const list = document.querySelector('.categories-list');
const allCategoriesBtn = document.querySelector('.categories-btn');

fetchCatrgoryList().then(resp => {
  console.log(resp);
  resp.forEach(element => {
    list.insertAdjacentHTML(
      'beforeend',
      `<li><button type="submit" class="item-btn">${element.list_name}</button></li>`
    );
  });
});

fetchCatrgoryList();

list.addEventListener('click', onCategoryClick);

function onCategoryClick() {
  allCategoriesBtn.classList.remove('categories-btn');
  allCategoriesBtn.classList.add('item-btn');
}

// allCategoriesBtn.addEventListener('click', onAllCategoriesClick);

// function onAllCategoriesClick() {
//   renderTopBooks();
// }
