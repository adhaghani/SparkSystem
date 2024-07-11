import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Component/ContextProvider/ContextProvider";

import DefaultNavigation from "../Component/Navigation/Default/DefaultNavigation";
const Default = () => {
  const { token } = useStateContext();

  if (!token) {
    return <Navigate to="Login" />;
  }

  return (
    <>
      <DefaultNavigation />
      <div className="Layout-Container Default">
        <Outlet />
      </div>
    </>
  );
};

export default Default;
