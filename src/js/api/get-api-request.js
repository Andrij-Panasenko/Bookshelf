import { warningNotify } from "../notify";
import axios from "axios";

//функція повертає масив об'єктів top-books. 
export function fetchTopBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';

  try {
    // const response = await fetch(BASE_URL);
    // const data = await response.json();

    const data = axios.get(BASE_URL);
    console.log(data);
    return data;
  } catch (error) {
    warningNotify();
  }
}
