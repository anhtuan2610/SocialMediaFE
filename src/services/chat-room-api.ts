import { TChatRoomInfoResponse, TChatRoomResponse } from "../types/chatRooms";
import { get } from "./axios-config";

export const getAllRoom = async () => {
  return await get<TChatRoomResponse>({
    url: `/chatRooms/get-all-room`,
  });
};

export const getChatRoomInfo = async (id: string) => {
  return await get<TChatRoomInfoResponse>({
    url: `/chatRooms/get-room-information/${id}`,
  });
};
