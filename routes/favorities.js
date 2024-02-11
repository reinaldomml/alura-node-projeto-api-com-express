const { Router } = require('express')
const { getFavorities, postFavorities, deleteFavoritie } = require('../controllers/favorities')

const router = Router()

router.get('/', getFavorities)

router.post('/:id', postFavorities)

router.delete('/:id', deleteFavoritie)

module.exports = router
