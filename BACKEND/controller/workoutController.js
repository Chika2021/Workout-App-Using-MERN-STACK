const express = require('express')
const Workout = require('../models/workout')

//CREATING WORKOUTS
exports.createWorkout = async (req, res) => {

    const { title, load, reps } = req.body

    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//GET ALL WORKOUTS
exports.getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}


//GET WORKOUT BY ID
exports.getWorkoutsById = async (req, res) => {
    const { id } = req.query
    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(400).json('Workout Not Found')
    }
    res.status(200).json(workout)
}

//UPDATE WORKOUT
exports.updateWorkout = async (req, res) => {
    const { id, title, load, reps } = req.query

    const workout = await Workout.findByIdAndUpdate(id, { title, load, reps })
    if (!workout) {
        return res.status(400).json({ message: 'Workout Not Found' })
    }
    res.status(200).json(workout)

}

//DELETE WORKOUT
exports.deleteWorkout = async (req, res) => {
    const {id} = req.query
    const workout = await Workout.findByIdAndDelete(id)
    if(!workout){
        return res.status(400).json({message:'Workout Not Found'})
    }
    res.status(200).json(workout)
}