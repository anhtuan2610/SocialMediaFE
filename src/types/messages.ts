import { TBaseResponse } from "./common-api-type";

export type TMessageResponse = TBaseResponse<TMessageData>;

export type TMessageData = {
  listMessages: TListMessages[],
  totalMessage: number;
};

export type TListMessages = {
    _id: string;
    content: string;
    createdAt: string;
    messageType: string;
    sender: string;
    updatedAt: string;
}
