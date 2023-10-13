// document.addEventListener("DOMContentLoaded", function () {
//   const category = "Hardcover Fiction";
//   const booksContainer = document.getElementById("books-container");

//   fetch(`https://books-backend.p.goit.global/books/category?category=${category}`)
//       .then(response => response.json())
//       .then(data => {
//           const books = data.books;

//           books.forEach(book => {
//               const bookElement = document.createElement("div");
//               bookElement.className = "book";
//               bookElement.innerHTML = `
//                   <h2>${book.title}</h2>
//                   <p>${book.author}</p>
//                   <p>${book.year}</p>
//               `;
//               booksContainer.appendChild(bookElement);
//           });
//       })
//       .catch(error => {
//           console.log(error);
//       });
// });