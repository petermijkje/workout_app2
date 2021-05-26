import React from "react";

import "./other-featured.styles.scss";

export default function OtherFeatured(props) {
  const type = props.type;
  const listItems = type.map((type) => <div className="featured">{type}</div>);
  return <div className="featured-container">{listItems}</div>;
}
