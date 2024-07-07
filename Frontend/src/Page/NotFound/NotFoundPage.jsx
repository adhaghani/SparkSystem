import React from "react";

import { Link } from "react-router-dom";
import "./NotFound.css";

import none from "/notfound.svg";
const NotFound = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="NotFound" id="NotFound">
      <img src={none} alt="" />
      <h1>Not Found</h1>
      <Link to="/" onClick={goBack}>
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
