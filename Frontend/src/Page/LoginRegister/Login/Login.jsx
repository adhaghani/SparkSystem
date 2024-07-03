import React from "react";

import "../LoginRegister.css";
import FormTitle from "../Component/FormTitle";
import Input from "../../../Component/Input/Input";
import Button from "../../../Component/Button/Button";
import { Link } from "react-router-dom";

import image from "/LoginRegister/image.svg";
const Login = (props) => {
  return (
    <div className="LoginRegistesr" id="LoginRegister">
      <div className="LoginRegister-Container">
        <div className="Details-Container">
          <div className="Title">
            <h1>SparkSystem</h1>
          </div>
          <div className="Image-Container">
            <img src={image} alt="" />
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
                  className: "input",
                  autoComplete: "off"
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
                  className: "input",
                  autoComplete: "off"
                  // value: Input.Password,
                  // onChange: handleChange
                }}
              />
              <div className="Link-Container">
                <p>
                  New User? <Link to={"/Register"}>Register now</Link>
                </p>
              </div>
              <div className="Line-Container">
                <div className="Line"></div>
                <p className="Word">OR</p>
                <div className="Line"></div>
              </div>
              <div className="UITM-SSO">
                <Link to={"/"}>Sign in with UITM SSO</Link>
              </div>
            </div>
            <div className="Button-Container">
              <Button
                value="Login"
                className="Full Fill Primary"
                link="/Dashboard"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
