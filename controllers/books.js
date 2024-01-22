const {
    getAllBooks,
    getBookbyId,
    insertNewBook,
    editBook,
    deleteBookbyId,
} = require('../services/books')

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            // Number(2) -> 2
            // Number('batata') -> NaN
            const book = getBookbyId(id)
            res.send(book)
        } else {
            res.status(422)
            res.send('Id is not valid')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

function postBooks(req, res) {
    try {
        const newBook = req.body

        if (newBook.nome !== null && newBook.nome !== undefined) {
            insertNewBook(newBook)
            res.status(201)
            res.send('Sucessfully POST - New Book Added')
        } else {
            res.status(422)
            res.send('Name of book is necessary')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

function pathBooks(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const newData = req.body

            editBook(id, newData)
            res.send('Sucessfully PATH - Book edited')
        } else {
            res.status(422)
            res.send('Id is not valid')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

function deleteBooks(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteBookbyId(id)
            res.send('Sucessfully DELETE - Book deleted')
        } else {
            res.status(422)
            res.send('Id is not valid')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = { getBooks, getBook, postBooks, pathBooks, deleteBooks }
