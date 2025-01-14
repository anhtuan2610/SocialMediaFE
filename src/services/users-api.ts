import { TUserInfoResponse } from "../types/users";
import { get } from "./axios-config";

export const getLoggedInUserInfo = async () => {
  return await get<TUserInfoResponse>({
    url: "/users/get-info",
  });
};
