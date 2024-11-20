// create a store for the header height

import { create } from "zustand";

export const useHeaderHeightStore = create((set) => ({
  header2Height: 0,
  setHeader2Height: (height) => set({ header2Height: height }),
}));
