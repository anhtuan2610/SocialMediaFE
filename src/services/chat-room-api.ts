import { TChatRoomInfoResponse, TChatRoomResponse } from "../types/chatRooms";
import { get } from "./axios-config";

export const getAllRoom = async (searchString: string) => {
  // console.log(searchString);
  return await get<TChatRoomResponse>({
    url: `/chatRooms/get-all-room`,
    params: {searchString}
  });
};

export const getChatRoomInfo = async (id: string) => {
  return await get<TChatRoomInfoResponse>({
    url: `/chatRooms/get-room-information/${id}`,
  });
};
