import React from "react";
import WorkoutPhoto from "../../images/featured-workout.jpg";

export default function Featured(props) {
  return (
    <div>
      <img src={WorkoutPhoto} className="featured-workout" />
      <span className="featured-header">8 WEEK STRENGTH TRAINING REGIMEN</span>
      <div className="featured-banner">FEATURED</div>
      <div className="other-featured">
        <div className="other-featured-banner">Other featured programs</div>
      </div>
    </div>
  );
}
