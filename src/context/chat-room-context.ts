import { createContext } from "react";
import { TChatRoomData } from "../types/chatRooms";

export const ChatRoomContext = createContext<{
  listChatRoom: TChatRoomData[];
  setListChatRoom: React.Dispatch<React.SetStateAction<TChatRoomData[]>>;
  setAcceptJoinRoom: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
