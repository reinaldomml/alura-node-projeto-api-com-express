const { getAllBooks } = require('../services/books')

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

function postBooks(req, res) {
    try {
        res.send('Sucessfully POST')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

function pathBooks(req, res) {
    try {
        res.send('Sucessfully PATH')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

function deletebooks(req, res) {
    try {
        res.send('Sucessfully DELETE')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = { getBooks, postBooks, pathBooks, deletebooks }
