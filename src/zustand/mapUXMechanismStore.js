// create a store for the header height

import { create } from "zustand";

export const useHeaderHeightStore = create((set) => ({
  header2Height: 0,
  mapHeight: 0,
  setHeader2Height: (height) => set({ header2Height: height }),
  setMapHeight: (innerHeight) =>
    set((state) => {
      // make sure mapHeight not less than 0
      const newMapHeight = Math.max(innerHeight - state.header2Height, 0);
      return { mapHeight: newMapHeight };
    }),
}));
