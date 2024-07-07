import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

import Button from "../Button/Button";

const Navigation = () => {
  const [SideNav, setSideNav] = useState(false);

  const handleSideNav = () => {
    setSideNav(!SideNav);
  };

  return (
    <div className="Navigation" id="Navigation">
      <div className="Container Navigation">
        <div className="Section">
          <div className="Logo">
            <h3>SparkSystem</h3>
          </div>

          <ul className="List">
            <li>
              <Link to="/SparkSystem/Home">Home</Link>
            </li>
            <li>
              <Link to="/SparkSystem/Home/About">About</Link>
            </li>
            <li>
              <Link to="/SparkSystem/Home/Parcel">Parcel</Link>
            </li>
            {/* <li>
              <Link to="/Demo"> </Link>
            </li> */}
          </ul>
        </div>

        <div className="Section Button">
          <Button value="Log in" className="" link="/SparkSystem/Login" />
          <Button
            value="Sign Up for Free"
            className="Fill Primary"
            link="/SparkSystem/Register"
          />
        </div>
        <div className="Section Hamburger">
          <button
            id="Hamburger"
            className={SideNav ? "Hamburger Active" : "Hamburger"}
            onClick={handleSideNav}
          >
            <div className="Top"></div>
            <div className="Mid"></div>
            <div className="Bot"></div>
          </button>
        </div>
      </div>
      <div className={SideNav ? "SideNav Active" : "SideNav"} id="SideNav">
        <div className="Section">
          <ul className="List">
            <li>
              <Link to="/SparkSystem/Home" onClick={handleSideNav}>
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="Section Button">
          <Button value="Log in" className="Full" link="/SparkSystem/Login" />
          <Button
            value="Sign up for Free"
            className="Fill Primary"
            link="/SparkSystem/Register"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
