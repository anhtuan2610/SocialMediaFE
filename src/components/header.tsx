import addIcon from "../assets/home-icon/add-icon.svg";
import videoIcon from "../assets/home-icon/video-icon.svg";
import avatar from "../assets/home-icon/avatar-header.png";
import search from "../assets/home-icon/search.svg";
import dropdownArrow from "../assets/home-icon/dropdown-arrow.svg";
import { useRef, useState } from "react";
import ProfileDropdown from "./profile-dropdown";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

export default function Header() {
  const [isShowProfileDropdown, setIsShowProfileDropdown] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white flex justify-between items-center p-3 lg:px-28 lg:justify-around">
      <div className="text-3xl font-bold lg:text-4xl">Aatroxx.in</div>
      <div className="hidden w-full lg:flex lg:justify-center">
        <div className="w-2/3 relative">
          <input
            className="w-full bg-[#F2F5F7] p-2 pl-14 rounded-2xl font-medium text-lg"
            placeholder="Search for creators, inspirations, travel video projects..."
          />
          <img className="absolute left-4 top-1.5" src={search} alt="" />
        </div>
      </div>
      <div className="flex gap-3 lg:gap-3">
        <div className="w-10 h-10 rounded-full bg-[#F0F3F6] flex justify-center items-center lg:w-12 lg:h-12">
          <img src={addIcon} alt="" />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#F0F3F6] flex justify-center items-center lg:w-12 lg:h-12">
          <img src={videoIcon} alt="" />
        </div>
        <div className="relative">
          <div
            ref={avatarRef}
            className="relative w-10 h-10 rounded-full bg-[#F0F3F6] flex justify-center items-center lg:w-12 lg:h-12 cursor-pointer"
            onClick={() => {
              setIsShowProfileDropdown(!isShowProfileDropdown);
            }}
          >
            <img src={avatar} alt="" />
            <div
              className={clsx("absolute ml-2 w-4 h-4 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-200 cursor-pointer -bottom-1 -right-1 lg:w-5 lg:h-5 transition-transform duration-200 ease-in-out", {
                "rotate-180": isShowProfileDropdown,
                "rotate-0": !isShowProfileDropdown
              })}
            >
              <img src={dropdownArrow} alt="" />
            </div>
          </div>
          <AnimatePresence> 
            {isShowProfileDropdown && (
              <motion.div key="modal" transition={{ duration: 0.2, ease: "linear" }} initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{ opacity: 0 }}>
                {
                  <ProfileDropdown
                    isShowProfileDropdown={isShowProfileDropdown}
                    setIsShowProfileDropdown={setIsShowProfileDropdown}
                    avatarRef={avatarRef}
                  />
                }
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
