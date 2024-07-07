import React from "react";

import "./About.css";
import About_Hero from "./Section/Hero/About_Hero";
import About_Team from "./Section/Team/About_Team";
const AboutPage = () => {
  return (
    <div className="AboutPage" id="AboutPage">
      <About_Hero />
      <About_Team />
    </div>
  );
};

export default AboutPage;
