import { post } from "./axios-config";

type TBaseResponse<T> = {
  message: string;
  data: T;
};

export type TLoginResponse = TBaseResponse<TLoginResponseData>;

type TLoginResponseData = {
  userInformation: {
    id: string,
    email: string,
    fullName: string,
  }
  accessToken: string;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await post<TLoginResponse>({
    url: "/auth/login",
    data: {
      email,
      password,
    },
  });
};

export const registerUser = async ({ // đặt tên bình thường ko gọi được , hình như là do trùng với nào trong nodejs
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) => {
  return await post({
    url: "/auth/register",
    data: {
      fullName,
      email,
      password,
    },
  });
};
