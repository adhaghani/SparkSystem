import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Component/ContextProvider/ContextProvider";
const Default = () => {
  const { token } = useStateContext();

  if (!token) {
    return <Navigate to="Login" />;
  }

  return (
    <>
      Default Dashboard Layout
      <Outlet />
    </>
  );
};

export default Default;
