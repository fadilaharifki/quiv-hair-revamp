"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, Lock, ShieldCheck } from "lucide-react";
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
    <div className="relative min-h-screen py-32 w-full flex items-center justify-center overflow-hidden bg-black">
      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner_1.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradient untuk memastikan form terbaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-navy-blue/40 to-black/80" />
      </div>

      {/* --- LOGIN CARD --- */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-deep/10 border border-gold-deep/20 mb-4">
              <ShieldCheck className="w-6 h-6 text-gold-deep" />
            </div>
            <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none">
              QUIV
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="h-[1px] w-8 bg-gold-deep/30"></span>
              <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold">
                Access Portal
              </p>
              <span className="h-[1px] w-8 bg-gold-deep/30"></span>
            </div>
          </div>

          <div className="space-y-8">
            {/* Google Login - Dibuat lebih subtle tapi elegan */}
            <GoogleLoginButton disabled={loading} />

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-[8px] uppercase tracking-[0.5em]">
                <span className="bg-transparent px-4 text-white/20 font-bold italic">
                  Security Protocol
                </span>
              </div>
            </div>

            {/* Manual Form */}
            <form onSubmit={handleSubmit(onEmailLogin)} className="space-y-5">
              <InputComponent
                name="email"
                label="Email"
                control={control}
                placeholder="name@example.com"
                icon={<Mail className="w-4 h-4" />}
                classNameInput="bg-white/[0.03] border-white/10"
              />

              <InputComponent
                name="password"
                label="Password"
                type="password"
                control={control}
                placeholder="••••••••"
                icon={<Lock className="w-4 h-4" />}
                classNameInput="bg-white/[0.03] border-white/10"
              />

              <div className="pt-5">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gold-deep text-black font-black rounded-xl uppercase text-[11px] tracking-[0.3em] hover:bg-gold-light hover:shadow-[0_0_30px_rgba(184,134,11,0.4)] transition-all duration-500 active:scale-[0.98] disabled:opacity-50 flex justify-center items-center mt-4"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-center text-white/30 text-[10px] uppercase tracking-widest font-medium">
                Not have account?{" "}
                <Link
                  href="/register"
                  className="text-white hover:text-gold-deep font-black transition-colors ml-1 underline underline-offset-4"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Border Glow */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-deep/50 to-transparent shadow-[0_0_15px_rgba(184,134,11,0.5)] z-20" />
    </div>
  );
}
