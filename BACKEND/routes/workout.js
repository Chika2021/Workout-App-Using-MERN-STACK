const express = require('express')
const Workout = require('../models/workout')

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

router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    try {
        const workout = await  Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
       res.status(400).json({error:error.message})
    }
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