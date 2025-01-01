import { useContext } from "react";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hook/useCart";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.form?.pathname || "/";
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate(form, { replace: true });
        toast.success("Logged out successfully");
      })
      .catch((err) => {
        toast.error("Logout error:", err);
      });
  };

  const NavOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/foodOrder/salad">Food Order</Link>
      </li>
      <li>
        <Link to="/">
          <button className="flex items-center">
            <FaCartShopping className="text-xl" />
            <div className="badge badge-secondary ml-1">+{cart.length}</div>
          </button>
        </Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {NavOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavOption}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="Profile"
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {user ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
