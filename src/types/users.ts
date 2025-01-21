import { TBaseResponse } from "./common-api-type";

export type TUserInfoResponse = TBaseResponse<TUserInfoData>;

export type TUserInfoData = {
  userInfo: {
    _id: string;
    fullName: string;
    email: string;
  };
};
