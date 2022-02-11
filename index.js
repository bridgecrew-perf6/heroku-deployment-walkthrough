require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT

app.use(cors())

require('./db/db')
const Show = require('./models/show')

app.get("/", async (req, res) => {
    const shows = await Show.find({})
    console.log(shows)
    res.json(shows)
})

app.listen(PORT, () => {
    const d = new Date()
    console.log(`${d.toLocaleDateString()}: Server is running on port: ${PORT}🙌🏽`)
})