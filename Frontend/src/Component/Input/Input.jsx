import React from "react";
import "./Input.css";

const Input = ({ formSize, inputProps, inputProps2, inputProps3 }) => {
  return (
    <div className={`form-container ${formSize}`}>
      <div className="Input">
        <input {...inputProps} />
        <label
          className={inputProps.className == "input error" ? "error" : ""}
          htmlFor=""
        >
          {inputProps.label}
        </label>
      </div>
      {formSize === "half" && inputProps2 && (
        <div className="Input">
          <input {...inputProps2} />
          <label
            className={inputProps2.className == "input error" ? "error" : ""}
            htmlFor=""
          >
            {inputProps2.label}
          </label>
        </div>
      )}
      {formSize === "half third" && (
        <>
          <div className="Input">
            <input {...inputProps2} />
            <label
              className={inputProps2.className == "input error" ? "error" : ""}
              htmlFor=""
            >
              {inputProps2.label}
            </label>
          </div>
          <div className="Input">
            <input {...inputProps3} />
            <label
              className={inputProps3.className == "input error" ? "error" : ""}
              htmlFor=""
            >
              {inputProps3.label}
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default Input;
