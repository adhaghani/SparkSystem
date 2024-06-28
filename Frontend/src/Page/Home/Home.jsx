import React from "react";

import "./Home.css";
import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Join from "./Sections/Join/Join";
import Review from "./Sections/Review/Review";
import FAQ from "./Sections/FAQ/FAQ";
const Home = () => {
  return (
    <>
      <div className="Home" id="Home">
        <Navigation />
        <Hero />
        <About />
        <Join />
        <Review />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Home;
