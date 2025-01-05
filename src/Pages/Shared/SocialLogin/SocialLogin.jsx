import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
          toast.success("Login successfully with Google");
        });
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
