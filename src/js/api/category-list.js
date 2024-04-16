import axios from 'axios';
import { warningNotify } from '../notify';

//функція повертає масив об'єктів з назвами категорій книжок
export async function fetchCatrgoryList() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';
  try {
    const response = await axios.get(BASE_URL);

    if (!response) {
      warningNotify();
      return;
    }

    return response.data;
  } catch (error) {
    warningNotify();
  }
}
