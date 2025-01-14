import { TBaseResponse } from "./common-api-type";

export type TMessageResponse = TBaseResponse<TMessageData[]>;

export type TMessageData = {
  _id: string;
  content: string;
  createdAt: string;
  messageType: string;
  sender: string;
  updatedAt: string;
};
