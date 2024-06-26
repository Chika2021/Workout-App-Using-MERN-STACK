import React from 'react'

function WorkoutDetials({workout}) {
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (Kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.load}</p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetials