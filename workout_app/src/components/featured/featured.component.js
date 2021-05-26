import React from "react";
import "./featured.styles.scss";
import WorkoutPhoto from "../../images/featured-workout.jpg";

import OtherFeatured from "../other-featured/other-featured.components";

export default function Featured(props) {
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
      <span className="featured-header">8 WEEK STRENGTH TRAINING REGIMEN</span>
      <div className="featured-banner">FEATURED</div>
      <div className="other-featured">
        <div className="other-featured-banner">Other featured programs</div>
        <div className="other-featured-boxes">
          <OtherFeatured numbers={numbers} type={type} />
          <OtherFeatured numbers={numbers} type={type} />
        </div>
      </div>
    </div>
  );
}
