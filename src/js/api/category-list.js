import { warningNotify } from "../notify";

//функція повертає масив об'єктів з назвами категорій книжок
export async function fetchCatrgoryList() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';
  try {
    const reponse = await fetch(BASE_URL);
    
    if (!reponse.ok) {
      warningNotify();
      return;
    };
    const data = await reponse.json();

    return data;

  } catch (error) {
    warningNotify();
  }
}