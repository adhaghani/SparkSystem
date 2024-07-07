import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./Page/Home/HomePage";

import Guest from "./Layout/Guest";

import Login from "./Page/LoginRegister/Login/Login";
import Register from "./Page/LoginRegister/Register/Register";
import NotFound from "./Page/NotFound/NotFoundPage";
import ParcelPage from "./Page/Parcel/ParcelPage";
import AboutPage from "./Page/About/AboutPage";

import Default from "./Layout/Default";

export const router = createBrowserRouter([
  {
    path: "/SparkSystem/",
    element: <Guest />,
    children: [
      {
        path: "/SparkSystem/",
        element: <Navigate to="/Home" />
      },

      {
        path: "/SparkSystem/Home",
        element: <Home />
      },
      {
        path: "/SparkSystem/Login",
        element: <Login />
      },
      {
        path: "/SparkSystem/Register",
        element: <Register />
      },
      {
        path: "/SparkSystem/Home/About",
        element: <AboutPage />
      },
      {
        path: "/SparkSystem/Home/Parcel",
        element: <ParcelPage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
