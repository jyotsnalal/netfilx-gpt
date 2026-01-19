import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const selectedLanguage = useSelector((store) => store.config.language);
  const dispatch = useDispatch();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-2 bg-gradient-to-b from-black/70 to-transparent">
      <img className="w-36" src={LOGO} alt="Netflix" />

      {user && (
        <div className="flex items-center gap-3">
          {showGptSearch && (
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="appearance-none bg-black/70 backdrop-blur-md text-white text-sm font-medium
                         px-4 py-2 pr-10 rounded-md border border-white/20
                         hover:bg-black/90 hover:border-white/40
                         focus:outline-none focus:ring-2 focus:ring-red-600
                         transition-all cursor-pointer"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="bg-black text-white"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white text-xs">
                ▼
              </span>
            </div>
          )}

          <button
            onClick={handleGptSearchClick}
            className={`px-5 py-2 rounded-md font-semibold transition-all duration-300
    ${
      showGptSearch
        ? "bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)]"
        : "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-[0_0_15px_rgba(229,9,20,0.5)]"
    }`}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

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
