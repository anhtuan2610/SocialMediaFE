import searchIcon from "../../assets/home-icon/search2.svg";
import searchOption from "../../assets/home-icon/search-option.svg";
import { useQuery } from "@tanstack/react-query";
import avatarMessage2 from "../../assets/home-icon/mubark-image.jpg";
import camera from "../../assets/messenger-icon/camera.svg";
import { getAllRoom } from "../../services/chat-room-api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useContext, useEffect, useState } from "react";
import { ChatRoomContext } from "../../context/chat-room-context";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

export const ChatRoomList = ({
  userId,
  setRoomIdSelected,
}: {
  userId: string;
  setRoomIdSelected: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const chatRoomDataContext = useContext(ChatRoomContext);
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState<string>("");
  const debounceString = useDebounce(searchString, 500);
  useEffect(() => {
    console.log(debounceString);
  }, [debounceString]);
  const { isLoading } = useQuery({
    queryKey: ["fetchAllChatRoom", userId, debounceString],
    queryFn: async () => {
      const response = await getAllRoom(searchString);
      if (response.data && chatRoomDataContext) {
        chatRoomDataContext.setListChatRoom(response.data);
        chatRoomDataContext.setAcceptJoinRoom(true);
      }
      return response;
    },
    enabled: !!debounceString || debounceString === "",
  });
  return (
    <>
      <div className="px-3 my-4">
        <div className="relative">
          <input
            className="w-full bg-[#F3F6F8] p-2 pl-10 rounded-3xl"
            type="text"
            placeholder="Search messages"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
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
              onClick={() => {
                setRoomIdSelected(chatRoom._id);
                navigate(`/messenger/${chatRoom._id}`, { replace: true });
              }}
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
    </>
  );
};
