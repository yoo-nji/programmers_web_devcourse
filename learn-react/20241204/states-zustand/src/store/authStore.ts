import { create } from "zustand";

export const useAuthStore = create<useAuthStoreType>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => {
    set({ user: null, isLoggedIn: false });
  },
}));
