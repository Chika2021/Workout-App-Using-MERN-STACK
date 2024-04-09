import React, { useEffect, useState } from 'react'
import WorkoutDetials from '../components/WorkoutDetials'

function Home() {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
            // const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])

    return (
        <div className='home'>
            <div className='workouts'>
                {
                    workouts && workouts.map((workout) => (
                        <WorkoutDetials key = {workout._id} workout = {workout} />
                    ))
                }

            </div>
        </div>
    )
}

export default Home