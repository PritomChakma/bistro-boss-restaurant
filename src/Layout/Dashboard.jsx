import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdOutlineRateReview, MdPayment } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome"> <IoHome />
            User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation"><FaCalendarAlt /> Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory"> <MdPayment /> Payment History </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview"><MdOutlineRateReview /> Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking"><TbBrandBooking /> My Booking</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
