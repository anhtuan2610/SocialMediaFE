import { TBaseResponse } from "./common-api-type";

export type TUserInfoResponse = TBaseResponse<TUserInfoData>;

export type TUserInfoData = {
  userInfo: {
    _id: string;
    fullName: string;
    email: string;
    bio: string | null;
    avatar: string | null;
  };
};

// export type TProfileInfoResponse = TBaseResponse<TProfileInfoData>;

// export type TProfileInfoData = {
//   info: {
//     _id: string;
//     avatar: string;
//     bio: string;
//     email: string;
//     fullName: string;
//   };
// };
