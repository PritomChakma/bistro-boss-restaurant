import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import FoodOrder from "../Pages/Order/FoodOrder";
import Login from "../Pages/Login/Login";

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
        loader:()=>fetch("/menu.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ],
  },
]);

export default router;
