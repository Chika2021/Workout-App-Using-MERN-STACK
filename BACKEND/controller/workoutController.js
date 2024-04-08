const express = require('express')
const Workout = require('../models/workout')


exports.createWorkout = async (req, res) => {

    const {title, load, reps} = req.body

    try {
        const workout = await  Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
       res.status(400).json({error:error.message})
    }
     
}