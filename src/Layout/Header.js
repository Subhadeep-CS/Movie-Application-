import Logo from "../assets/images/logo.png";
import UserIcon from "../assets/images/profile_icon.png";
import ProfileDropdown from "../components/ProfileDropdown";
import { useSelector } from "react-redux";
import { auth } from "../config/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SUPPORTED_LANGUAGES } from "../config/constants";
import { toggleGptSearchView } from "../redux/slice/gptSlice";
import { setLanguage } from "../redux/slice/languageSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.toggleGpt);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGPTClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  //onAuthState change called only once app level
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signin
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        //user signout
        dispatch(removeUser());
        navigate("/");
      }
      //unsubscribed onAuthStateChanged event  when component unmount
      return () => unSubscribed();
    });
  }, []);

  return (
    <>
      <div
        id="headerLogo"
        className="absolute w-full z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between p-2"
      >
        <img src={Logo} alt="logo" className="w-44" />
        {user && (
          <div className="flex p-4 gap-2">
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white rounded-md"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            {showGptSearch ? (
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-pointer ring-1 m-2 ring-slate-900/10 dark:ring-slate-200/20"
                onClick={() => {
                  handleGPTClick();
                  navigate("/browse");
                }}
              >
                Homepage
              </button>
            ) : (
              <span class="relative inline-flex">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-pointer ring-1 m-2 ring-slate-900/10 dark:ring-slate-200/20"
                  onClick={handleGPTClick}
                >
                  AI Search
                </button>
                <span class="flex absolute h-3 w-3 top-2 right-2 -mt-1 -mr-1">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
              </span>
            )}
            <img src={UserIcon} alt="user-icon" className="w-12 h-12" />
            <ProfileDropdown />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
