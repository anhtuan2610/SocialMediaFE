import profileSettingIcon from "../assets/home-icon/profile-dropdown-icon/profile-setting.svg";
import helpCenterIcon from "../assets/home-icon/profile-dropdown-icon/help-center.svg";
import darkModeIcon from "../assets/home-icon/profile-dropdown-icon/dark-mode.svg";
import signoutIcon from "../assets/home-icon/profile-dropdown-icon/sign-out.svg";
import avatar from "../assets/home-icon/avatar-header.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useUserStore } from "../stores/user";
import Cookies from "js-cookie";
import clsx from "clsx";
import { toast } from "sonner";

type TProps = {
  isShowProfileDropdown: boolean;
  setIsShowProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  avatarRef: React.RefObject<HTMLDivElement>;
};

export default function ProfileDropdown({
  isShowProfileDropdown,
  setIsShowProfileDropdown,
  avatarRef,
}: TProps) {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleLogout = () => {
    setUser(null);
    Cookies.remove("accessToken");
    navigate("/login");
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) && // phần tử được click không nằm trong cái dropdown
      avatarRef.current &&
      !avatarRef.current.contains(event.target as Node) // Kiểm tra avatarRef
    ) {
      setIsShowProfileDropdown(false); // Close the dropdown when clicking outside
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className={clsx(
        "w-32 rounded-lg bg-white border shadow-md z-10 absolute right-0 top-12 px-2 py-1 text-xs font-semibold transition-opacity duration-300 cursor-default lg:w-56 lg:text-base lg:font-medium lg:shadow-lg lg:rounded-xl lg:px-3 lg:py-2",
        isShowProfileDropdown ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div className="hidden lg:flex pb-2 items-center gap-2">
        <div>
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={avatar}
            alt=""
          />
        </div>
        <div className="items-center">
          <div className="font-bold text-lg leading-5">
            {user?.userInfo.fullName}
          </div>
          <div className="truncate text-ellipsis overflow-hidden max-w-36 text-[#999999]">
            {user?.userInfo.email}
          </div>
        </div>
      </div>
      <div className="hidden lg:block h-[1px] bg-gray-300 my-1"></div>
      <div>
        <div className="flex items-center space-x-2 py-1 cursor-pointer hover:bg-blue-100 lg:p-2 rounded-md" onClick={() => {navigate(`/profile/${user?.userInfo._id}`)}}>
          <img className="lg:w-6 w-4" src={profileSettingIcon} alt="" />
          <p className=" text-nowrap">Profile Settings</p>
        </div>
        <div className="flex items-center space-x-2 py-1 cursor-pointer hover:bg-blue-100 lg:p-2 rounded-md">
          <img className="lg:w-6 w-4" src={helpCenterIcon} alt="" />
          <p className=" text-nowrap">Help Center</p>
        </div>
        <div className="flex items-center space-x-2 py-1 cursor-pointer hover:bg-blue-100 lg:p-2 rounded-md" onClick={() => {toast.warning("Sorry this feature not done :(")}}>
          <img className="lg:w-6 w-4" src={darkModeIcon} alt="" />
          <p className=" text-nowrap">Dark Mode</p>
        </div>
      </div>
      <div className="h-[1px] bg-gray-300 my-1"></div>
      <div
        className="flex items-center space-x-2 py-1 cursor-pointer hover:bg-blue-100 lg:p-2 rounded-md"
        onClick={handleLogout}
      >
        <img className="lg:w-6 w-4" src={signoutIcon} alt="" />
        <p className=" text-nowrap">Sign Out</p>
      </div>
    </div>
  );
}
