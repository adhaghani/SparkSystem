import React, { useState } from "react";

import "../LoginRegister.css";

import FormTitle from "../Component/FormTitle";
import Input from "../../../Component/Input/Input";
import Button from "../../../Component/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import image from "/LoginRegister/image.svg";

import Password from "./Page/Password";
import Username from "./Page/Username";
import Personal from "./Page/Personal";

const Register = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleNextPage = (event) => {
    event.preventDefault();
    if (CurrentPage === 3) return;
    setCurrentPage(CurrentPage + 1);
  };

  const handlePreviousPage = (event) => {
    event.preventDefault();
    if (CurrentPage === 1) {
      navigate("/Login");
    }
    setCurrentPage(CurrentPage - 1);
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
          {CurrentPage === 1 && (
            <FormTitle
              Title="Personal Details"
              Details="To streamline our process, please enter your personal details."
            />
          )}
          {CurrentPage === 2 && (
            <FormTitle
              Title="Password"
              Details="Let's create a strong password to secure your account."
            />
          )}
          {CurrentPage === 3 && (
            <FormTitle
              Title="Finishing Up"
              Details="Enter your username so we would know what to call you."
            />
          )}
          <form action="">
            <div className="Input-Container Register">
              {CurrentPage === 1 && <Personal />}
              {CurrentPage === 2 && <Password />}
              {CurrentPage === 3 && <Username />}
            </div>
            <div className="Button-Container Register">
              <Button
                value="Go Back"
                className="Full Secondary"
                isButton={true}
                onClick={handlePreviousPage}
              />
              <Button
                value="Next"
                className="Full Primary"
                isButton={true}
                onClick={handleNextPage}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
