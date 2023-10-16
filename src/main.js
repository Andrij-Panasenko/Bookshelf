import { fetchTopBooks } from './js/api/get-api-request';
import { fetchBookByCategory } from './js/api/category';
import { fetchCatrgoryList } from './js/api/category-list';
import { fetchBookById } from './js/api/get-book-by-id';

// import './js/scroll-up';

import { renderCardShoppingBook } from './js/shoppinglist-markup';
import { loadbook } from './js/local-storage';
import { checkingStorage } from './js/local-storage';
import { bookDelete } from './js/shoppinglist-markup';

import { mobileMenu } from './js/header.js/mobile-menu';
mobileMenu();

import './js/support-ukraine';
import './js/all-categories/all-categories';
