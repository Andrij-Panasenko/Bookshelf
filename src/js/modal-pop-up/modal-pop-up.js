// import fetchBookById from '../api/get-book-by-id'

const refs = {
    categoryContainer: document.querySelector('.content-rendering-container'),
    addButton: document.querySelector('.modal-pop-up-btn'), 
    closeModalButton: document.querySelector('[data-pop-up-close]'),
    modalPopUp: document.querySelector('[data-pop-up]'),
    modalContent: document.querySelector('.modal-pop-up-content'),
}

function getIconPaths() {
    return {
      appleBooksIconPath: new URL('../../images/book-shop-min.png',import.meta.url).href,
  
      amazonIconPath: new URL('../../images/amazon-min.png', import.meta.url).href,
    };
  }

refs.categoryContainer.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (
    evt.target.matches('.js-book') ||
    evt.target.matches('.js-overlay')
  ) {
    BookElClick(evt);
  }
});

class Books {
  #BASE_URL = `https://books-backend.p.goit.global/books`;
  bookID = null;

  async fetchBookByID() {
    try {
      const response = await fetch(`${this.#BASE_URL}/${this.bookID}`);
      const book = await response.json();
      return book;
    } catch (error) {
      console.log(error.message);
    }
  }
}

const Book = new Books();
export const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books'; 

export const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

function addToStorage(book) {
  shoppingList.push(book);
  localStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify(shoppingList));
}


function AddBookInStorage(data) {
  const isBookId = shoppingList.find(
    bookInStorage => bookInStorage._id === data._id
  );

  if (isBookId) {
    const dataBookID = refs.addButton.getAttribute('data_id_of_book');

    const bookIndex = shoppingList.findIndex(
      bookInStorage => bookInStorage._id === dataBookID
    );

    shoppingList.splice(bookIndex, 1);
    localStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(shoppingList)
    );
    refs.addButton.textContent = 'Add to shopping list';
    modalMessage.remove();
    return;
  }

  addToStorage(data);
  refs.addButton.textContent = 'Remove from the shopping list';
  refs.addButton.after(modalMessage);
}

export async function BookElClickToStorage(evt) {
  try {
    const data = await Book.fetchBookByID();
    AddBookInStorage(data);
  } catch (err) {
    console.log(err);
  }
}

refs.addButton.addEventListener('click', BookElClickToStorage);


const modalMessage = document.createElement('p');
modalMessage.classList.add('modal-message');
modalMessage.textContent =
  'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."';

//  Book card
export async function BookElClick(evt) {
  Book.bookID = evt.target.attributes.data_id.value;

  try {
    const data = await Book.fetchBookByID();
    refs.modalPopUp.classList.remove('is-hidden');
    refs.modalContent.innerHTML = createModal(data);
    document.body.style.overflow = 'hidden';
    refs.closeModalButton.addEventListener('click', ModalPopUpCloseBtnClick);
    document.addEventListener('keydown', EscapeKeyDown);
    document.addEventListener('click', BackdropClick);
    const isBookId = shoppingList.find(
      bookInStorage => bookInStorage._id === data._id
    );
    if (isBookId) {
      refs.addButton.textContent = 'Remove from the shopping list';
      refs.addButton.after(modalMessage);
      return;
    }
    refs.addButton.textContent = 'Add to shopping list';
    modalMessage.remove();
  } catch (err) {
    console.log(err);
  }
}
// Modal

export function createModal(data) {
  const {
    _id,
    book_image,
    author,
    title,
    description,
    buy_links: [amazon, apple],
  } = data;

  const { appleBooksIconPath, amazonIconPath } =
    getIconPaths();
  refs.addButton.setAttribute('data_id_of_book', `${_id}`);

  return `            
    <img class="modal-img" src="${book_image}" alt="book cover" />
    <div class='modal-book-attributes'>
      <p class="modal-book-title">${title}</p>
      <p class="modal-book-author">${author}</p>
      <p class="modal-book-desc">${description}</p>
      <div class="modal-shops">
        <a class="modal-shop-link" href="${amazon.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
          <img class="modal-shop-img shopping-shopimg amazon" src="${amazonIconPath}" alt="Amazon link" aria-label="Buy this book on Amazon" />
        </a>
        <a class="modal-shop-link" href="${apple.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">
          <img class="modal-shop-img shopping-shopimg apple" src="${appleBooksIconPath}" alt="Apple Books link"  aria-label="Buy this book on Apple Books"/>
        </a>
      </div>
    </div>
`;
}

function ModalPopUpCloseBtnClick(evt) {
  refs.modalPopUp.classList.add('is-hidden');
  document.body.style.removeProperty('overflow');
}

function BackdropClick(evt) {
  if (evt.target == refs.modalPopUp) {
    refs.modalPopUp.classList.add('is-hidden');
    document.body.style.removeProperty('overflow');
  }
}

function EscapeKeyDown(evt) {
  if (evt.key === 'Escape') {
    refs.modalPopUp.classList.add('is-hidden');
    document.body.style.removeProperty('overflow');
  }
}

refs.closeModalButton.removeEventListener('click', ModalPopUpCloseBtnClick);

document.removeEventListener('click', BackdropClick);

document.removeEventListener('keydown', EscapeKeyDown);