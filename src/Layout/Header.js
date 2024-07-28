import Logo from "../assets/images/logo.png";
import UserIcon from "../assets/images/profile_icon.png";
import ProfileDropdown from "../components/ProfileDropdown";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((store) => store.user);
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
