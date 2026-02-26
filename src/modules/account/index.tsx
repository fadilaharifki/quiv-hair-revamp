/* eslint-disable @next/next/no-img-element */
("use client");

import { useAuthStore } from "@/stores/useAuthStore";
import { useLogoutUser } from "@/hooks/api/useLogoutUser";
import { Button } from "@/components/ui/button";
import { LogOut, User, Mail, Fingerprint, Database } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function AccountPageModules() {
  const { user } = useAuthStore();
  const { mutate: logoutTrigger, isPending } = useLogoutUser();

  const handleLogout = () => {
    logoutTrigger();
  };

  return (
    <div className="min-h-screen bg-clinical-white pt-10 pb-20 px-6 relative overflow-hidden">
      {/* Decorative Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0047AB 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-xl mx-auto relative z-10">
        {/* Header Section: Clinical Style */}
        <div className="mb-12 border-l-4 border-clinical-blue pl-6">
          <div className="flex items-center gap-2 mb-1">
            <Database size={12} className="text-clinical-blue" />
            <span className="text-[10px] font-mono text-clinical-gray-medium uppercase tracking-[0.3em]">
              System_Registry_v2.0
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-clinical-gray-dark uppercase tracking-tighter">
            User Profile<span className="text-clinical-blue">.</span>
          </h1>
        </div>

        {/* Profile Terminal Card */}
        <div className="bg-white border border-clinical-border p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative">
          {/* Corner Accents */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-clinical-blue" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-clinical-blue" />

          <div className="flex flex-col items-center">
            {/* Avatar Section: Industrial Square */}
            <div className="relative mb-10">
              <div className="w-28 h-28 bg-clinical-gray-light border border-clinical-border p-1 overflow-hidden">
                <img
                  src={user?.avatar_url || "https://avatar.vercel.sh/guest"}
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-clinical-blue p-2 border-2 border-white">
                <Fingerprint className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* User Info Fields: Parameter Style */}
            <div className="w-full space-y-6">
              <div className="group transition-all">
                <label className="text-[9px] font-bold text-clinical-blue uppercase tracking-[0.4em] mb-2 block">
                  Name
                </label>
                <div className="flex items-center gap-4 bg-clinical-gray-light/50 p-5 border border-clinical-border group-hover:border-clinical-blue/30 transition-colors">
                  <User className="w-4 h-4 text-clinical-gray-medium" />
                  <span className="text-clinical-gray-dark font-bold text-sm uppercase tracking-wider">
                    {user?.full_name || "Guest_User"}
                  </span>
                </div>
              </div>

              <div className="group transition-all">
                <label className="text-[9px] font-bold text-clinical-blue uppercase tracking-[0.4em] mb-2 block">
                  Email
                </label>
                <div className="flex items-center gap-4 bg-clinical-gray-light/50 p-5 border border-clinical-border group-hover:border-clinical-blue/30 transition-colors">
                  <Mail className="w-4 h-4 text-clinical-gray-medium" />
                  <span className="text-clinical-gray-dark font-mono text-sm tracking-tight">
                    {user?.email || "NO_DATA_LINKED"}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Zone */}
            <div className="w-full mt-12 pt-8 border-t border-clinical-border">
              <Button
                onClick={handleLogout}
                disabled={isPending}
                variant="outline"
                className={twMerge(
                  "w-full py-8 rounded-none border-red-200 text-red-600 hover:bg-red-50 hover:border-red-500 transition-all duration-300 group flex items-center justify-center gap-3",
                  isPending && "opacity-50 cursor-not-allowed",
                )}
              >
                <LogOut
                  className={twMerge(
                    "w-4 h-4 transition-transform group-hover:-translate-x-1",
                    isPending && "animate-spin",
                  )}
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                  Logout
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
