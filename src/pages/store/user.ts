import { number } from "zod";
import { create } from "zustand";

interface UserState {
  userId: number;
}

export const useBearStore = create((set) => ({
  user: 0,
  increasePopulation: () =>
    set((state: UserState) => ({ bears: state.userId + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
