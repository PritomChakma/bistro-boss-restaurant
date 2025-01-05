import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate("/");
        toast.success("Login successfully with Google");
      })
      .catch((error) => {
        toast.error("Google Login failed. Please try again.");
        console.error("ERROR", error.message);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn w-full text-white font-bold bg-[#EF4C53] dark:bg-[#EF4C53] dark:hover:bg-[#EF4C53]"
      >
        <i className="fa-brands fa-google text-xl"></i> Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
