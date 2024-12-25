import { get } from "./axios-config";

type TBaseResponse<T> = {
  message: string;
  data: T;
};

type TUserInfoResponse = TBaseResponse<TUserInfoData>;

export type TUserInfoData = {
  userInfo: {
    _id: number;
    fullName: string;
    email: string;
  };
};

export const getLoggedInUserInfo = async () => {
  return await get<TUserInfoResponse>({
    url: "/users/get-info",
  });
};
