require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

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