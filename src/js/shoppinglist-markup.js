
const shoppingBooks = document.querySelector('.shopping-book-list');
const buttonBookDelete = document.querySelector('.class="button-shopping-list');
const shoppingListBook = document.querySelector('.shopping-book');


export function renderCardShoppingBook(infoBookParse){
    const markupShoppingBook = infoBookParse.map(
      ({
        book_image,
        title,
        list_name,
        author,
        description,
        buy_links,
        id,
      }) => {

        const amazonLink = buy_links.find(link => link.name === 'Amazon');
        const appleBooksLink = buy_links.find(item => item.name === 'Apple Books');
        
        
        return `<li class="shopping-book" data-id="${id}">
        
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
                    <img  class="buy-links-icon amazon"  src="../images/amazon-min.png" alt="amazon" loading="lazy" />
                </a>  
                <a class="buy-links" href="${appleBooksLink.url}">
                    <img  class="buy-links-icon apple" width="16" height="16" src="../images/book-shop-min.png" alt="apple book" loading="lazy" />
                </a> 
            </div>
            
            <button type="button" class="button-shopping-list" data-id="${id}">
                <svg class="icon-fill" width="16" height="16">
                    <use href="../images/icons.svg#icon-dump" > </use>
                </svg>
            </button>
        </div>
    </li>`;
      }
    )
    .join('');

shoppingBooks.insertAdjacentHTML('beforeend', markupShoppingBook);

}

// Видалення книги по натисканню кнопки

buttonBookDelete.addEventListener('click', bookDelete, {once: true});

export function bookDelete(event){
   const  buttonId = this.dataset.id;

   const bookId = shoppingListBook.querySelector(`[data-id="${buttonId}"]`);

    bookId.remove();
   
}


