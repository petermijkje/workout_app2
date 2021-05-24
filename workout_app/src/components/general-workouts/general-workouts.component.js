import React from "react";
import WorkoutPhoto from "../../images/general-workout2.jpg";

export default function GeneralWorkouts(props) {
  return (
    <div>
      <img src={WorkoutPhoto} className="featured-workout" />
      <span className="featured-header">
        8 WEEK CONDITIONING TRAINING REGIMEN
      </span>
      <div className="featured-banner">MOST POPULAR</div>
      <div className="other-featured">
        <div className="other-featured-banner">Other popular programs</div>
      </div>
    </div>
  );
}
