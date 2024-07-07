import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="Container Footer">
        <div className="Section Social">
          <h3 className="Title">How to</h3>
          <ul className="list">
            <li>
              <a href="#">Create account</a>
            </li>
            <li>
              <a href="#">Collect Parcel</a>
            </li>
            <li>
              <a href="#">View Parcel Detail</a>
            </li>
          </ul>
        </div>
        <div className="Section Social">
          <h3 className="Title">Follow Us</h3>
          <ul className="list">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Container Copyright">
        <div className="Section">
          <p>Copyright &copy; 2024 Adhaghani. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
