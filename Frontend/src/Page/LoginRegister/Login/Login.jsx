import React, { useRef, useState } from "react";

import "../LoginRegister.css";
import FormTitle from "../Component/FormTitle";
import Input from "../../../Component/Input/Input";
import Button from "../../../Component/Button/Button";
import ErrorText from "../../../Component/ErrorText/ErrorText";
import { Link, useNavigate } from "react-router-dom";

import image from "/LoginRegister/image.svg";
const Login = (props) => {
  const [Error, setError] = useState("");

  const Navigate = useNavigate();

  const Username = useRef();
  const Password = useRef();

  const handleLogin = (event) => {
    event.preventDefault();

    const payload = {
      Username: Username.current.value,
      Password: Password.current.value
    };

    Navigate("/Dashboard");
  };

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
              {/* TODO: ONLY IF ERROR ARE AVAILABLE */}
              <ErrorText error={Error} />
              <Input
                formSize="full"
                inputProps={{
                  ref: Username,
                  type: "text",
                  name: "Username",
                  id: "Username",
                  label: "Username",
                  placeholder: "Username",
                  className: "input",
                  autoComplete: "off"
                }}
              />
              <Input
                formSize="full"
                inputProps={{
                  ref: Password,
                  type: "password",
                  name: "Password",
                  id: "Password",
                  label: "Password",
                  placeholder: "password",
                  className: "input",
                  autoComplete: "off"
                }}
              />
              <div className="Link-Container">
                <p>
                  New User? <Link to={"/Register"}>Register now</Link>
                </p>
              </div>
              {/* TODO: ONLY IF UITM SSO ARE AVAILABLE */}
              {/* <div className="Line-Container">
                <div className="Line"></div>
                <p className="Word">OR</p>
                <div className="Line"></div>
              </div>
              <div className="UITM-SSO">
                <Link to={"/"}>Sign in with UITM SSO</Link>
              </div> */}
            </div>
            <div className="Button-Container">
              <Button
                isButton={true}
                value="Login"
                className="Full Fill Primary"
                // link="/Dashboard"
                onClick={handleLogin}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
