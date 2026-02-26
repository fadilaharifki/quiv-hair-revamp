import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RegionState {
  region: "ID" | "INT";
  currency: "IDR" | "USD";
  setRegion: (region: "ID" | "INT") => void;
}

export const useRegionStore = create<RegionState>()(
  persist(
    (set) => ({
      region: "ID",
      currency: "IDR",
      setRegion: (region) =>
        set({
          region,

          currency: region === "INT" ? "USD" : "IDR",
        }),
    }),
    {
      name: "quiv-region-storage",
    },
  ),
);
