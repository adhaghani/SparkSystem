import React from "react";

import "./Profile.css";
import Input from "../../../../Component/Input/Input";
import Button from "../../../../Component/Button/Button";
const Profile = () => {
  return (
    <div className="ProfileDashboard" id="ProfileDashboard">
      <div className="Container Profile">
        <div className="Profile-Card">
          <div className="Title-Container">
            <h2 className="Title">Profile</h2>
            <p className="Sub-Title">
              Update your Personal Information to keep it updated
            </p>
          </div>
          <div className="Update-Container">
            <h3 className="Title">First and Last Name</h3>
            <div className="Input-Container">
              <Input
                formSize="half"
                inputProps={{
                  type: "text",
                  name: "FirstName",
                  id: "FirstName",
                  label: "UserName",
                  placeholder: "First Name",
                  className: "input",
                  autoComplete: "off"
                  // value: Input.Username,
                  // onChange: handleChange
                }}
                inputProps2={{
                  type: "text",
                  name: "LastName",
                  id: "LastName",
                  label: "Last Name",
                  placeholder: "Last Name",
                  className: "input",
                  autoComplete: "off"
                  // value: Input.Username,
                  // onChange: handleChange
                }}
              />
            </div>
            <h3 className="Title">Username</h3>
            <p>Current Username : Adhaghani</p>
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
            </div>
            <h3 className="Title">Email Address</h3>
            <p>Current Email Address : adhaahmadwork@gmail.com</p>
            <div className="Input-Container">
              <Input
                formSize="full"
                inputProps={{
                  type: "text",
                  name: "EmailAddress",
                  id: "EmailAddress",
                  label: "New Email Address",
                  placeholder: "New Email Address",
                  className: "input",
                  autoComplete: "off"
                  // value: Input.Username,
                  // onChange: handleChange
                }}
              />
              <Input
                formSize="full"
                inputProps={{
                  type: "text",
                  name: "EmailAddress",
                  id: "EmailAddress",
                  label: "Confirm New Email Address",
                  placeholder: "Confirm New Email Address",
                  className: "input",
                  autoComplete: "off"
                  // value: Input.Username,
                  // onChange: handleChange
                }}
              />
            </div>
          </div>
        </div>
        <div className="Profile-Card">
          <div className="Title-Container">
            <h2 className="Title">Password</h2>
            <p className="Sub-Title">
              Update your password to keep your account secured
            </p>
          </div>
          <div className="Update-Container"></div>
        </div>
        <div className="Profile-Card">
          <div className="Title-Container">
            <h2 className="Title">2 Factor Auth</h2>
            <p className="Sub-Title">
              Activate 2 Factor Authentication to add more security layers to
              your account.
            </p>
          </div>
          <div className="Update-Container"></div>
        </div>
        <div className="Profile-Card">
          <div className="Title-Container">
            <h2 className="Title">Session</h2>
            <p className="Sub-Title">
              Keep in track of all active session in this account.
            </p>
          </div>
          <div className="Update-Container"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
