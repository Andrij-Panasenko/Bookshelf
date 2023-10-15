import { warningNotify } from "./notify";
import { fetchBookByCategory } from "./api/category"

export function getLiMarkup(card) {
    fetchBookByCategory(card)
    .then(item => {
        item
         .map(({ _id, author, book_image, title }) => {
            const markup = `
            <li class="gallery__item" id="${_id}">
            <img
              class="gallery__image"
              src="${book_image}"
              data-source=""
              alt="${title}"
            />
            <h2 class="gallery-title-book">${title}</h2>
            <p class="gallery-author">${author}</p>
        </li>`;
        return markup;
         })
         .join('');
    })
    .catch(warningNotify())
}