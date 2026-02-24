import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RegionState {
  region: "ID" | "INT";
  setRegion: (region: "ID" | "INT") => void;
}

export const useRegionStore = create<RegionState>()(
  persist(
    (set) => ({
      region: "ID",
      setRegion: (region) => set({ region }),
    }),
    { name: "quiv-region-storage" },
  ),
);
