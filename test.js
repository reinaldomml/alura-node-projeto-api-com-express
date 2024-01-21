const fs = require('fs')

const booksData = JSON.parse(fs.readFileSync('books.json'))
const newBook = {
    id: '3',
    nome: 'Livro sobre React',
}

fs.writeFileSync('books.json', JSON.stringify([...booksData, newBook]))

console.log(JSON.parse(fs.readFileSync('books.json')))
