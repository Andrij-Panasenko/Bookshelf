import { fetchCatrgoryList } from '../api/category-list';
import { renderBooksByCategory } from '../bestsellers/renderSelectedCategory';
import { warningNotify } from '../notify';
import { fetchSelectedBooks } from '../bestsellers/fetchSelectedBooks';
import { renderMainTitle } from '../bestsellers/render-main-title';
import { scrollAllow } from '../helpers/no-scroll';
import { scrollForbidden } from '../helpers/no-scroll';
import { renderTopBooks } from '../bestsellers/bestsellers';


const list = document.querySelector('.categories-list');
const allCategoriesBtn = document.querySelector('.categories-btn');


fetchCatrgoryList().then(resp => {
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
  scrollForbidden();
  allCategoriesBtn.classList.remove('categories-btn');
  allCategoriesBtn.classList.add('item-btn');

  try {
    if (!e.target.dataset.id) {
      return
    }
     
    const id = e.target.dataset.id;
    const data = await fetchSelectedBooks(id);
    renderBooksByCategory(data);
    renderMainTitle(id);
    scrollAllow();
  } catch (error) {
    warningNotify();
  }
}

allCategoriesBtn.addEventListener('click', onAllCategoriesClick);

function onAllCategoriesClick() {
  renderTopBooks();
  location.reload();
}
