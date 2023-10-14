import { warningNotify } from "../notify";

//функція повертає масив об'єктів top-books. 
export async function fetchTopBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    return data;
    
  } catch (error) {
    warningNotify();
  }
}
