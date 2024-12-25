import homeIcon from "../assets/nav-icon/home.svg";
import profileIcon from "../assets/nav-icon/profile.svg";
import messengerIcon from "../assets/nav-icon/messenger.svg";
import compassIcon from "../assets/nav-icon/compass.svg";
import friendIcon from "../assets/nav-icon/friend.svg";
import settingIcon from "../assets/nav-icon/setting.svg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const firstPathDetected = location.pathname;
  
  return (
    <div className="flex gap-3 bg-[##F6D0FF] items-center bg-[#F6D0FF] p-3 rounded-3xl lg:flex-col lg:gap-2">
      <div
        className={`rounded-full p-1 lg:p-2 hover:bg-slate-300 ${
          firstPathDetected.includes("home") && "bg-white"
        }`}
      >
        <div className="w-10 lg:w-11">
          <Link to="/home">
            <img src={homeIcon} alt="" />
          </Link>
        </div>
      </div>
      <div
        className={`rounded-full p-1 lg:p-2 hover:bg-slate-300 ${
          firstPathDetected.includes("messenger") && "bg-white"
        }`}
      >
        <div className="w-10 lg:w-11">
          <Link to="/messenger">
            <img src={messengerIcon} alt="" />
          </Link>
        </div>
      </div>

      <div className="rounded-full p-1 lg:p-2 hover:bg-slate-300">
        <div className="w-10 lg:w-11">
          <img src={profileIcon} alt="" />
        </div>
      </div>

      <div className="rounded-full p-1 lg:p-2 hover:bg-slate-300">
        <div className="w-10 lg:w-11">
          <img src={compassIcon} alt="" />
        </div>
      </div>

      <div className="rounded-full p-1 lg:p-2 hover:bg-slate-300">
        <div className="w-10 lg:w-11">
          <img src={friendIcon} alt="" />
        </div>
      </div>

      <div className="rounded-full p-1 lg:p-2 hover:bg-slate-300">
        <div className="w-10 lg:w-11">
          <img src={settingIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
