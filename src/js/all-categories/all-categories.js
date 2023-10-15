import { fetchCatrgoryList } from '../api/category-list';

const list = document.querySelector('.categories-list');

// console.log(list);

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
