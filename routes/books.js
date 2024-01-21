const { Router } = require('express')
const { getBooks, postBooks, pathBooks, deletebooks } = require('../controllers/books')

const router = Router()

router.get('/', getBooks)

router.post('/', postBooks)

router.patch('/', pathBooks)

router.delete('/', deletebooks)

module.exports = router
