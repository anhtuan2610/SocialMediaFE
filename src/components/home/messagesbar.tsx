import messageIcon from "../../assets/home-icon/message-icon.svg";
import searchIcon from "../../assets/home-icon/search2.svg";
import searchOption from "../../assets/home-icon/search-option.svg";
import avatarMessage2 from "../../assets/home-icon/mubark-image.jpg";

export default function Messagesbar() {
  return (
    <div className="bg-white rounded-2xl py-6 px-6">
      <div className="flex justify-between items-end n px-2">
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
      <div className="px-6 mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 h-16">
            <img
              className="rounded-full w-16 h-16"
              src={avatarMessage2}
              alt=""
            />
          </div>
          <div className="text-start">
            <div className="font-bold">Mubark Androz</div>
            <div className="text-sm text-gray-300">Active 16m ago</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 h-16">
            <img
              className="rounded-full w-16 h-16"
              src={avatarMessage2}
              alt=""
            />
          </div>
          <div className="text-start">
            <div className="font-bold">Mubark Androz</div>
            <div className="text-sm text-gray-300">Active 16m ago</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 h-16">
            <img
              className="rounded-full w-16 h-16"
              src={avatarMessage2}
              alt=""
            />
          </div>
          <div className="text-start">
            <div className="font-bold">Mubark Androz</div>
            <div className="text-sm text-gray-300">Active 16m ago</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 h-16">
            <img
              className="rounded-full w-16 h-16"
              src={avatarMessage2}
              alt=""
            />
          </div>
          <div className="text-start">
            <div className="font-bold">Mubark Androz</div>
            <div className="text-sm text-gray-300">Active 16m ago</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full w-16 h-16">
            <img className="rounded-full w-16 h-16" src={avatarMessage2} alt="" />
          </div>
          <div className="text-start">
            <div className="font-bold">Mubark Androz</div>
            <div className="text-sm text-gray-300">Active 16m ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
