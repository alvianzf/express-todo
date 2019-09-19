var mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    todo: String,
    description: String
}, {timestamps: true})

mongoose.model('Todos', todoSchema)