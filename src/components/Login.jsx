import React from "react";
import Header from "./Header";
<<<<<<< HEAD
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
=======
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    //validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );

              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

>>>>>>> 5781ccb (validation && redux && auth)
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

<<<<<<< HEAD
      {/* Centered Form */}
      <div className="flex justify-center items-center h-screen">
        <form className="w-80 sm:w-96 p-8 bg-black text-white rounded-lg opacity-80 min-h-[420px] flex flex-col justify-start">
=======
      <div className="flex justify-center items-center h-screen">
        <form
          className="w-80 sm:w-96 p-8 bg-black text-white rounded-lg opacity-80 min-h-[420px] flex flex-col justify-start"
          onSubmit={(e) => e.preventDefault()}
        >
>>>>>>> 5781ccb (validation && redux && auth)
          <h1 className="font-bold text-2xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

<<<<<<< HEAD
          {/* Keep full height same by reserving space */}
=======
>>>>>>> 5781ccb (validation && redux && auth)
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 w-full bg-gray-700 rounded"
<<<<<<< HEAD
=======
              ref={name}
>>>>>>> 5781ccb (validation && redux && auth)
            />
          )}

          <input
            type="text"
            placeholder="Email address"
            className="p-3 my-3 w-full bg-gray-700 rounded"
<<<<<<< HEAD
=======
            ref={email}
>>>>>>> 5781ccb (validation && redux && auth)
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-700 rounded"
<<<<<<< HEAD
          />

          <button className="p-3 my-5 bg-red-700 w-full rounded-lg">
=======
            ref={password}
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-3 my-5 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
>>>>>>> 5781ccb (validation && redux && auth)
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
