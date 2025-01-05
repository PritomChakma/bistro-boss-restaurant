import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import FoodOrder from "../Pages/Order/FoodOrder";
import Secret from "../Pages/Shared/Secret/Secret";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "foodOrder/:category",
        element: <FoodOrder></FoodOrder>,
        loader: () => fetch("/menu.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // for admin
      {
        path:"allUsers",
        element:<AllUser></AllUser>
      }
    ],
  },
]);

export default router;
