import { warningNotify } from "./notify";

//функція повертає масив об'єктів top-books. 
export async function fetchTopBooks() {
  const URL = 'https://books-backend.p.goit.global/books/top-books';

  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    warningNotify();
    console.log(error.message);
  }
}