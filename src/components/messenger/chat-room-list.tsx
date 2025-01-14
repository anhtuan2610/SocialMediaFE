import { useQuery } from "@tanstack/react-query";
import avatarMessage2 from "../../assets/home-icon/mubark-image.jpg";
import camera from "../../assets/messenger-icon/camera.svg";
import { getAllRoom } from "../../services/chat-room-api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useContext } from "react";
import { ChatRoomContext } from "../context/chat-room-context";

export const ChatRoomList = ({
  userId,
  setRoomIdSelected,
}: {
  userId: string;
  setRoomIdSelected: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const chatRoomDataContext = useContext(ChatRoomContext);
  const { isLoading } = useQuery({
    queryKey: ["fetchAllChatRoom", userId],
    queryFn: async () => {
      const response = await getAllRoom();
      if (response.data && chatRoomDataContext) {
        chatRoomDataContext.setListChatRoom(response.data);
      }
      return response;
    },
  });
  return (
    <div className="px-6 mt-6 space-y-3 lg:px-2 lg:space-y-5">
      {isLoading ? (
        <>
          <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
            <div className="space-y-5">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Skeleton circle width={64} height={64} />
                    <div className="flex-1 space-y-2">
                      <Skeleton width="50%" height={20} />
                      <Skeleton width="80%" height={20} />
                    </div>
                  </div>
                ))}
            </div>
          </SkeletonTheme>
        </>
      ) : (
        chatRoomDataContext?.listChatRoom.map((chatRoom) => (
          <div
            key={chatRoom._id}
            className="flex items-center gap-3 p-1 rounded-xl hover:bg-slate-100 hover:cursor-pointer"
            onClick={() => setRoomIdSelected(chatRoom._id)}
          >
            <div className="flex-shrink-0 rounded-full w-16 h-16">
              <img
                className="rounded-full w-16 h-16"
                src={avatarMessage2}
                alt=""
              />
            </div>
            <div className="text-start flex-1 min-w-0">
              <div className="flex gap-2 items-center font-bold">
                <span className="text-base">{chatRoom.name}</span>
                <span className="text-sm text-gray-300">
                  Active 1m ago
                </span>{" "}
              </div>
              <div className="text-[#606F9D] font-bold flex">
                <div className="truncate">
                  {chatRoom.lastMessage
                    ? chatRoom.lastMessage.content
                    : "Let's First Message Now"}
                </div>
              </div>
            </div>
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#C8F4F6]">
              <img src={camera} alt="" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};
