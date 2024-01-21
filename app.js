const express = require('express')
const routeBooks = require('./routes/books')

const app = express()

// Nesse caso a porta 3000 seria o Front e 8000 seria o Back
const port = 8000

// A barra "/" é a rota
app.use('/books', routeBooks)

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})

/* O que são APIS, analogia
Cliente (front-end)
Fazemos um pedido

Garçom (back-end)
Anotar, memorizar, levar o pedido
*/
