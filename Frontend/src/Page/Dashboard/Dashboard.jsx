import React from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="Dashboard" id="Dashboard">
      <Outlet />
    </div>
  );
};

export default Dashboard;
