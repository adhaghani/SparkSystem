import React from "react";

const FormTitle = (props) => {
  return (
    <div className="Form-Title">
      <div className="Title">
        <h1>{props.Title}</h1>
      </div>
      <div className="Details">
        <p>{props.Details}</p>
      </div>
    </div>
  );
};

export default FormTitle;
