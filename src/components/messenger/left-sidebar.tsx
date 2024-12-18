import messageIcon from "../../assets/home-icon/message-icon.svg";
import searchIcon from "../../assets/home-icon/search2.svg";
import searchOption from "../../assets/home-icon/search-option.svg";
import avatarMessage2 from "../../assets/home-icon/mubark-image.jpg";
import camera from "../../assets/messenger-icon/camera.svg";

export default function LeftSidebar() {
  const number = [1, 2, 3, 4, 5];

  return (
    <div className="bg-white rounded-2xl py-6 lg:p-6 max-h-[740px] overflow-y-auto">
      <div className="flex justify-between items-end px-2">
        <div className="text-[#323746] text-2xl font-bold">Message</div>
        <div>
          <img src={messageIcon} alt="" />
        </div>
      </div>
      <div className="px-3 my-4">
        <div className="relative">
          <input
            className="w-full bg-[#F3F6F8] p-2 pl-10 rounded-3xl"
            type="text"
            placeholder="Search messages"
          />
          <img
            className="w-5 absolute top-1/2 -translate-y-1/2 left-3"
            src={searchIcon}
            alt=""
          />
          <img
            className="w-5 absolute top-1/2 -translate-y-1/2 right-3"
            src={searchOption}
            alt=""
          />
        </div>
      </div>
      <div className="px-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="font-bold relative">
              <div>Primary</div>
              <div className="absolute border-2 w-full border-gray-700 -bottom-[0.55rem] translate-y-1/2"></div>
            </div>
            <div className="text-[#9DA4B0]">General</div>
          </div>
          <div className="text-blue-500">Request (2)</div>
        </div>
        <div className="border w-full mt-2"></div>
      </div>
      <div className="px-6 mt-6 space-y-3 lg:px-2 lg:space-y-5">
        {number.map(() => (
          <div className="flex items-center gap-3 p-1 rounded-xl hover:bg-slate-100 hover:cursor-pointer">
            <div className="flex-shrink-0 rounded-full w-16 h-16">
              <img
                className="rounded-full w-16 h-16"
                src={avatarMessage2}
                alt=""
              />
            </div>
            <div className="text-start flex-1 min-w-0">
              <div className="font-bold">
                Mubark Androz{" "}
                <span className="text-sm text-gray-300">Active 16m ago</span>{" "}
              </div>
              <div className="text-[#606F9D] font-bold flex">
                <div className="truncate">
                  Mubark Androz Ch
                </div>
              </div>
            </div>
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#C8F4F6]">
              <img src={camera} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
