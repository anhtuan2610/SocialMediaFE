import homeIcon from "../../../assets/nav-icon/home.svg";
import profileIcon from "../../../assets/nav-icon/profile.svg";
import messengerIcon from "../../../assets/nav-icon/messenger.svg";
import notificationIcon from "../../../assets/nav-icon/friend.svg";
import settingIcon from "../../../assets/nav-icon/setting.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useUserStore } from "../../../stores/user";
import { useClickoutSide } from "../../../hooks/useClickOutside";
import { AnimatePresence, motion } from "motion/react";
import NotificationList from "./notification-list";

export default function Navbar() {
  const user = useUserStore((state) => state.user);
  const location = useLocation();
  const notificationRef = useRef<HTMLDivElement>(null);
  const [firstPathDetected, setFirstPathDetected] = useState<string>("");
  useEffect(() => {
    setFirstPathDetected(location.pathname);
  }, [location.pathname]);
  const [notificationOpen, setNotificationOpen] = useState(false);

  useClickoutSide({ refElm: notificationRef, setState: setNotificationOpen }); // chỉ chạy sau khi component đã mount.

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

      <div
        className={`rounded-full p-1 lg:p-2 ${notificationOpen} cursor-pointer ${
          notificationOpen && "bg-white"
        }`}
        onClick={() => {
          setNotificationOpen(!notificationOpen);
        }}
        ref={notificationRef}
      >
        <div className="relative w-10 lg:w-11">
          <img src={notificationIcon} alt="Notification Icon" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
          <AnimatePresence>
            {notificationOpen && (
              <motion.div
                key="modal"
                transition={{ duration: 0.2, ease: "linear" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <NotificationList />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div
        className={`rounded-full p-1 lg:p-2 hover:bg-slate-300 ${
          firstPathDetected.includes("profile") && "bg-white"
        }`}
      >
        <div className="w-10 lg:w-11">
          <Link to={`/profile/${user?.userInfo._id}`}>
            <img src={profileIcon} alt="" />
          </Link>
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
