import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ToggleStore {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  hasHydrated: boolean;
  setHasHydrated: (val: boolean) => void;
}

export const useToggleStore = create<ToggleStore>()(
  persist(
    (set) => ({
      isOpen: true,
      setIsOpen: (val) => set({ isOpen: val }),
      hasHydrated: false,
      setHasHydrated: (val) => {
        set({ hasHydrated: val });
      },
    }),
    {
      name: "isOpen-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
