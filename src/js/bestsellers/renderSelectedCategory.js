import getRefs from './refs';
const { renderingContainer } = getRefs();

import { makeCategoryBooksMarkup } from './allBooksMarkup';

export function renderBooksByCategory(data) {
  const markup = makeCategoryBooksMarkup(data);
  renderingContainer.innerHTML = markup;
}
