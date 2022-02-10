require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

require('./db/db')

app.listen(PORT, () => {
    const d = new Date()
    console.log(`${d.toLocaleDateString()}: Server is running on port: ${PORT}🙌🏽`)
})