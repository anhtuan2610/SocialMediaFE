import avatarMessage2 from "../../assets/home-icon/mubark-image.jpg";
import phoneIcon from "../../assets/messenger-icon/phone.svg";
import videoIcon from "../../assets/messenger-icon/video.svg";
import infoIcon from "../../assets/messenger-icon/i-icon.svg";
import smileIcon from "../../assets/messenger-icon/smile-icon.svg";
import pinnedIcon from "../../assets/messenger-icon/pinned-icon.svg";
import microIcon from "../../assets/messenger-icon/micro.svg";
import sendIcon from "../../assets/messenger-icon/send.svg";

export default function RightSidebar() {
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col min-h-[780px]">
      <div className="bg-white flex justify-between items-center p-4 px-6">
        <div className="flex items-center gap-4">
          <img className="rounded-full w-16 h-16" src={avatarMessage2} alt="" />
          <div>
            <div className="font-bold">Mubark Androz</div>
            <div className="text-sm text-[#697497] font-semibold">
              Active 16m ago
            </div>
          </div>
        </div>
        <div className="flex space-x-10">
          <img src={phoneIcon} alt="" />
          <img src={videoIcon} alt="" />
          <img src={infoIcon} alt="" />
        </div>
      </div>
      <div className="bg-message-bg flex-1">a</div>
      <div className="bg-[#FBDDDD] flex items-center p-3 px-6">
        <div className="flex items-center gap-6 w-full">
          <div>
            <img src={smileIcon} alt="" />
          </div>
          <div>
            <img src={pinnedIcon} alt="" />
          </div>
          <div className="relative w-2/3">
            <input
              className="rounded-3xl p-2 py-3 pl-6 w-full"
              type="text"
              placeholder="Type a message.."
            />
            <img
              className="absolute top-1/2 -translate-y-1/2 right-4"
              src={microIcon}
              alt=""
            />
          </div>
          <div className="ml-10">
            <img src={sendIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
