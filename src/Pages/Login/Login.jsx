import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";


const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef();

  useEffect(() => {
    loadCaptchaEnginge(6); // ৬ ডিজিটের ক্যাপচা লোড করা
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleCaptcha = (e) => {
    e.preventDefault();
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisabled(false); 
      toast.success("Captcha validated successfully!")
    } else {
      setDisabled(true); 
      toast.error("Captcha does not match. Please try again.")
    }
  };

  return (
    <div className="hero md:w-10/12 mx-auto bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="Type The Captcha"
                className="input input-bordered"
                required
              />
              <button onClick={handleCaptcha} className="btn btn-xs mt-2">
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
   
    </div>
  );
};

export default Login;
