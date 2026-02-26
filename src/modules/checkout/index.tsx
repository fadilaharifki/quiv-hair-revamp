"use client";

import { useCartStore } from "@/stores/useCartStore";
import { useRegionStore } from "@/stores/useRegionStore";
import { formatCurrency } from "@/lib/utils";
import { useForm, Controller } from "react-hook-form";
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
import { Button } from "@/components/ui/button";

// Import Phone Input & Styles
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const checkoutSchema = z.object({
  email: z.string().email("Invalid Protocol Email"),
  firstName: z.string().min(2, "Name Required"),
  lastName: z.string().min(2, "Name Required"),
  address: z.string().min(10, "Address Insufficient Detail"),
  city: z.string().min(2, "City Required"),
  postalCode: z.string().min(5, "Invalid Zip Format"),
  // Validasi khusus phone number menggunakan helper dari package
  phone: z.string().refine((val) => isValidPhoneNumber(val || ""), {
    message: "Invalid International Format",
  }),
});

type CheckoutValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPageModules() {
  const { items, getTotalPrice } = useCartStore();
  const { currency, region } = useRegionStore();
  const totalPrice = getTotalPrice();

  const {
    register,
    handleSubmit,
    control, // Dibutuhkan untuk Controller PhoneInput
    formState: { errors, isSubmitting },
  } = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = async (data: CheckoutValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Order_Confirmed_Payload:", data);
    // Di sini kamu bisa memanggil successResponse jika integrasi backend sudah siap
  };

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-10 md:pb-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER STATUS */}
        <div className="flex items-center gap-2 md:gap-4 mb-8 md:mb-16 opacity-40 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar font-bold">
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-clinical-blue">
            Cart Session
          </span>
          <ChevronRight size={10} className="flex-shrink-0" />
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-clinical-gray-dark border-b-2 border-clinical-blue pb-1">
            Information Protocol
          </span>
          <ChevronRight size={10} className="flex-shrink-0" />
          <span className="text-[10px] md:text-xs uppercase tracking-widest">
            Verification
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* RIGHT COLUMN: ORDER SUMMARY (Top on Mobile) */}
          <div className="lg:col-span-5 lg:order-2">
            <div className="lg:sticky lg:top-32 border border-clinical-border p-5 md:p-8 bg-clinical-gray-light/10">
              <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-clinical-border">
                <h3 className="text-xs font-bold uppercase tracking-widest">
                  Order Summary
                </h3>
                <span className="text-xs font-mono text-clinical-blue font-bold">
                  [{items.length} ITEMS]
                </span>
              </div>

              <div className="space-y-4 mb-6 max-h-[35vh] lg:max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => {
                  const itemPrice =
                    item.pricing?.find((p) => p.currency === currency)?.value ||
                    0;
                  return (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="relative h-14 w-14 md:h-16 md:w-16 bg-white border border-clinical-border p-2 flex-shrink-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                        />
                        <span className="absolute -top-1 -right-1 bg-clinical-blue text-white text-[8px] font-bold h-5 w-5 flex items-center justify-center border-2 border-white z-10">
                          {item.quantity}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[10px] md:text-xs font-bold uppercase truncate text-clinical-gray-dark">
                          {item.name}
                        </h4>
                        <p className="text-[10px] font-mono font-bold text-clinical-blue mt-0.5">
                          {formatCurrency(itemPrice, currency)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3 pt-6 border-t border-clinical-border">
                <div className="flex justify-between text-[10px] font-bold uppercase opacity-50 tracking-widest">
                  <span>Gross Value</span>
                  <span>{formatCurrency(totalPrice, currency)}</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase opacity-50 tracking-widest">
                  <span>Logistics</span>
                  <span className="text-clinical-success">CALCULATED NEXT</span>
                </div>
                <div className="flex justify-between items-end pt-4 md:pt-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Final Total
                  </span>
                  <span className="text-xl md:text-2xl font-bold font-mono tracking-tighter text-clinical-gray-dark">
                    {formatCurrency(totalPrice, currency)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN: FORM */}
          <div className="lg:col-span-7 lg:order-1">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-10 md:space-y-12"
            >
              {/* CONTACT SECTION */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-1 bg-clinical-blue" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-clinical-gray-dark">
                    Contact Registry
                  </h2>
                </div>
                <div className="space-y-2">
                  <input
                    {...register("email")}
                    placeholder="IDENTIFICATION EMAIL"
                    className="w-full bg-clinical-gray-light/20 border border-clinical-border p-3 md:p-4 text-xs font-mono outline-none focus:border-clinical-blue transition-all"
                  />
                  {errors.email && (
                    <p className="text-[9px] text-red-500 font-bold uppercase">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* SHIPPING SECTION */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-1 bg-clinical-blue" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-clinical-gray-dark">
                    Delivery Coordinates
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    {...register("firstName")}
                    placeholder="FIRST NAME"
                    className="bg-clinical-gray-light/20 border border-clinical-border p-3 md:p-4 text-xs font-mono outline-none focus:border-clinical-blue"
                  />
                  <input
                    {...register("lastName")}
                    placeholder="LAST NAME"
                    className="bg-clinical-gray-light/20 border border-clinical-border p-3 md:p-4 text-xs font-mono outline-none focus:border-clinical-blue"
                  />
                </div>

                <input
                  {...register("address")}
                  placeholder="STREET ADDRESS"
                  className="w-full bg-clinical-gray-light/20 border border-clinical-border p-3 md:p-4 text-xs font-mono outline-none focus:border-clinical-blue"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    {...register("city")}
                    placeholder="CITY"
                    className="bg-clinical-gray-light/20 border border-clinical-border p-3 md:p-4 text-xs font-mono outline-none focus:border-clinical-blue"
                  />
                  <input
                    {...register("postalCode")}
                    placeholder="POSTAL CODE"
                    className="bg-clinical-gray-light/20 border border-clinical-border p-3 md:p-4 text-xs font-mono outline-none focus:border-clinical-blue"
                  />
                </div>

                {/* PHONE INPUT WITH INTERNATIONAL PACKAGE */}
                <div className="space-y-2">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        placeholder="COMMUNICATION LINK (PHONE)"
                        defaultCountry={region === "ID" ? "ID" : "US"}
                        international
                        withCountryCallingCode
                        className="clinical-phone-input"
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="text-[9px] text-red-500 font-bold uppercase">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 md:h-16 bg-clinical-blue hover:bg-clinical-gray-dark text-white rounded-none text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] shadow-xl group"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse tracking-normal">
                      Processing_Order...
                    </span>
                  ) : (
                    <div className="flex items-center gap-3">
                      Confirm Manifest Submission
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  )}
                </Button>

                <div className="mt-8 flex items-center justify-center gap-4 opacity-20 select-none">
                  <Lock size={12} />
                  <span className="text-[8px] font-bold uppercase tracking-[0.3em]">
                    Secure Terminal SSL Active
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
