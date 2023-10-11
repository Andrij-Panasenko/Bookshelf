import { warningNotify } from "../notify";

//функція приймає ID певної книги і повертає її об'єкт
export async function fetchBookById(id) {
  const BASE_URL = 'https://books-backend.p.goit.global/books';

  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      warningNotify();
      console.log(response.statusText);
      return;
    }
    
    const data = await response.json();

    return data;

  } catch (error) {
    warningNotify();
  }
}

