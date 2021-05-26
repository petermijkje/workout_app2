import React from "react";
import "./activity.styles.scss";

import Shoulders from "../../images/shoulders.png";

const pullExerciseDay = () => {
  const workoutObject = {
    date: {
      exercise: "Dumbbell Bench Press",
      sets: 6,
      reps: 8,
      weight: 145,
      rest: "1 min",
    },
  };
  //need to turn this into its own functional component
  const workoutDiv = (
    <div className="exercise-container">
      <img src={Shoulders} className="workout-image" />
      <div>
        <div className="exercise-name">{workoutObject.date.exercise} </div>
        <div className="exercise-div">{workoutObject.date.sets}</div> X
        <div className="exercise-div"> {workoutObject.date.reps}</div>
        <div className="exercise-div">{workoutObject.date.weight}</div>
        <div className="exercise-div">{workoutObject.date.rest}</div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="todays-workout-div">
        <div className="add-remove-container">
          <div className="add-remove">Choose Exercise</div>
          <div className="add-remove">+ Add Exercise</div>
        </div>
        {/* separate this into its own component and push the props through */}
        {workoutDiv}
        {workoutDiv}
        {workoutDiv}
        {workoutDiv}
        {workoutDiv}
        {workoutDiv}
        {workoutDiv}
      </div>
    </div>
  );
};

function ActivityComponent() {
  return <div className="activity-div"> {pullExerciseDay()} </div>;
}

export default ActivityComponent;
