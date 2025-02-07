import messageIcon from "../../assets/home-icon/message-icon.svg";

import { ChatRoomList } from "./chat-room-list";

export default function LeftSidebar({
  userId,
  setRoomIdSelected,
}: {
  userId: string;
  setRoomIdSelected: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <>
      <div className="bg-white rounded-2xl py-6 lg:px-3 max-h-[740px] overflow-y-auto custom-scroll">
        <div className="flex justify-between items-end px-2">
          <div className="text-[#323746] text-2xl font-bold">Message</div>
          <div>
            <img src={messageIcon} alt="" />
          </div>
        </div>
        <ChatRoomList userId={userId} setRoomIdSelected={setRoomIdSelected} />
      </div>
    </>
  );
}
