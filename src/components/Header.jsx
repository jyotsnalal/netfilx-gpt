import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  LOGO,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const selectedLanguage = useSelector((store) => store.config.language);

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

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(removeUser());
    navigate("/");
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptToggle = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 py-3 bg-gradient-to-b from-black/80 to-transparent">
   
      <img
        src={LOGO}
        alt="Netflix"
        className="w-28 sm:w-36 cursor-pointer"
        onClick={() => navigate("/browse")}
      />

    
      {user && (
        <div className="flex items-center gap-3 sm:gap-4">
        
          {showGptSearch && (
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-black/70 text-white text-sm px-3 py-1 rounded border border-white/20 focus:outline-none"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          
          <button
            onClick={handleGptToggle}
            className="px-4 py-1.5 text-sm font-semibold rounded bg-red-600 hover:bg-red-700 transition"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

         
          <img
            src={user.photoURL || USER_AVATAR}
            alt="User"
            className="w-9 h-9 rounded"
          />

         
          <button
            onClick={handleSignOut}
            className="text-sm font-semibold text-white hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
