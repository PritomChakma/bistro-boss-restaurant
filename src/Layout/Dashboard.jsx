import {
  FaBook,
  FaCalendarAlt,
  FaShoppingBag,
  FaShoppingCart,
  FaThList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { IoMdMail, IoMdMenu } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdOutlineRateReview, MdPayment } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useCart from "../Hook/useCart";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <IoHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils /> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaThList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBooking">
                  <FaBook /> Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <IoHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <MdPayment /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">
                  <MdOutlineRateReview /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBooking">
                  <TbBrandBooking /> My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <IoHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/foodOrder/salad">
              <IoMdMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaShoppingBag />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <IoMdMail />
              Contact
            </NavLink>
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
