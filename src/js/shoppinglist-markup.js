import trash from '../images/icons.svg'
import { shoppingList } from "../js/modal-pop-up/modal-pop-up";
import { SHOPPING_LIST_STORAGE_KEY } from '../js/modal-pop-up/modal-pop-up';
import amazon from '../images/amazon-min.png';
import appleBook from '../images/book-shop-min.png';

const shoppingBooks = document.querySelector('.shopping-book-list');
const stubBook = document.querySelector('.stub');

shoppingBooks.addEventListener('click', deleteBook);

export function renderCardShoppingBook(shoppingList){
    const markupShoppingBook = shoppingList.map(
      ({
        book_image,
        title,
        list_name,
        author,
        description,
        buy_links,
        _id,
      }) => {
        const amazonLink = buy_links.find(link => link.name === 'Amazon');
        const appleBooksLink = buy_links.find(item => item.name === 'Apple Books');
        
        return `<li class="shopping-book" data-id="${_id}">
        
        <div class="image-book">
             <img  class="image-book-shopping" src="${book_image}" alt="${description}" loading="lazy" />
        </div>

        <div class="book-info">
            <h3 class="shopping-book-title">${title}</h3>
            <p class="shopping-book-category">${list_name}</p>
            <p class="shopping-book-description">${description}</p>
            <p class="shopping-book-author">${author}</p>

            <div class="shopping-list-links">
                <a class="buy-links" href="${amazonLink.url}">
                    <img  class="buy-links-icon amazon"  src="${amazon}" alt="amazon" loading="lazy" />
                </a>  
                <a class="buy-links" href="${appleBooksLink.url}">
                    <img  class="buy-links-icon apple" src="${appleBook}" alt="apple book" loading="lazy" />
                </a> 
            </div>
            
            <button type="button" class="button-shopping-list js-card-delete" data-id="${_id}">
                <svg class="icon-fill js-card-delete" data-id="${_id}">
                    <use href="${trash}#icon-trash" > </use>
                </svg>
            </button>
        </div>
    </li>`;
      }
    )
    .join('');

  shoppingBooks.innerHTML = markupShoppingBook;
}


if(!shoppingList.length){
  stubBook.classList.remove('visually-hidden');  
}
else{
  renderCardShoppingBook(shoppingList);
}


function deleteBook(evt) {
  if (!evt.target.classList.contains("js-card-delete")) {
    return
  }
  const bookId = evt.target.dataset.id;
  const storageData = JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY));
  const storData = storageData.filter(item => item._id !== bookId);

  localStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify(storData));
  renderCardShoppingBook(storData);

  if (!storData.length) {
    stubBook.classList.remove('visually-hidden');
  }
}


