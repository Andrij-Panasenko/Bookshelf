import { warningNotify } from "./notify";

//функція приймає рядок з назвою певної категорії і повертає масив об'єктів книжок цієї категорії
export async function fetchBookByCategory(categoryName) {
  const URL = 'https://books-backend.p.goit.global/books/category';

  try {
    const queryUrl = `${URL}?category=${categoryName}`;
    const url = await fetch(queryUrl);
    const jsonData = await url.json();

    return jsonData;
    
  } catch (error) {
    warningNotify();
    console.log(error.message);
  }
};