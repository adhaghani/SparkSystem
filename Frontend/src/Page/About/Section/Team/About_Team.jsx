import React from "react";

import Title from "../../../../Component/Title/Title";

import "./About_Team.css";
import TeamCard from "./TeamCard/TeamCard";
const About_Team = () => {
  return (
    <div className="About_Team" id="About_Team">
      <Title title="Our Team" subtitle="Meet the team." />
      <div className="Container">
        <div className="Team-Section Executive">
          <div className="Section-Title">
            <h1>Executive</h1>
          </div>
          <div className="Section-Container">
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Team;
