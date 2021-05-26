import React from "react";
import WorkoutPhoto from "../../images/general-workout2.jpg";
import OtherFeatured from "../other-featured/other-featured.components";

export default function GeneralWorkouts(props) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let type = [
    "HIIT",
    "Sprints",
    "Arm",
    "Legs",
    "Abs",
    "back",
    "Track",
    "Crossfit",
  ];
  return (
    <div>
      <img src={WorkoutPhoto} className="featured-workout" />
      <span className="featured-header">
        8 WEEK CONDITIONING TRAINING REGIMEN
      </span>
      <div className="featured-banner">MOST POPULAR</div>
      <div className="other-featured">
        <div className="other-featured-banner">Other popular programs</div>
        <div className="other-featured-boxes">
          <OtherFeatured numbers={numbers} type={type} />
          <OtherFeatured numbers={numbers} type={type} />
        </div>
      </div>
    </div>
  );
}
