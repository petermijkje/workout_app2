import React from "react";
import WorkoutPhoto from "../../images/general-workout.jpg";

import "./other-featured.styles.scss"

export default function OtherFeatured(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <div className="featured-container">
      {number}
    </div>
  ));
  return <div>{listItems}</div>;
}
