import {renderCardShoppingBook} from "../js/shoppinglist-markup"

const bookShopping = document.querySelector('.header-menu-shop');
const stubBook = document.querySelector('.stub');
import {SHOPPING_LIST_STORAGE_KEY} from "./modal-pop-up/modal-pop-up";
import {shoppingList } from "../js/modal-pop-up/modal-pop-up";

// Доставння зі сховища інфо та генерація карток

bookShopping.addEventListener('click', loadbook);

 function loadbook(event){
    event.preventDeefalt();
    
    if(shoppingList = []){
        stubBook.classList.remove('visually-hidden');  
    }
    else{
        renderCardShoppingBook(shoppingList);
    }
}
