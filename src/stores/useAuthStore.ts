import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  user: any | null;
  setUser: (user: any | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => {
        set({ user: null });
        localStorage.removeItem("quiv-auth-storage");
      },
    }),
    {
      name: "quiv-auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
