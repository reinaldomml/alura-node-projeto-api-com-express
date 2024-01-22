const fs = require('fs')

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json'))
}

function getBookbyId(id) {
    const books = JSON.parse(fs.readFileSync('books.json'))

    const bookFiltered = books.filter((books) => books.id === id)[0]

    return bookFiltered
}

function insertNewBook(newBook) {
    const books = JSON.parse(fs.readFileSync('books.json'))

    const newListBooks = [...books, newBook]

    fs.writeFileSync('books.json', JSON.stringify(newListBooks))
}

function editBook(id, newData) {
    let books = JSON.parse(fs.readFileSync('books.json'))
    const indexFromBook = books.findIndex((book) => book.id === id)

    const changedContent = { ...books[indexFromBook], ...newData }

    books[indexFromBook] = changedContent

    fs.writeFileSync('books.json', JSON.stringify(books))
}

function deleteBookbyId(id) {
    const books = JSON.parse(fs.readFileSync('books.json'))

    const bookFiltered = books.filter((books) => books.id !== id)

    fs.writeFileSync('books.json', JSON.stringify(bookFiltered))
}

module.exports = { getAllBooks, getBookbyId, insertNewBook, editBook, deleteBookbyId }
