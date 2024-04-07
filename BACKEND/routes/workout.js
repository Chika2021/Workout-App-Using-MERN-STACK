const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message:'Get All Workouts'
    })
})

router.get('/:id', (req, res) => {
    res.json({
        message:'Get A Single Route'
    })
})

router.post('/', (req, res) => {
    res.json({
        message:'Post a Route'
    })
} )

router.delete('/', (req, res) => {
    res.json({
        message:'Delete a Route'
    })
} )

router.patch('/', (req, res) => {
    res.json({
        message:'Update a Route'
    })
} )

module.exports = router