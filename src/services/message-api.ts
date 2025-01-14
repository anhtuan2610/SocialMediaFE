import { TMessageResponse } from "../types/messages";
import { get, post } from "./axios-config";

export const getAllMessageByRoomId = async ({ roomId }: { roomId: string }) => {
  return get<TMessageResponse>({
    url: `/messages/get-all-message/${roomId}`,
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
