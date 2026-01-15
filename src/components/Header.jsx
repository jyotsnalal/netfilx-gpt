import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-2 bg-gradient-to-b from-black/70 to-transparent">
      <img className="w-36" src={LOGO} alt="Netflix" />

      {user && (
        <div className="flex p-2 items-center gap-2">
          <img
            className="w-12 h-12 rounded"
            src={user?.photoURL || USER_AVATAR}
            alt="User"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
