import { useContext, useEffect, useState } from "react";
import LeftSidebar from "../components/messenger/left-sidebar";
import RightSidebar from "../components/messenger/right-sidebar";
import useDeviceType from "../hooks/useDeviceType";
import StartSidebar from "../components/messenger/start-sidebar";
import { useUserStore } from "../stores/user";
import { ChatRoomContext } from "../context/chat-room-context";
import { TChatRoomData } from "../types/chatRooms";
import { SocketContext } from "../context/socket-context";

export default function Messenger() {
  const user = useUserStore((state) => state.user);
  const socket = useContext(SocketContext);
  const [roomIdSelected, setRoomIdSelected] = useState<string | null>(null);
  const [listChatRoom, setListChatRoom] = useState<TChatRoomData[]>([]);
  const [acceptJoinRoom, setAcceptJoinRoom] = useState(false);
  const isMobile = useDeviceType();
  useEffect(() => {
    if (socket && acceptJoinRoom) {
      const chatRoomIds = listChatRoom.map((chatRoom) => chatRoom._id);
      if (chatRoomIds.length > 0) {
        console.log("join room");
        socket.emit("joinChatRooms", chatRoomIds);
      }
    }
  }, [socket, acceptJoinRoom]); // Theo dõi cả socket và listChatRoom 

  return (
    <ChatRoomContext.Provider value={{ listChatRoom, setListChatRoom, setAcceptJoinRoom }}>
      <div className="flex cursor-default gap-10 relative px-1 pt-4 pb-20 lg:px-24">
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
