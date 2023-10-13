import {shoppingBooks} from "../js/shoppinglist-markup"

const bookShopping = document.querySelector('.header-menu-shop');
const stubBook = document.querySelector('.stub');

// Доставння зі сховища інфо та генерація карток

 bookShopping.addEventListener('click', loadbook);

export function loadbook(event){
    event.preventDeefalt();
    checkingStorage();

    const infoBook = localStorage.getItem(FEEDBACK_KEY);
    const infoBookParse = JSON.parse(infoBook);

    renderCardShoppingBook(infoBookParse);
}

// Перевірка чи є в сховище інфо

export function checkingStorage(){
    const infoStorage = localStorage.getItem(FEEDBACK_KEY);
    const infoParse = JSON.parse(infoStorage) || {};

    if(infoParse = {}){
        stubBook.classList.remove('visually-hidden');
    }
}