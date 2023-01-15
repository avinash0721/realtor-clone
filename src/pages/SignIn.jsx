import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6  font-semibold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center py-12 px-6 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className=" mb-6 w-full px-4 py-2 text-xl
              text-gray-700 border-gray-300 rounded"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
            />

            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl
              text-gray-700 border-gray-300 rounded"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap">
              <p className="mb-6">
                Don't have an account?
                <Link
                  to="/signup"
                  className="text-red-600 hover:text-red-700 ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/forgotpassword"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Forgot Password
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 rounded uppercase shadow-md  hover:bg-blue-700 active:bg-blue-800"
              type="submit"
            >
              Sign In
            </button>
            <div
              className=" flex my-4
            items-center 
            before:border-t before:flex-1 
            before:border-gray-400
            after:border-t after:flex-1 after:border-gray-400
             "
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
