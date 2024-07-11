import React from "react";

import "./DefaultNavigation.css";
import { Link } from "react-router-dom";
import profile from "/Dashboard/profile.svg";
import logout from "/Dashboard/logout.svg";
import notification from "/Dashboard/notification.svg";
const DefaultNavigation = () => {
  return (
    <div className="DefaultNavigation" id="DefaultNavigation">
      {/* TOP NAVIGATION */}
      <div className="Container-Top">
        <div className="Section Logo">
          <h3 className="Logo">SparkSystem</h3>
        </div>
        <div className="Section Action">
          <div className="Card">
            <div className="image">
              <Link className="Option" to="/Dashboard/notification">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#a3a3a3"
                >
                  <path d="M193.33-200q-14.16 0-23.75-9.62-9.58-9.61-9.58-23.83 0-14.22 9.58-23.72 9.59-9.5 23.75-9.5H240v-296q0-83.66 49.67-149.5Q339.33-778 420-796v-24q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v24q80.67 18 130.33 83.83Q720-646.33 720-562.67v296h46.67q14.16 0 23.75 9.62 9.58 9.62 9.58 23.83 0 14.22-9.58 23.72-9.59 9.5-23.75 9.5H193.33ZM480-501.33ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM306.67-266.67h346.66v-296q0-72-50.66-122.66Q552-736 480-736t-122.67 50.67q-50.66 50.66-50.66 122.66v296Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="Card">
            <div className="image">
              <Link className="Option" to="/Dashboard/Profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#a3a3a3"
                >
                  <path d="M226-262q59-42.33 121.33-65.5 62.34-23.17 132.67-23.17 70.33 0 133 23.17T734.67-262q41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM480.31-80q-82.64 0-155.64-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.51T80-480.18q0-82.82 31.5-155.49 31.5-72.66 85.83-127Q251.67-817 324.51-848.5T480.18-880q82.82 0 155.49 31.5 72.66 31.5 127 85.83Q817-708.33 848.5-635.65 880-562.96 880-480.31q0 82.64-31.5 155.64-31.5 73-85.83 127.34Q708.33-143 635.65-111.5 562.96-80 480.31-80Zm-.31-66.67q54.33 0 105-15.83t97.67-52.17q-47-33.66-98-51.5Q533.67-284 480-284t-104.67 17.83q-51 17.84-98 51.5 47 36.34 97.67 52.17 50.67 15.83 105 15.83Zm0-366.66q31.33 0 51.33-20t20-51.34q0-31.33-20-51.33T480-656q-31.33 0-51.33 20t-20 51.33q0 31.34 20 51.34 20 20 51.33 20Zm0-71.34Zm0 369.34Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="Card">
            <div className="image">
              <button className="Option">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#a3a3a3"
                >
                  <path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840H446q14.17 0 23.75 9.62 9.58 9.61 9.58 23.83 0 14.22-9.58 23.72-9.58 9.5-23.75 9.5H186.67v586.66H446q14.17 0 23.75 9.62t9.58 23.83q0 14.22-9.58 23.72-9.58 9.5-23.75 9.5H186.67Zm525.66-326.67h-319q-14.16 0-23.75-9.61-9.58-9.62-9.58-23.84 0-14.21 9.58-23.71 9.59-9.5 23.75-9.5H711l-79-79q-9.67-9.67-9.33-23 .33-13.34 10-23.34 9.66-10 23.66-10.16 14-.17 24 9.83l136.34 136.33q10 10 10 23.34 0 13.33-10 23.33L681-320.33q-9.87 10-23.43 9.5-13.57-.5-23.83-10.5-9.41-10-9.24-23.84.17-13.83 9.83-23.5l78-78Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* SIDEBAR */}
      <div className="Container-Side">
        <ul className="List">
          <li>
            <Link to="/Dashboard/Setting">Setting</Link>
          </li>
          <li>
            <Link to="/Dashboard/Profile">Profile</Link>
          </li>
          <ul className="Parcel">
            <p>Parcel</p>
            <li>
              <Link to="/Dashboard/Parcel/Add">Add</Link>
            </li>
            <li>
              <Link to="/Dashboard/Parcel/Collect">Collect</Link>
            </li>
            <li>
              <Link to="/Dashboard/Parcel/View">View</Link>
            </li>
          </ul>
          <li>
            <Link to="Dashboard/User">User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefaultNavigation;
