import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
const location = useLocation()
console.log(location);
const noHeaderFooter = location.pathname.includes("login")


  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
