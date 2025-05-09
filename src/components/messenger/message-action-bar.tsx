import smileIcon from "../../assets/messenger-icon/smile-icon.svg";
import pinnedIcon from "../../assets/messenger-icon/pinned-icon.svg";
import microIcon from "../../assets/messenger-icon/micro.svg";
import sendIcon from "../../assets/messenger-icon/send.svg";
import { useMutation } from "@tanstack/react-query";
import { createMessage } from "../../services/message-api";
import { useUserStore } from "../../stores/user";
import { useContext, useRef, useState } from "react";
import { TListMessages } from "../../types/messages";
import { ChatRoomContext } from "../../context/chat-room-context";
import LoadingInButton from "../common/animate/loading-in-button";
import { SocketContext } from "../../context/socket-context";
import Picker from "@emoji-mart/react";
import { useClickoutSide } from "../../hooks/useClickOutside";

export default function MessageActionBar({
  roomIdSelected,
  setMessageList,
}: {
  roomIdSelected: string;
  setMessageList: React.Dispatch<React.SetStateAction<TListMessages[]>>;
}) {
  const user = useUserStore((state) => state.user);
  const socket = useContext(SocketContext);
  const chatRoomDataContext = useContext(ChatRoomContext);
  const emojiRef = useRef<HTMLDivElement>(null);
  const [newMessage, setNewMessage] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const { isPending, mutate } = useMutation({
    mutationKey: ["createMessage"],
    mutationFn: async () => {
      setNewMessage("");
      const newChatRoomList =
        chatRoomDataContext?.listChatRoom.map((chatRoom) =>
          chatRoom._id === roomIdSelected
            ? {
                ...chatRoom,
                lastMessage: {
                  _id: new Date().toString(),
                  sender: user?.userInfo._id || "unknown",
                  content: newMessage,
                  chatRoom: roomIdSelected,
                  messageType: "text",
                  createdAt: new Date().toString(),
                  updatedAt: new Date().toString(),
                },
              }
            : chatRoom
        ) ?? [];
      chatRoomDataContext?.setListChatRoom(newChatRoomList);
      const validate =
        user?.userInfo._id && newMessage.trim() !== "" && roomIdSelected;
      if (validate) {
        await createMessage({
          senderId: user?.userInfo._id,
          content: newMessage,
          chatRoomId: roomIdSelected,
        });
        if (socket) {
          socket.emit(
            "sendMessage",
            roomIdSelected,
            user.userInfo._id,
            newMessage
          );
        }
      }
    },
  });

  const handleCreateMessage = async () => {
    setMessageList((prev) => [
      ...prev,
      {
        _id: new Date().toString(),
        content: newMessage,
        createdAt: new Date().toString(),
        messageType: "text",
        sender: user?.userInfo._id || "abc",
        updatedAt: new Date().toString(),
      },
    ]);
    mutate();
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isPending && newMessage.trim() !== "") {
      handleCreateMessage();
    }
  };

  const handleSelectEmoji = (emoji: any) => {
    setNewMessage((prev) => prev + emoji.native);
    setShowEmojiPicker(false); // Ẩn picker sau khi chọn emoji
  };

  useClickoutSide({ setState: setShowEmojiPicker, refElm: emojiRef });

  return (
    <div className="bg-[#FBDDDD] flex items-center p-3 px-6">
      <div className="flex items-center gap-6 w-full">
        <div className="relative" ref={emojiRef}>
          <img
            src={smileIcon}
            alt="emoji"
            className="cursor-pointer"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          />
          {showEmojiPicker && (
            <div className="absolute bottom-full left-0 mb-2 z-10">
              <Picker onEmojiSelect={handleSelectEmoji} theme="light" />
            </div>
          )}
        </div>
        <div>
          <img src={pinnedIcon} alt="" />
        </div>
        <div className="relative w-2/3">
          <input
            className="rounded-3xl p-2 py-3 pl-6 w-full"
            type="text"
            placeholder="Type a message.."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => handleOnKeyDown(e)}
          />
          <img
            className="absolute top-1/2 -translate-y-1/2 right-4"
            src={microIcon}
            alt=""
          />
        </div>
        <div className="flex items-center ml-5">
          <button
            className={`${isPending ? "cursor-not-allowed" : ""}`}
            onClick={handleCreateMessage}
            disabled={isPending}
          >
            {isPending ? <LoadingInButton /> : <img src={sendIcon} alt="" />}
          </button>
        </div>
      </div>
    </div>
  );
}
