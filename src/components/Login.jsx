import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();

    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // SIGN UP
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(({ user }) => {
          return updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://i.imgur.com/6VBx3io.png",
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // SIGN IN
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(({ user }) => {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

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

      <div className="flex justify-center items-center h-screen">
        <form
          className="w-80 sm:w-96 p-8 bg-black text-white rounded-lg opacity-80 min-h-[420px] flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-2xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 w-full bg-gray-700 rounded"
              ref={name}
            />
          )}

          <input
            type="text"
            placeholder="Email address"
            className="p-3 my-3 w-full bg-gray-700 rounded"
            ref={email}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-700 rounded"
            ref={password}
          />

          <p className="text-red-500 font-bold text-sm py-2">
            {errorMessage}
          </p>

          <button
            className="p-3 my-5 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
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
