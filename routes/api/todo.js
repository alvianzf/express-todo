var router = require('express').Router()
var Todo = require('mongoose').model('Todos')

router.get('/', function(req, res) {
    Todo.find().then(function(todos) {
        return res.status(200).json({todos})
    }).catch(err => console.log(err))
})

module.exports = router