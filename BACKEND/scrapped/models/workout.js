const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: String,

    load: String,

    reps: String


}, {timestamps:true})

 

module.exports = mongoose.model('Workout', workoutSchema)