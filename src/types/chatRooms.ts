import { TBaseResponse } from "./common-api-type";

export type TChatRoomResponse = TBaseResponse<TChatRoomData[]>;

export type TChatRoomInfoResponse = TBaseResponse<
  Pick<TChatRoomData, "_id" | "name" | "isGroup" | "members" | "lastActive">
>;

export type TChatRoomData = {
  _id: string;
  name: string | null;
  isGroup: boolean;
  members: [
    {
      avatar: string | null;
      _id: string;
      fullName: string;
      email: string;
    }
  ];
  lastMessage: {
    _id: string;
    sender: string;
    content: string;
    chatRoom: string;
    messageType: string;
    createdAt: string;
    updatedAt: string;
  };
  lastActive: string;
  createdAt: string;
  updatedAt: string;
};
