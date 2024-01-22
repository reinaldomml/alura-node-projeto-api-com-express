const { Router } = require('express')
const { getBooks, getBook, postBooks, pathBooks, deleteBooks } = require('../controllers/books')

const router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', postBooks)

router.patch('/:id', pathBooks)

router.delete('/:id', deleteBooks)

module.exports = router
