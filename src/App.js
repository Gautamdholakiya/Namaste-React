import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyConponent from "./components/BodyConponent";
import About from "./components/About";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CartComponent from "./components/CartComponent";
import { Provider } from "react-redux";
import appStore from "./utiils/appStore";

const Appcomponent = () => {
  return (
    <div>
      <Provider store={appStore}>
        <HeaderComponent />
        <Outlet></Outlet>
        <Footer />
        </Provider>
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
      },
      {
        path: "/cart",
        element: <CartComponent />
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
