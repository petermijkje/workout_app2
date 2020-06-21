import React from 'react'

import './activity.styles.scss'

const pullExerciseDay = () => {
  const workoutObject = {
    date: {
      exercise: 'Dumbbell Bench Press',
      sets: 6,
      reps: 8,
      weight: 145,
      rest: '1 min rest',
    },
  }
  return (
    <div>
      <div>{workoutObject.date.exercise}</div>
      <div>{workoutObject.date.sets}</div>
      <div>{workoutObject.date.reps}</div>
      <div>{workoutObject.date.weight}</div>
      <div>{workoutObject.date.rest}</div>
    </div>
  )
}

function ActivityComponent() {
  return <div className="activity-div"> {pullExerciseDay()} </div>
}

export default ActivityComponent
