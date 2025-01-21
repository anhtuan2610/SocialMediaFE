import { TMessageResponse } from "../types/messages";
import { get, post } from "./axios-config";

export const getAllMessageByRoomId = async ({
  roomId,
  skipMessageCount,
}: {
  roomId: string;
  skipMessageCount: number;
}) => {
  return get<TMessageResponse>({
    url: `/messages/get-all-message/${roomId}`,
    params: {
      skipMessageCount,
    },
  });
};

export const createMessage = async ({
  senderId,
  content,
  chatRoomId,
}: {
  senderId: string;
  content: string;
  chatRoomId: string;
}) => {
  return post({
    url: `/messages/create-message`,
    data: {
      senderId,
      content,
      chatRoomId,
    },
  });
};
