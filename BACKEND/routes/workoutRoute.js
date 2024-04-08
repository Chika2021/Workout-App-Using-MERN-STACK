const express = require('express');
const { createWorkout, getWorkoutsById, getWorkouts, updateWorkout, deleteWorkout } = require('../controller/workoutController');



const router = express.Router()




router.post('/', createWorkout);
router.get('/', getWorkouts);
router.get('/', getWorkoutsById);
router.put('/', updateWorkout);
router.delete('/', deleteWorkout);

module.exports = router