const {books_operations, addNewBook, listBooks, updateBook, updateMany, removeBook, searchBook} = require("./controll/books_operations");



// Add calling
let newBook = {
    title: 'The Power of positive thinking',
    author: 'Anonymous',
    year: 1951
}
addNewBook(newBook)

// books listing 
listBooks();

// updating one property of the book
updateBook(1, 'year', 1999);

// updating many properties of the book
const exampleObj = {
    title: 'Dating and Waiting',
    author: "Myles Monroe",
    year: 2001,

}
updateMany(5, exampleObj);

// removing a book
removeBook(1);

// searching for a book by its id
searchBook(4);