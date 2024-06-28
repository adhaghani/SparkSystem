import React from "react";

const AboutSection = (props) => {
  return (
    <div className="AboutSection" id="AboutSection">
      <div className="illustration">
        <img src={props.image} alt="" />
      </div>
      <div className="Section-Details">
        <div className="Title">
          <h1>{props.title}</h1>
        </div>
        <div className="Details">
          <p>{props.details}</p>
        </div>
        <div className="learn-more">
          <a href="">
            Learn More about <span> {props.learn}.</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
