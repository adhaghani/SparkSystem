import React from "react";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/Home_About";
import Join from "./Sections/Join/Home_Join";
import Review from "./Sections/Review/Home_Review";
import FAQ from "./Sections/FAQ/Home_FAQ";

const Home = () => {
  return (
    <>
      <div className="Home" id="Home">
        <Hero />
        <About />
        <Join />
        <Review />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
