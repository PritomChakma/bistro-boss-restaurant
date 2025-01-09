import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import FoodOrder from "../Pages/Order/FoodOrder";
import Secret from "../Pages/Shared/Secret/Secret";
import Signup from "../Pages/Signup/Signup";
import Additem from "../assets/dashboard/AddItem/Additem";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  // normal user routes
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
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <Additem></Additem>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
