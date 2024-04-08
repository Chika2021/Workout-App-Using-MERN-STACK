const express = require('express');
const { createWorkout } = require('../controller/workoutController');



const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message:'Message Found'})
})


router.post('/', createWorkout);
module.exports = router