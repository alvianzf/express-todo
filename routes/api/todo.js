var router = require('express').Router()
var Todo = require('mongoose').model('Todos')

router.get('/', function(req, res) {
    Todo.find().then(function(todos) {
        return res.status(200).json({success: true, result: todos})
    }).catch(err => {
        return res.status(500).json({success: false, error: err.message})
    })
})

router.get('/:id', function(req, res) {
    Todo.findOne({_id: req.params.id}).then(function(todos) {
        return res.status(200).json({success: true, result: todos})
    }).catch(err => {
        return res.status(500).json({success: false, error: err}.message)
    })
})

router.post('/', (req, res) => {
    let todos = new Todo(req.body)

    console.log(todos)
    todos.save( function(err, todo) {
        if (err) return res.status(422).json({error: err.message})

        return res.status(200).json({result: 'created', todo, err: null})
    } )
})

router.put('/:id', (req, res) => {
    Todo.findOneAndUpdate({_id: req.params.id}, req.body, (err, todo) => {
        if (err) return res.status(422).json({error: err.message})

        return res.status(200).json({result: 'updated', todo, err: null })
    })
})

router.delete('/:id', (req, res) => {
    Todo.findByIdAndDelete({_id: req.params.id}, (err, todo) => {
        if (err) return res.status(422).json({error: err.message})

        return res.status(200).json({result: 'deleted', todo, err: null})
    })
})

module.exports = router