"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useCartStore } from "@/stores/useCartStore";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useRegionStore } from "@/stores/useRegionStore";
import { QuantityController } from "./quantity-controller";
import RegionSwitcher from "./RegionSwitcher";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const CartDrawer = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const router = useRouter();
  const { items, removeItem, updateQuantity, setItemQuantity, getTotalPrice } =
    useCartStore();

  const { currency } = useRegionStore();

  const totalPrice = getTotalPrice();

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* OVERLAY */}
        <Dialog.Overlay className="fixed inset-0 bg-clinical-gray-dark/40 backdrop-blur-sm z-[200] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in" />

        {/* CONTENT */}
        <Dialog.Content className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[201] flex flex-col focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-500">
          {/* HEADER */}
          <div className="p-6 border-b border-clinical-border flex items-center justify-between bg-clinical-gray-light/20">
            <div className="flex items-center gap-3">
              <ShoppingBag size={18} className="text-clinical-blue" />
              <Dialog.Title className="text-xs font-semibold uppercase text-clinical-gray-dark">
                Order Manifest{" "}
                <span className="text-clinical-blue">[{items.length}]</span>
              </Dialog.Title>
            </div>
            <RegionSwitcher
              variant="sidebar"
              className="w-42 justify-between"
            />
            <Dialog.Close className="p-2 hover:bg-clinical-blue/5 text-clinical-gray-medium hover:text-clinical-blue transition-colors">
              <X size={20} />
            </Dialog.Close>
          </div>

          {/* ITEM LIST */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-30">
                <ShoppingBag size={48} strokeWidth={1} />
                <p className="text-[10px] uppercase font-bold tracking-widest text-center">
                  Manifest Empty <br /> No Assets Detected
                </p>
              </div>
            ) : (
              items.map((item) => {
                // Cari harga spesifik untuk currency yang sedang aktif
                const activePrice =
                  item.pricing?.find((p) => p.currency === currency)?.value ||
                  0;

                return (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative h-20 w-20 flex-shrink-0 bg-clinical-gray-light/30 border border-clinical-border overflow-hidden">
                      <Image
                        src={item.thumbnail || item.gallery?.[0] || ""}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-tight text-clinical-gray-dark">
                            {item.name} - {item.type}
                          </h4>
                          <p className="text-[10px] font-mono font-bold text-clinical-blue">
                            {formatCurrency(activePrice, currency)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-clinical-gray-medium hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      {/* Quantity Controller */}
                      <div className="mt-2">
                        <QuantityController
                          size="sm"
                          quantity={item.quantity}
                          onIncrease={() => updateQuantity(item.id, 1)}
                          onDecrease={() => updateQuantity(item.id, -1)}
                          onChange={(val) => setItemQuantity(item.id, val)}
                          className="h-8 max-w-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* FOOTER / CHECKOUT */}
          {items.length > 0 && (
            <div className="p-6 bg-clinical-gray-light/30 border-t border-clinical-border space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold text-clinical-gray-medium uppercase tracking-widest">
                  Total Valuation:
                </span>
                <span className="text-2xl font-semibold text-clinical-gray-dark font-mono">
                  {formatCurrency(totalPrice, currency)}
                </span>
              </div>

              <Button
                onClick={() => {
                  router.push("/checkout");
                  onOpenChange(false);
                }}
                className="w-full bg-clinical-blue hover:bg-clinical-gray-dark text-white py-5 text-[11px] font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-3 transition-all group"
              >
                Checkout
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>

              <div className="flex items-center justify-center gap-2 py-2">
                <div className="w-1 h-1 bg-clinical-success rounded-full animate-pulse" />
                <span className="text-[8px] font-bold text-clinical-gray-medium uppercase tracking-[0.2em]">
                  Terminal Secure Encrypted
                </span>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
