const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
    name: String,
    seasons: Number
})

const Show = mongoose.model('Show', showSchema)

module.exports = Show