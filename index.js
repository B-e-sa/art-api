const express = require('express')
const app = express()
const PORT = 3000

const art = require('./art.json')

app.get('/art', (req, res) => {
    res.json(art)
})

app.get('/', (req, res) => {
    res.send('Api is running.')
})

app.listen(PORT || 5000, () => console.log('Server is running.'))