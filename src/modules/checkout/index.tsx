"use client";

import { useCartStore } from "@/stores/useCartStore";
import { useRegionStore } from "@/stores/useRegionStore";
import { formatCurrency } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  ChevronRight,
  ArrowRight,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Menggunakan Button UI kamu

const checkoutSchema = z.object({
  email: z.string().email("Invalid Protocol Email"),
  firstName: z.string().min(2, "Name Required"),
  lastName: z.string().min(2, "Name Required"),
  address: z.string().min(10, "Address Insufficient Detail"),
  city: z.string().min(2, "City Required"),
  postalCode: z.string().min(5, "Invalid Zip Format"),
  phone: z.string().min(10, "Phone Link Required"),
});

type CheckoutValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPageModules() {
  const { items, getTotalPrice } = useCartStore();
  const { currency } = useRegionStore();
  const totalPrice = getTotalPrice();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutValues) => {
    // Simulasi delay proses
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Order_Confirmed:", data);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER STATUS */}
        <div className="flex items-center gap-4 mb-16 opacity-40">
          <span className="text-[10px] font-semibold tracking-widest text-clinical-blue">
            Cart Session
          </span>
          <ChevronRight size={12} />
          <span className="text-[10px] font-semibold tracking-widest text-clinical-gray-dark border-b-2 border-clinical-blue pb-1">
            Information Protocol
          </span>
          <ChevronRight size={12} />
          <span className="text-[10px] font-semibold tracking-widest">
            Verification
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT COLUMN: FORM */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              {/* CONTACT */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-1 bg-clinical-blue" />
                  <h2 className="text-[11px] font-semibold tracking-[0.2em] text-clinical-gray-dark">
                    Contact Registry
                  </h2>
                </div>
                <div className="space-y-2">
                  <input
                    {...register("email")}
                    placeholder="IDENTIFICATION EMAIL"
                    className="w-full bg-clinical-gray-light/20 border border-clinical-border p-4 text-[11px] font-mono outline-none focus:border-clinical-blue transition-all"
                  />
                  {errors.email && (
                    <p className="text-[9px] text-red-500 font-bold tracking-tight">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* SHIPPING */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-1 bg-clinical-blue" />
                  <h2 className="text-[11px] font-semibold tracking-[0.2em] text-clinical-gray-dark">
                    Delivery Coordinates
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    {...register("firstName")}
                    placeholder="FIRST NAME"
                    className="bg-clinical-gray-light/20 border border-clinical-border p-4 text-[11px] font-mono outline-none focus:border-clinical-blue w-full"
                  />
                  <input
                    {...register("lastName")}
                    placeholder="LAST NAME"
                    className="bg-clinical-gray-light/20 border border-clinical-border p-4 text-[11px] font-mono outline-none focus:border-clinical-blue w-full"
                  />
                </div>
                <input
                  {...register("address")}
                  placeholder="STREET ADDRESS LINE 1"
                  className="w-full bg-clinical-gray-light/20 border border-clinical-border p-4 text-[11px] font-mono outline-none focus:border-clinical-blue"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    {...register("city")}
                    placeholder="CITY"
                    className="bg-clinical-gray-light/20 border border-clinical-border p-4 text-[11px] font-mono outline-none focus:border-clinical-blue w-full"
                  />
                  <input
                    {...register("postalCode")}
                    placeholder="POSTAL CODE"
                    className="bg-clinical-gray-light/20 border border-clinical-border p-4 text-[11px] font-mono outline-none focus:border-clinical-blue w-full"
                  />
                </div>
                <input
                  {...register("phone")}
                  placeholder="COMMUNICATION LINK (PHONE)"
                  className="w-full bg-clinical-gray-light/20 border border-clinical-border p-4 text-[11px] font-mono outline-none focus:border-clinical-blue"
                />
              </div>

              {/* ACTION BUTTON MENGGUNAKAN UI BUTTON */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-clinical-blue hover:bg-clinical-gray-dark text-white rounded-none text-[11px] font-semibold tracking-[0.4em] shadow-xl group transition-all"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Synthesizing Order...</span>
                ) : (
                  <div className="flex items-center gap-3">
                    Confirm Manifest Submission
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* RIGHT COLUMN: SUMMARY */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 border border-clinical-border p-8 bg-clinical-gray-light/10">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-clinical-border">
                <h3 className="text-[10px] font-semibold tracking-[0.2em]">
                  Live Valuation
                </h3>
                <span className="text-[10px] font-mono text-clinical-blue font-bold tracking-tighter">
                  [{items.length} ITEMS]
                </span>
              </div>

              <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                {items.map((item) => {
                  const itemPrice =
                    item.pricing?.find((p) => p.currency === currency)?.value ||
                    0;
                  return (
                    <div key={item.id} className="flex gap-4">
                      <div className="h-16 w-16 bg-white border border-clinical-border p-2 flex-shrink-0 relative">
                        <Image
                          src={item.thumbnail}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                        />
                        <span className="absolute -top-2 -right-2 bg-clinical-blue text-white text-[8px] font-bold h-5 w-5 flex items-center justify-center border-2 border-white">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-[10px] font-semibold tracking-tight">
                          {item.name}
                        </h4>
                        <p className="text-[9px] font-mono text-clinical-blue mt-1">
                          {formatCurrency(itemPrice, currency)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3 pt-6 border-t border-clinical-border">
                <div className="flex justify-between text-[10px] font-bold tracking-widest opacity-50">
                  <span>Gross Value</span>
                  <span>{formatCurrency(totalPrice, currency)}</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold tracking-widest opacity-50">
                  <span>Logistics Fee</span>
                  <span className="text-clinical-success font-semibold tracking-tighter">
                    CALCULATED NEXT
                  </span>
                </div>
                <div className="flex justify-between items-end pt-6">
                  <span className="text-xs font-semibold tracking-[0.3em]">
                    Final Total
                  </span>
                  <span className="text-2xl font-semibold font-mono tracking-tighter">
                    {formatCurrency(totalPrice, currency)}
                  </span>
                </div>
              </div>

              {/* SECURITY TERMINAL FOOTER */}
              <div className="mt-10 flex flex-col gap-4">
                <div className="flex items-center gap-3 p-4 bg-clinical-success/5 border border-clinical-success/20">
                  <Lock size={14} className="text-clinical-success" />
                  <span className="text-[8px] font-bold tracking-widest text-clinical-success">
                    Terminal Secure SSL Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
