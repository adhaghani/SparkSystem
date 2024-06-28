import React from "react";

import "./Button.css";
import { Link } from "react-router-dom";
const Button = (props) => {
  return (
    <Link className={`Button ${props.className}`} to={props.link}>
      {props.value}
    </Link>
  );
};

export default Button;
