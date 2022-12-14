const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

const art = require('./art')

app.use(cors())

app.get('/art', (req, res) => {
    res.json(art)
})

app.get('/', (req, res) => {
    res.send('Api is running. Go to /art to see response')
})

app.listen(process.env.PORT || 5000, () => console.log('Server is running.'))