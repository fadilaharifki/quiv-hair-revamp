import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductInterface } from "@/types/product";

interface CartItem extends ProductInterface {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  currentCurrency: "IDR" | "USD";
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
        set((state) => {
          // Cari apakah produk sudah ada di keranjang
          const existingItemIndex = state.items.findIndex(
            (item) => item.id === product.id,
          );

          if (existingItemIndex > -1) {
            // Jika ada, update quantity-nya
            const newItems = [...state.items];
            newItems[existingItemIndex] = {
              ...newItems[existingItemIndex],
              quantity: newItems[existingItemIndex].quantity + 1,
            };
            return { items: newItems };
          }

          // Jika belum ada, tambahkan sebagai produk baru tanpa menghapus yang lama
          return {
            items: [
              ...state.items,
              {
                ...product,
                quantity: 1,
              },
            ],
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, delta) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(0, item.quantity + delta) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      setItemQuantity: (id, amount) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(0, amount) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        }));
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
