import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";

import Home from "./Page/Home/HomePage";
import Guest from "./Layout/Guest";
import Login from "./Page/LoginRegister/Login/Login";
import Register from "./Page/LoginRegister/Register/Register";
import NotFound from "./Page/NotFound/NotFoundPage";
import AboutPage from "./Page/About/AboutPage";

import Default from "./Layout/Default";
import Dashboard from "./Page/Dashboard/Dashboard";

import Staff from "./Page/Dashboard/UserType/Staff/Staff";
import Admin from "./Page/Dashboard/UserType/Admin/Admin";
import User from "./Page/Dashboard/UserType/User/User";
import Setting from "./Page/Dashboard/Pages/Setting/Setting";
import Profile from "./Page/Dashboard/Pages/Profile/Profile";

const routes = [
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/",
        element: <Navigate to="/Home" />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Register",
        element: <Register />
      },
      {
        path: "/Home/About-us",
        element: <AboutPage />
      }
    ]
  },
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Navigate to="/Dashboard" />
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/Dashboard",
            element: <Navigate to="/Dashboard/Profile" />
          },
          {
            path: "/Dashboard/Admin",
            element: <Admin />
          },
          {
            path: "/Dashboard/Staff",
            element: <Staff />
          },
          {
            path: "/Dashboard/Profile",
            element: <Profile />
          },
          {
            path: "/Dashboard/Setting",
            element: <Setting />
          },
          {
            path: "/Dashboard/Profile",
            element: <Profile />
          }
        ]
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
];

export const router = createBrowserRouter(routes, {
  basename: "/SparkSystem"
});
