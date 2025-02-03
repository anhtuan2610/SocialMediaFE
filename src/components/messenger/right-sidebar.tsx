import MessageList from "./message-list";
import MessageActionBar from "./message-action-bar";
import MessageHeader from "./message-header";
import { useEffect, useState } from "react";
import { TListMessages } from "../../types/messages";

export default function RightSidebar({
  roomIdSelected,
  setRoomIdSelected,
}: {
  roomIdSelected: string;
  setRoomIdSelected: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [messageList, setMessageList] = useState<TListMessages[]>([]);
  const handleGoBack = () => {
    setMessageList([]);
    setRoomIdSelected(null);
  };
  useEffect(() => {
    setMessageList([]);
  }, [roomIdSelected])

  return (
    <div className="rounded-2xl overflow-hidden flex flex-col h-[780px] w-full op">
      <MessageHeader
        roomIdSelected={roomIdSelected}
        handleGoBack={handleGoBack}
      />
      <MessageList
        roomIdSelected={roomIdSelected}
        messageList={messageList}
        setMessageList={setMessageList}
      />
      <MessageActionBar
        roomIdSelected={roomIdSelected}
        setMessageList={setMessageList}
      />
    </div>
  );
}
