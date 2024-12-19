import homeIcon from "../assets/nav-icon/home.svg";
import profileIcon from "../assets/nav-icon/profile.svg";
import messengerIcon from "../assets/nav-icon/messenger.svg";
import compassIcon from "../assets/nav-icon/compass.svg";
import friendIcon from "../assets/nav-icon/friend.svg";
import settingIcon from "../assets/nav-icon/setting.svg";
import { Link } from "react-router-dom";
// import { useState } from "react";

export default function Navbar() {
  // const [selectedName, setSelectedName] = useState("");
  return (
    <div className="flex gap-3 bg-[##F6D0FF] items-center bg-[#F6D0FF] p-3 rounded-3xl lg:flex-col">
      <div className="rounded-full bg-white p-1 hover:bg-slate-300">
        <div className="w-10 lg:w-12">
          <Link to="/home">
            <img src={homeIcon} alt="" />
          </Link>
        </div>
      </div>
      <div className="rounded-full p-1 hover:bg-slate-300">
        <div className="w-10 lg:w-12">
          <Link to="/messenger">
            <img src={messengerIcon} alt="" />
          </Link>
        </div>
      </div>

      <div className="rounded-full p-1 hover:bg-slate-300">
        <div className="w-10 lg:w-12">
          <img src={profileIcon} alt="" />
        </div>
      </div>

      <div className="rounded-full p-1 hover:bg-slate-300">
        <div className="w-10 lg:w-12">
          <img src={compassIcon} alt="" />
        </div>
      </div>

      <div className="rounded-full p-1 hover:bg-slate-300">
        <div className="w-10 lg:w-12">
          <img src={friendIcon} alt="" />
        </div>
      </div>

      <div className="rounded-full p-1 hover:bg-slate-300">
        <div className="w-10 lg:w-12">
          <img src={settingIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
