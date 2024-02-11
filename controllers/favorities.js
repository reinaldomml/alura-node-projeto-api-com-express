const {
    getAllFavorities,
    insertFavorities,
    deleteFavoritiebyId,
} = require('../services/favorities')

function getFavorities(req, res) {
    try {
        const books = getAllFavorities()
        res.send(books)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

function postFavorities(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            insertFavorities(id)
            res.status(201)
            res.send('Sucessfully POST - New Favoritie Added')
        } else {
            res.status(422)
            res.send('Id is not valid')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

function deleteFavoritie(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteFavoritiebyId(id)
            res.send('Sucessfully DELETE - Favoritie deleted')
        } else {
            res.status(422)
            res.send('Id is not valid')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = { getFavorities, postFavorities, deleteFavoritie }
