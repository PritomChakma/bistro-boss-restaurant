import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate =useNavigate()
  const location= useLocation()
  // const [disabled, setDisabled] = useState(true);

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

const form =location.pathname.state?.from?.pathname || "/"
console.log("state in the location", location.state)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful!");
        navigate("/")
      })
      .catch((error) => {
        let errorMessage = "Login failed! Please try again.";
        if (error.code === "auth/user-not-found") {
          errorMessage = "User not found. Please check your email.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect password. Please try again.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email format.";
        }
        toast.error(errorMessage);
      });
  };

  // const handleCaptcha = (e) => {
  //   const value = e.target.value;
  //   if (validateCaptcha(value)) {
  //     setDisabled(false);
  //     toast.success("Captcha validated successfully!");
  //   } else {
  //     setDisabled(true);
  //     loadCaptchaEnginge(6);
  //     toast.error("Captcha does not match. Please try again.");
  //   }
  // };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss / Login</title>
      </Helmet>
      <div className="hero md:w-10/12 mx-auto bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* <div className="form-control">
                <label className="label"><LoadCanvasTemplate /></label>
                <input
                  onBlur={handleCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type The Captcha"
                  className="input input-bordered"
                  required
                />
              </div> */}
              <div className="form-control mt-6">
                <button
                  //  disabled={disabled}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center pb-3">
              <small>New Here?</small>
              <Link to="/signup"> Create a New Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
