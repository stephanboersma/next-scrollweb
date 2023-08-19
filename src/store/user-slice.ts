import { StateCreator } from "zustand";
import { IUser } from "@typing/interfaces/user.interface";
import { AppState } from "./store";

export interface IUserSlice {
  user: IUser | null;
  isAuthLoading: boolean;
  setIsAuthLoading: (loading: boolean) => void;
  setUser: (user: IUser) => void;
}

export const createUserSlice: StateCreator<
  AppState,
  [["zustand/devtools", never]],
  [],
  IUserSlice
> = (set) => ({
  user: null,
  isAuthLoading: true,
  setIsAuthLoading: (loading) =>
    set({ isAuthLoading: loading }, false, "user/setIsAuthLoading"),
  setUser: (user) => set({ user: user }, false, "user/setUser"),
});
