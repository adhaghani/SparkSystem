import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Component/Navigation/Navigation";
import Footer from "../Component/Footer/Footer";
const Guest = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Guest;
