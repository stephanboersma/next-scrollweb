import { createWithEqualityFn } from "zustand/traditional";
import { createUserSlice, IUserSlice } from "./user-slice";
import { devtools } from "zustand/middleware";

export type AppState = IUserSlice;

export const useStore = createWithEqualityFn<AppState>()(
  devtools((...args) => ({
    ...createUserSlice(...args),
  })),
  Object.is
);
