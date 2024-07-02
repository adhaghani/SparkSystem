import React from "react";

import "../LoginRegister.css";
import FormTitle from "../Component/FormTitle";
import Input from "../../../Component/Input/Input";
import Button from "../../../Component/Button/Button";
import { Link } from "react-router-dom";
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
          <form action="">
            <div className="Input-Container">
              <Input
                formSize="full"
                inputProps={{
                  type: "text",
                  name: "Username",
                  id: "Username",
                  label: "Username",
                  placeholder: "Username",
                  className: "input"
                  // value: Input.Username,
                  // onChange: handleChange
                }}
              />
              <Input
                formSize="full"
                inputProps={{
                  type: "password",
                  name: "Password",
                  id: "Password",
                  label: "Password",
                  placeholder: "password",
                  className: "input"
                  // value: Input.Password,
                  // onChange: handleChange
                }}
              />
              <div className="Link-Container">
                <p>
                  New User? <Link to={"/Register"}>Register now</Link>
                </p>
              </div>
            </div>
            <div className="Button-Contianer">
              <Button value="Login" className="Full Fill" link="/Dashboard" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
