import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-screen -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="background"
        />
      </div>

      {/* Centered Form */}
      <div className="flex justify-center items-center h-screen">
        <form className="w-80 sm:w-96 p-8 bg-black text-white rounded-lg opacity-80 min-h-[420px] flex flex-col justify-start">
          <h1 className="font-bold text-2xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {/* Keep full height same by reserving space */}
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 w-full bg-gray-700 rounded"
            />
          )}

          <input
            type="text"
            placeholder="Email address"
            className="p-3 my-3 w-full bg-gray-700 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-700 rounded"
          />

          <button className="p-3 my-5 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="py-2 text-sm cursor-pointer mt-auto"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
