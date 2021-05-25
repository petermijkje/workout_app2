import React from "react";
import WorkoutPhoto from "../../images/general-workout.jpg";

import "./other-featured.styles.scss"

export default function OtherFeatured(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <div className="featured">
      {number}
    </div>
  ));
  return <div className="featured-container">{listItems}</div>;
}
