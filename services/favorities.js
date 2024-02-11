const fs = require('fs')

function getAllFavorities() {
    return JSON.parse(fs.readFileSync('favorities.json'))
}

function deleteFavoritiebyId(id) {
    const books = JSON.parse(fs.readFileSync('favorities.json'))

    // ERRO, TRATAMENTO NECESSÁRIO: Se os IDs em seus arquivos JSON são números, a comparação estrita (===) falhará porque está comparando tipos diferentes (string vs. number).
    const booksFiltered = books.filter((book) => book.id != id)

    fs.writeFileSync('favorities.json', JSON.stringify(booksFiltered))
}

function insertFavorities(id) {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const favorities = JSON.parse(fs.readFileSync('favorities.json'))

    // ERRO, TRATAMENTO NECESSÁRIO: Se os IDs em seus arquivos JSON são números, a comparação estrita (===) falhará porque está comparando tipos diferentes (string vs. number).
    const BookInserted = books.find((book) => book.id == id)
    if (BookInserted) {
        const newListOfFavoritiesBooks = [...favorities, BookInserted]
        fs.writeFileSync('favorities.json', JSON.stringify(newListOfFavoritiesBooks))
    } else {
        console.log(`Livro com id ${id} não encontrado.`)
    }
}

module.exports = { getAllFavorities, deleteFavoritiebyId, insertFavorities }
