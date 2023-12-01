const {books, booksDatabase} = require("../db/books");


// Adding a new book
const addNewBook = (newBook) => {
    console.log("Adding new book-----------------:");
    newBook.id = booksDatabase.length + 1;
    booksDatabase.push(newBook);
    console.log("Here is the list of books with the new book added:\n", booksDatabase);
}

// Listing books 
const listBooks = () => {
    console.log("Here is the list of books:\n", booksDatabase);
}

// updating a book
const updateBook = (id, key, value) => {
    const bookExists = booksDatabase.find(book => book.id === id);
    if (!bookExists) {
        console.log("Book does not exist");
        
    }
    else {
        bookExists[key] = value;
    }
    console.log("Updating a book-----------------:", bookExists);
    
    console.log("Here is the list of books with the updated book:\n", booksDatabase);
}

// updating many properties of a book
const updateMany = (id, obj) => {
    const bookExists = booksDatabase.find(book => book.id === id);
    
    if (!bookExists) {
        console.log("Book does not exist");
    }
    else {
        for (const key in bookExists) {
            bookExists.id = id;
            bookExists[key] = obj[key];
    }
}
    console.log("Updating a book-----------------:", bookExists);
    
    console.log("Here is the list of books with the updated properties of the book:\n", booksDatabase);
}

// removing a book
const removeBook = (id) => {
    const bookExists = booksDatabase.find(book => book.id === id);
    if (!bookExists) {
        console.log("Book does not exist");
    }
    else {
        const index = booksDatabase.indexOf(bookExists);
        booksDatabase.splice(index, 1);
    }
    console.log("Removing a book-----------------:", bookExists);
    
    console.log("Here is the list of books with the removed book:\n", booksDatabase);
}

// searchig for a book by its id
const searchBook = (id) => {
 const book = booksDatabase.find(element => element.id === id);
 if (!book) {
     console.log("Book does not exist");
 }
 else {
     console.log("Book found:",book);
 }
}





module.exports= {
    addNewBook,
    listBooks, 
    updateBook,
    updateMany,
    removeBook,
    searchBook,

}