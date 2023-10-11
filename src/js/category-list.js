import { warningNotify } from "./notify";

//функція повертає масив об'єктів з назвами категорій книжок
export async function fetchCatrgoryList() {
  const URL = 'https://books-backend.p.goit.global/books/category-list';
  try {
    const reponse = await fetch(URL);
    
    if (!reponse.ok) {
      warningNotify();
      return;
    };
    const data = await reponse.json();

    return data;

  } catch (error) {
    warningNotify();
    console.log(error.mesage);
  }
}