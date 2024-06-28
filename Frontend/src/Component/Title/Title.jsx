import React from "react";

import "./Title.css";
const Title = (props) => {
  return (
    <div className="Title" id="Title">
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

export default Title;
