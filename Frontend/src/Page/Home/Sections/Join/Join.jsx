import React from "react";

import "./Join.css";

import Button from "../../../../Component/Button/Button";
const Join = () => {
  return (
    <div className="Join" id="Join">
      <div className="Container Join">
        <div className="join-Card">
          <div className="Title">
            <h2>Create your account</h2>
          </div>
          <p className="details">
            And Join the countless people who have becomed apart of our
            community and keeping our parcel safe.
          </p>
          <div className="Button">
            <Button value="Start Now" className="Secondary" link="/Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
