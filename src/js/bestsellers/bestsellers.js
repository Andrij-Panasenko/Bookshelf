import getTopBooksArray from './fetchBooks';
import { createBookMarkup } from './oneBookMarkup';
import getRefs from './refs.js';
import { fetchTopBooks } from '../api/get-api-request';
import Notiflix from 'notiflix';
import { scrollAllow } from '../helpers/no-scroll';
import { scrollForbidden } from '../helpers/no-scroll';
import { warningNotify } from '../notify';


const contentContainer = document.querySelector('.content-rendering-container');


export async function renderTopBooks() {
  try {
    scrollForbidden();
    const response = await fetchTopBooks();
    const data = response.data;
    // console.log(data);
    const bestsell = `
      <ul class="category-blocks-list">
        ${data
          .map(
            ({ list_name, books }) => `
          <li class="bestseller-category">
            <h3 class="bestseller-category-title"> ${list_name}</h3> 
            <ul class="books-list">
            ${books
              .map(
                ({ _id, author, book_image, title, description }) => `
              <li class="books-list-item bestsellers-book-item">
                  <a class="book-link" href="${book_image}" aria-label="Book thumbnail">
                    <div class="book-thumb">
                      <img class="book-image" src="${book_image}" loading="lazy" data_id=${_id} alt="${description}"/>
                      <div class="book-image-overlay" data_id=${_id} aria-label="${title}">
                        <p class="book-image-overlay-text">Quick view</p>
                      </div>
                    </div>
                    <div class="book-item-meta">
                      <h3 class="book-title">${title}</h3>
                      <p class="book-author">${author}</p>
                    </div>
                  </a>
                  </li>`
              )
              .join('')}
            </ul> 
            <button type="button" class="button see-more-btn" data-id="${list_name}">See more</button>
          </li>`
          )
          .join('')}
      </ul>`;


    contentContainer.innerHTML = bestsell;
    scrollAllow()
    Notiflix.Loading.remove();
    
    } catch (error) {
    console.log("помилка");
    warningNotify();
    }
  }
renderTopBooks(); 



//НЕ ВИДАЛЯТИ
            //  <li class="bestseller-category">
            //    <h3 class="bestseller-category-title">${title}</h3>
            //      <ul class="books-list">
            //      <li class="books-list-item bestsellers-book-item">
            //      <a class="book-link" href="${book_image}" aria-label="Book thumbnail">
            //        <div class="book-thumb">
            //          <img class="book-image" src="${book_image}" loading="lazy" data_id=${_id} alt="${description}"/>
            //          <div class="book-image-overlay" data_id=${_id} aria-label="${title}">
            //            <p class="book-image-overlay-text">Quick view</p>
            //          </div>
            //        </div>
            //        <div class="book-item-meta">
            //          <h3 class="book-title">${title}</h3>
            //          <p class="book-author">${author}</p>
            //        </div>
            //      </a>
            //      </li>
            //    </ul>
            //       <button type="button" class="button see-more-btn" data-id="${list_name}">See more</button>
            //   </li>