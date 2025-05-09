import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useUserStore } from "../../stores/user";
import { getAllMessageByRoomId } from "../../services/message-api";
import hiIcon from "../../assets/messenger-icon/hi.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { TListMessages } from "../../types/messages";
import { SocketContext } from "../../context/socket-context";
import Loading from "../common/animate/loading";
import { ChatRoomContext } from "../../context/chat-room-context";
import bg from "../../assets/messenger-icon/background.png";

export default function MessageList({
  roomIdSelected,
  messageList,
  setMessageList,
}: {
  roomIdSelected: string;
  messageList: TListMessages[];
  setMessageList: React.Dispatch<React.SetStateAction<TListMessages[]>>;
}) {
  const user = useUserStore((state) => state.user);
  const chatRoomDataContext = useContext(ChatRoomContext);
  const socket = useContext(SocketContext);
  const scrollTimeoutRef = useRef<number | null>(null);
  const numberPageAvailableRef = useRef(0);
  const countPageRef = useRef(0);
  const [countPage, setCountPage] = useState(0);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const { isLoading } = useQuery({
    queryKey: ["fetchAllMessage", roomIdSelected, countPage],
    queryFn: async () => {
      const response = await getAllMessageByRoomId({
        roomId: roomIdSelected,
        skipMessageCount: countPage * 15, // limit 15 bản ghi 1 page
      });
      setIsFirstLoading(false);
      if (response.data.listMessages && response.data.listMessages.length > 0) {
        setMessageList((prev) => [...response.data.listMessages, ...prev]);
        numberPageAvailableRef.current = Math.floor(
          response.data.totalMessage / 15
        );
      }
      return response;
    },
    refetchOnWindowFocus: false,
  });
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!socket) return;
    const handleReceiveMessage = (data: {
      data: { senderId: string; content: string };
    }) => {
      if (user?.userInfo._id !== data.data.senderId) {
        setMessageList((prev) => [
          ...prev,
          {
            _id: new Date().toString(),
            content: data.data.content,
            createdAt: new Date().toISOString(),
            messageType: "text",
            sender: data.data.senderId || "unknown",
            updatedAt: new Date().toISOString(),
          },
        ]);
        const newChatRoomList =
          chatRoomDataContext?.listChatRoom.map((chatRoom) =>
            chatRoom._id === roomIdSelected
              ? {
                  ...chatRoom,
                  lastMessage: {
                    _id: new Date().toString(),
                    sender: user?.userInfo._id || "unknown",
                    content: data.data.content,
                    chatRoom: roomIdSelected,
                    messageType: "text",
                    createdAt: new Date().toString(),
                    updatedAt: new Date().toString(),
                  },
                }
              : chatRoom
          ) ?? [];
        chatRoomDataContext?.setListChatRoom(newChatRoomList);
      }
    };
    socket.on("receiveMessage", handleReceiveMessage);
    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [socket, user?.userInfo._id]); //messageList bị update state nhiều lần ?

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  useEffect(() => {
    setIsFirstLoading(true);
    countPageRef.current = 0;
    setCountPage(0);
  }, [roomIdSelected]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        // đoạn này chỉ là xóa timeout khi mà không dùng đến chức năng này nữa thôi (không ảnh hưởng đến logic chính, không cần quan tâm)
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current?.scrollTop == 0) {
      // Phát hiện xem người dùng đang cố cuộn lên (delta âm nghĩa là cuộn lên, delta dương nghĩa là cuộn xuống).
      if (!scrollTimeoutRef.current) {
        // mặc định khi vào hàm này hoặc lần đầu vào hàm này thì timeout sẽ là null -> chưa có timeout được set -> đặt timeout mới -> hết timeout thì cập nhật
        // Đặt timeout
        scrollTimeoutRef.current = window.setTimeout(() => {
          scrollTimeoutRef.current = null; // Reset timeout
        }, 2000);
        // console.log(
        //   numberPageAvailableRef.current + " " + countPageRef.current
        // );

        if (numberPageAvailableRef.current == countPageRef.current) {
          return;
        }
        countPageRef.current += 1;
        setCountPage(countPageRef.current);
      }
    }
  };

  return (
    <div
      className="flex-1 px-5 py-2 space-y-4 overflow-y-auto custom-scroll font-semibold"
      ref={scrollContainerRef}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {isFirstLoading ? (
        <div className="flex justify-center items-center w-f  ull h-full">
          <div className="">
            <Loading width={16} height={16} />
          </div>
        </div>
      ) : messageList.length ? (
        <>
          {isLoading && (
            <div className="w-full flex justify-center">
              <Loading width={12} height={12} />
            </div>
          )}
          {messageList.map((message, index) => (
            <div
              key={index}
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
          ))}
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-[#606F9D] font-bold text-2xl">
            Let's first message now
          </p>
          <img loading="lazy" className="w-14 h-14" src={hiIcon} alt="" />
        </div>
      )}
    </div>
  );
}
