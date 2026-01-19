import Header from "./Header";
import { useState, useRef } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { BG_Netflix } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = async () => {
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();

    if (!emailValue || !passwordValue) {
      setErrorMessage("Email and Password are required");
      return;
    }

    try {
      if (isSignInForm) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue,
        );

        const { uid, email, displayName, photoURL } = userCredential.user;
        dispatch(addUser({ uid, email, displayName, photoURL }));

        navigate("/browse");
      } else {
        if (!name.current.value.trim()) {
          setErrorMessage("Name is required");
          return;
        }

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue,
        );

        await updateProfile(userCredential.user, {
          displayName: name.current.value.trim(),
          photoURL: USER_AVATAR,
        });

        const { uid, email, displayName, photoURL } = userCredential.user;
        dispatch(addUser({ uid, email, displayName, photoURL }));

        navigate("/browse");
      }

      setErrorMessage("");
    } catch (error) {
      console.log("FIREBASE ERROR:", error.code, error.message);
      setErrorMessage(error.code);
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };

  return (
    <div>
      <Header />

      <div className="absolute w-full h-screen -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_Netflix}
          alt="background"
        />
      </div>

      <div className="flex justify-center items-center h-screen">
        <form
          className="w-80 sm:w-96 p-8 bg-black text-white rounded-lg opacity-90 min-h-[420px] flex flex-col"
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
              autoComplete="name"
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            className="p-3 my-3 w-full bg-gray-700 rounded"
            ref={email}
            autoComplete="username"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-700 rounded"
            ref={password}
            autoComplete={isSignInForm ? "current-password" : "new-password"}
          />

          {errorMessage && (
            <p className="text-red-500 font-semibold text-sm py-2">
              {errorMessage}
            </p>
          )}

          <button
            type="button"
            className="p-3 my-5 bg-red-700 hover:bg-red-800 transition w-full rounded-lg font-semibold"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="py-2 text-sm cursor-pointer text-gray-300 hover:underline mt-auto"
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
