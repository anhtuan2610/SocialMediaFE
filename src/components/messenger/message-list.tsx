import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useUserStore } from "../../stores/user";
import { getAllMessageByRoomId } from "../../services/message-api";
import hiIcon from "../../assets/messenger-icon/hi.svg";
import { useEffect, useRef } from "react";
import { TMessageData } from "../../types/messages";

export default function MessageList({
  roomIdSelected,
  messageList,
  setMessageList,
}: {
  roomIdSelected: string;
  messageList: TMessageData[];
  setMessageList: React.Dispatch<React.SetStateAction<TMessageData[]>>;
}) {
  const user = useUserStore((state) => state.user);

  const { isLoading } = useQuery({
    queryKey: ["fetchAllMessage", roomIdSelected],
    queryFn: async () => {
      const response = await getAllMessageByRoomId({ roomId: roomIdSelected });
      if (response.data) {
        setMessageList(response.data);
      }
      return response;
    },
  });
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, [messageList]);

  return (
    <div className="bg-message-bg flex-1 px-5 py-2 space-y-4 overflow-y-auto font-semibold">
      {messageList.length ? (
        messageList.map((message, index) => (
          <div
            key={message._id}
            ref={index === messageList.length - 1 ? lastMessageRef : null}
            className={clsx(
              "flex",
              message.sender == user?.userInfo._id
                ? "justify-end"
                : "justify-start"
            )}
          >
            <div
              className={clsx(
                "py-2 px-3 rounded-2xl max-w-[80%] lg:max-w-[50%] lg:p-4",
                message.sender == user?.userInfo._id
                  ? "bg-[#C9E5C4]"
                  : "bg-[#ACDEFF]"
              )}
            >
              {message.content}
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-[#606F9D] font-bold text-2xl">
            Let's first message now
          </p>
          <img className="w-14 h-14" src={hiIcon} alt="" />
        </div>
      )}
    </div>
  );
}
