import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductInterface } from "@/types/product";

interface CartItem extends ProductInterface {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  currentCurrency: "IDR" | "USD"; // Merekam mata uang yang dipilih
  _hasHydrated: boolean;

  // Actions
  addItem: (product: ProductInterface) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  setItemQuantity: (id: string, amount: number) => void;
  clearCart: () => void;
  setHasHydrated: (state: boolean) => void;
  updateCurrencyRecord: (currency: "IDR" | "USD") => void;

  // Getters
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      currentCurrency: "IDR",
      _hasHydrated: false,

      setHasHydrated: (state) => set({ _hasHydrated: state }),

      updateCurrencyRecord: (currency) => set({ currentCurrency: currency }),

      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.id === product.id,
        );

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });
        } else {
          set({
            items: [
              ...currentItems,
              {
                ...product,
                quantity: 1,
              },
            ],
          });
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, delta) => {
        set({
          items: get()
            .items.map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(0, item.quantity + delta) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        });
      },

      setItemQuantity: (id, amount) => {
        set({
          items: get()
            .items.map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(0, amount) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },

      getTotalPrice: () => {
        const activeCurrency = get().currentCurrency;
        return get().items.reduce((acc, item) => {
          const priceObj = item.pricing?.find(
            (p) => p.currency === activeCurrency,
          );
          const priceValue = priceObj ? priceObj.value : 0;
          return acc + priceValue * item.quantity;
        }, 0);
      },
    }),
    {
      name: "quiv-cart-session",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
