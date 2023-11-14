const express = require('express')
const app = express()

// Nesse caso a porta 3000 seria o Front e 8000 seria o Back
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})
