import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyConponent from "./components/BodyConponent";
import About from "./components/About";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Appcomponent = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Appcomponent></Appcomponent>,
    children: [
      {
        path: "/",
        element: <BodyConponent></BodyConponent>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu></RestaurantMenu>
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
