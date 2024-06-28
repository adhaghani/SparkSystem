import React from "react";

import "../LoginRegister.css";
import FormTitle from "../Component/FormTitle";
const Login = () => {
  return (
    <div className="LoginRegistesr" id="LoginRegister">
      <div className="LoginRegister-Container">
        <div className="Details-Container">
          <div className="Title">
            <h1>SparkSystem</h1>
          </div>
        </div>
        <div className="Form-Container">
          <FormTitle Title="Login" Details="Enter your credentials to login." />
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Login;
