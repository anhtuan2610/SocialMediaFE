import { create } from "zustand";
import { TUserInfoData } from "../services/users-api";


type TUserStore = {
  user: TUserInfoData | null;
  setUser: (user: TUserInfoData | null) => void;
};

export const useUserStore = create<TUserStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
