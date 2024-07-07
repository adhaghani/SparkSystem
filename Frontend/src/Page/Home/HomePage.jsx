import React from "react";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Join from "./Sections/Join/Join";
import Review from "./Sections/Review/Review";
import FAQ from "./Sections/FAQ/FAQ";

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
