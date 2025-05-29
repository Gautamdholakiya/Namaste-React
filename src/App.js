import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyConponent from "./components/BodyConponent";
import About from "./components/About";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Appcomponent = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet></Outlet>
      <Footer/>
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
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
