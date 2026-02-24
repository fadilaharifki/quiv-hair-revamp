"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { useLogoutUser } from "@/hooks/api/useLogoutUser";
import { Button } from "@/components/ui/button";
import { LogOut, User, Mail, ShieldCheck } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function AccountPage() {
  const { user } = useAuthStore();
  const { mutate: logoutTrigger, isPending } = useLogoutUser();

  const handleLogout = () => {
    logoutTrigger();
  };

  return (
    <div className="min-h-screen bg-navy-blue pt-32 pb-20 px-6">
      <div className="max-w-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-[0.4em] mb-2">
            My Account
          </h1>
          <div className="h-1 w-20 bg-gold-deep mx-auto rounded-full" />
        </div>

        {/* Profile Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold-deep/50 p-1">
                <img
                  src={user?.avatar_url || "https://avatar.vercel.sh/guest"}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-gold-deep p-1.5 rounded-full border-2 border-navy-blue">
                <ShieldCheck className="w-3 h-3 text-navy-blue" />
              </div>
            </div>

            {/* User Info */}
            <div className="w-full space-y-4">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <User className="w-5 h-5 text-gold-deep" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
                    Full Name
                  </span>
                  <span className="text-white font-medium">
                    {user?.full_name || "Guest User"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <Mail className="w-5 h-5 text-gold-deep" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
                    Email Address
                  </span>
                  <span className="text-white font-medium">
                    {user?.email || "-"}
                  </span>
                </div>
              </div>
            </div>

            {/* Logout Action */}
            <div className="w-full mt-10">
              <Button
                onClick={handleLogout}
                disabled={isPending}
                className={twMerge(
                  "w-full py-7 rounded-2xl bg-transparent border-2 border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-500 group",
                  isPending && "opacity-50 cursor-not-allowed",
                )}
              >
                <LogOut
                  className={twMerge(
                    "w-5 h-5 mr-3 transition-transform group-hover:translate-x-1",
                    isPending && "animate-spin",
                  )}
                />
                <span className="text-xs font-black uppercase tracking-[0.3em]">
                  {isPending ? "Processing..." : "Secure Logout"}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
