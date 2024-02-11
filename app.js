const express = require('express')
const routeBooks = require('./routes/books')
const routeFavorities = require('./routes/favorities')
const cors = require('cors')

const app = express()

// Agora a aplicação aceita receber body do tipo JSON
app.use(express.json())

app.use(cors({ origin: '*' }))

// Nesse caso a porta 3000 seria o Front e 8000 seria o Back
const port = 8000

// A barra "/" é a rota
app.use('/books', routeBooks)
app.use('/favorities', routeFavorities)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

/* O que são APIS, analogia
Cliente (front-end)
Fazemos um pedido

Garçom (back-end)
Anotar, memorizar, levar o pedido
*/
