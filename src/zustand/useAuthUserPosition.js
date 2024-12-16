import { create } from "zustand";

const useAuthUserPositionStore = create((set) => ({
  userPosition: JSON.parse(localStorage.getItem("auth-user-position")) || null,
  loginSetUserPosition: (userPosition) => {
    localStorage.setItem("auth-user-position", JSON.stringify(userPosition));
    set({ userPosition });
  },
  logoutSetUserPosition: () => {
    localStorage.removeItem("auth-user-position");
    set({ userPosition: null });
  },
}));

export default useAuthUserPositionStore;
