import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GuestNavigation.css";

import Button from "../../Button/Button";

const GuestNavigation = () => {
  const [SideNav, setSideNav] = useState(false);

  const handleSideNav = (e) => {
    e.preventDefault();
    setSideNav(!SideNav);
  };

  return (
    <div className="GuestNavigation" id="GuestNavigation">
      <div className="Container Navigation">
        <div className="Section">
          <div className="Logo">
            <h3>SparkSystem</h3>
          </div>

          <ul className="List">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Home/About-us">About</Link>
            </li>
          </ul>
        </div>

        <div className="Section Button">
          <Button value="Log in" className="" link="/Login" />
          <Button
            value="Sign Up for Free"
            className="Fill Primary"
            link="/Register"
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
              <Link to="/Home" onClick={handleSideNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Home/About-us" onClick={handleSideNav}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="Section Button">
          <Button
            value="Log in"
            className="Full"
            link="/Login"
            onClick={handleSideNav}
          />
          <Button
            value="Sign up for Free"
            className="Fill Primary"
            link="/Register"
            onClick={handleSideNav}
          />
        </div>
      </div>
    </div>
  );
};

export default GuestNavigation;
