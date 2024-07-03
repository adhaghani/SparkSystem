import React from "react";

import "./Button.css";
import { Link } from "react-router-dom";
const Button = (props) => {
  return (
    <>
      {props.isButton ? (
        <button className={`Button ${props.className}`} onClick={props.onClick}>
          {props.value}
        </button>
      ) : (
        <Link className={`Button ${props.className}`} to={props.link}>
          {props.value}
        </Link>
      )}
    </>
  );
};

export default Button;
