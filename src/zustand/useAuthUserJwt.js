import { create } from "zustand";

const useAuthUserJwtStore = create((set) => ({
  jwt: JSON.parse(localStorage.getItem("auth-user-jwt")) || null,
  loginSetJwt: (jwt) => {
    localStorage.setItem("auth-user-jwt", JSON.stringify(jwt));
    set({ jwt });
  },
  logoutSetJwt: () => {
    localStorage.removeItem("auth-user-jwt");
    set({ jwt: null });
  },
}));

export default useAuthUserJwtStore;
