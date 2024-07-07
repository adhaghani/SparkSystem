import React from "react";

import Title from "../../../../Component/Title/Title";
import AboutSection from "./AboutSection/AboutSection";
import "./Home_About.css";

import delivery from "/Home/About/delivery.svg";
import location from "/Home/About/location.svg";
import security from "/Home/About/security.svg";
const About = () => {
  return (
    <div className="About" id="About">
      <div className="Container Home_About">
        <div className="Section-Container">
          <AboutSection
            image={delivery}
            title="Make the process easier."
            details="find, collect, pay, view all of your parcel in one place."
            learn="parcel tracking"
          />
          <AboutSection
            image={location}
            title="Keeping track of your parcel."
            details="Know the detail of where your parcel located at, even at which shelf or table it is."
            learn="event safety"
          />
          <AboutSection
            image={security}
            title="Extensive Parcel record."
            details="All of parcel record are collected in a single database. Ensuring better customer experience."
            learn="Invitation Policy"
          />
          {/* <AboutSection
            // image={Saving}
            title="Budget Properly."
            details="By knowing exactly how many person will attend your event, it will allow you to make a proper budget and avoid wasting money."
            learn="saving money"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
