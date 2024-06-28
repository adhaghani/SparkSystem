import React from "react";

import "../LoginRegister.css";
import FormTitle from "../Component/FormTitle";
const Register = () => {
  return (
    <div className="LoginRegistesr" id="LoginRegister">
      <div className="LoginRegister-Container">
        <div className="Details-Container">
          <div className="Title">
            <h1>SparkSystem</h1>
          </div>
        </div>
        <div className="Form-Container">
          <FormTitle Title="Register" Details="Let's Create an Account." />
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Register;
