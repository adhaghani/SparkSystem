import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Component/Navigation/Navigation";
import Footer from "../Component/Footer/Footer";
import { useStateContext } from "../Component/ContextProvider/ContextProvider";
const Guest = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Guest;
