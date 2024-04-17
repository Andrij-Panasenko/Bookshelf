import { warningNotify } from '../notify';
import axios from 'axios';

//функція повертає масив об'єктів top-books.
export function fetchTopBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';

  try {
    const data = axios.get(BASE_URL);
    return data;
  } catch (error) {
    warningNotify();
  }
}
