import { StateCreator } from "zustand";
import { IUser } from "@typing/interfaces/user.interface";
import { AppState } from "./store";
import { ISettings } from "@typing/interfaces/settings.interface";

export interface IUserSlice {
  user: IUser | null;
  isAuthLoading: boolean;
  settings: ISettings | null;
  setIsAuthLoading: (loading: boolean) => void;
  setUser: (user: IUser) => void;
  setSettings: (settings: ISettings) => void;
}

export const createUserSlice: StateCreator<
  AppState,
  [["zustand/devtools", never]],
  [],
  IUserSlice
> = (set) => ({
  user: null,
  isAuthLoading: true,
  settings: null,
  setIsAuthLoading: (loading) =>
    set({ isAuthLoading: loading }, false, "user/setIsAuthLoading"),
  setUser: (user) => set({ user: user }, false, "user/setUser"),
  setSettings: (settings) =>
    set({ settings: settings }, false, "user/setSettings"),
});
