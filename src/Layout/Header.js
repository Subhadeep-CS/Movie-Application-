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
const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <div className="flex p-4">
            <img src={UserIcon} alt="user-icon" className="w-12 h-12" />
            <ProfileDropdown />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
