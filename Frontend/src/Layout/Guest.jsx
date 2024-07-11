import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import GuestNavigation from "../Component/Navigation/Guest/GuestNavigation";
import Footer from "../Component/Footer/Footer";
import { useStateContext } from "../Component/ContextProvider/ContextProvider";
const Guest = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <>
      <GuestNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Guest;
