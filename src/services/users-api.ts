import { TProfileInfoResponse, TUserInfoResponse } from "../types/users";
import { get } from "./axios-config";

export const getLoggedInUserInfo = async () => {
  return await get<TUserInfoResponse>({
    url: "/users/get-info",
  });
};

export const getProfileInfo = async ({ userId }: { userId: string }) => {
  return await get<TProfileInfoResponse>({
    url: `/users/get-profile-info/${userId}`,
  });
};
