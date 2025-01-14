import { useState } from "react";
import LeftSidebar from "../components/messenger/left-sidebar";
import RightSidebar from "../components/messenger/right-sidebar";
import useDeviceType from "../hooks/useDeviceType";
import StartSidebar from "../components/messenger/start-sidebar";
import { useUserStore } from "../stores/user";
import { ChatRoomContext } from "../components/context/chat-room-context";
import { TChatRoomData } from "../types/chatRooms";
export default function Messenger() {
  const user = useUserStore((state) => state.user);
  const [roomIdSelected, setRoomIdSelected] = useState<string | null>(null);
  const [listChatRoom, setListChatRoom] = useState<TChatRoomData[]>([]);
  const isMobile = useDeviceType();

  return (
    <ChatRoomContext.Provider value={{ listChatRoom, setListChatRoom }}>
      <div className="flex cursor-default gap-10 relative">
        <div className="w-full lg:w-1/4 ">
          {user?.userInfo._id && (
            <LeftSidebar
              userId={user.userInfo._id}
              setRoomIdSelected={setRoomIdSelected}
            />
          )}
        </div>
        {isMobile ? (
          <div className="absolute w-full">
            {roomIdSelected && (
              <RightSidebar
                roomIdSelected={roomIdSelected}
                setRoomIdSelected={setRoomIdSelected}
              />
            )}
          </div>
        ) : (
          <div className="hidden lg:block lg:w-3/4">
            {roomIdSelected ? (
              <RightSidebar
                roomIdSelected={roomIdSelected}
                setRoomIdSelected={setRoomIdSelected}
              />
            ) : (
              <StartSidebar />
            )}
          </div>
        )}
      </div>
    </ChatRoomContext.Provider>
  );
}
