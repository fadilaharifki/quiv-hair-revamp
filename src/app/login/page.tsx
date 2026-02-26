"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Loader2,
  Mail,
  Lock,
  ShieldCheck,
  Cpu,
  ChevronRight,
} from "lucide-react";
import InputComponent from "@/components/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GoogleLoginButton from "@/components/GoogleLoginButton";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onEmailLogin = async (data: LoginFormValues) => {
    setLoading(true);
    // Logic Email Login disini
  };

  return (
    <div className="relative min-h-screen py-24 w-full flex items-center justify-center overflow-hidden bg-clinical-white">
      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner_1.mp4" type="video/mp4" />
        </video>
        {/* Clinical Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-clinical-white/80 via-clinical-white/40 to-clinical-white" />
      </div>

      {/* --- LOGIN CARD --- */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/80 border border-clinical-border p-10 rounded-none shadow-[0_30px_60px_rgba(0,0,0,0.05)] backdrop-blur-md relative">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-clinical-blue" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-clinical-blue" />

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-clinical-blue/5 border border-clinical-blue/20 mb-6">
              <Cpu className="w-6 h-6 text-clinical-blue" />
            </div>
            <h1 className="text-5xl font-semibold tracking-tighter text-clinical-gray-dark uppercase leading-none">
              QUIV<span className="text-clinical-blue">.</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              <p className="text-clinical-gray-medium text-[9px] tracking-[0.5em] uppercase font-bold border-y border-clinical-border py-1">
                Security_Access_Protocol
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Google Login */}
            <GoogleLoginButton disabled={loading} />

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-clinical-border"></div>
              </div>
              <div className="relative flex justify-center text-[8px] uppercase tracking-[0.4em]">
                <span className="bg-white px-4 text-clinical-gray-medium font-bold">
                  OR_MANUAL_ENTRY
                </span>
              </div>
            </div>

            {/* Manual Form */}
            <form onSubmit={handleSubmit(onEmailLogin)} className="space-y-6">
              <div className="space-y-4">
                <InputComponent
                  name="email"
                  label="Email"
                  control={control}
                  placeholder="name@example.com"
                  icon={<Mail className="w-4 h-4" />}
                  classNameInput="bg-clinical-gray-light/50 border-clinical-border rounded-none focus:ring-clinical-blue"
                />

                <InputComponent
                  name="password"
                  label="Password"
                  type="password"
                  control={control}
                  placeholder="••••••••"
                  icon={<Lock className="w-4 h-4" />}
                  classNameInput="bg-clinical-gray-light/50 border-clinical-border rounded-none focus:ring-clinical-blue"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-7 bg-clinical-gray-dark text-white font-bold rounded-none uppercase text-[10px] tracking-[0.3em] hover:bg-clinical-blue transition-all duration-300 flex justify-center items-center gap-2 group"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Login
                      <ChevronRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-10 pt-8 border-t border-clinical-border">
              <p className="text-center text-clinical-gray-medium text-[9px] uppercase tracking-widest font-bold">
                No session archive?{" "}
                <Link
                  href="/register"
                  className="text-clinical-blue hover:text-clinical-gray-dark transition-colors ml-1 underline underline-offset-8"
                >
                  Create_Account
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* System Info Footer */}
        <div className="mt-6 flex justify-between text-[7px] font-mono text-clinical-gray-medium/50 uppercase tracking-[0.2em] px-2">
          <span>Encrypted_AES-256</span>
          <span>Ref_ID: {new Date().getFullYear()}-01</span>
        </div>
      </div>

      {/* Aesthetic Top Indicator */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-clinical-blue/20 z-20">
        <div className="h-full bg-clinical-blue w-1/3 animate-[loading_3s_infinite_linear]" />
      </div>
    </div>
  );
}
