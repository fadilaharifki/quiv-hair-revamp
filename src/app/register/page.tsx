"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Loader2, Mail, Lock, User, ArrowRight } from "lucide-react";

import InputComponent from "@/components/input";
import { Button } from "@/components/ui/button";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { useRegisterUser } from "@/hooks/api/useRegisterUser";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    fullName: z.string().min(3, { message: "Please enter your full name" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();

  const { mutate, isPending: loading } = useRegisterUser({
    onSuccess: () => {
      router.push("/login");
    },
  });

  const { control, handleSubmit } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onRegister = async (data: RegisterFormValues) => {
    mutate({
      full_name: data.fullName,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-20">
      {/* --- BACKGROUND VIDEO SECTION --- */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-black/80" />
      </div>

      {/* --- REGISTER CARD --- */}
      <div className="relative z-10 w-full max-w-[460px] px-6">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-3xl shadow-2xl md:p-10">
          {/* Brand Header */}
          <div className="mb-8 text-left">
            <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase">
              Quiv<span className="text-gold-deep italic">.</span>
            </h1>
            <h2 className="mt-4 text-xl font-bold text-white">
              Create Account
            </h2>
            <p className="mt-1 text-xs text-white/40">
              Join us to start your premium experience.
            </p>
          </div>

          <div className="space-y-6">
            {/* Google Social Login */}
            <GoogleLoginButton disabled={loading} />

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full border-t border-white/5"></div>
              <span className="relative bg-transparent px-4 text-[8px] font-bold italic uppercase tracking-[0.5em] text-white/20">
                Security Protocol
              </span>
            </div>

            {/* Manual Registration Form */}
            <form onSubmit={handleSubmit(onRegister)} className="space-y-4">
              <InputComponent
                name="fullName"
                label="Full Name"
                control={control}
                placeholder="e.g. John Doe"
                icon={<User className="h-4 w-4" />}
              />

              <InputComponent
                name="email"
                label="Email Address"
                control={control}
                placeholder="name@example.com"
                icon={<Mail className="h-4 w-4" />}
              />
              <InputComponent
                name="password"
                label="Password"
                type="password"
                control={control}
                placeholder="••••••••"
                icon={<Lock className="h-4 w-4" />}
              />
              <InputComponent
                name="confirmPassword"
                label="Confirm"
                type="password"
                control={control}
                placeholder="••••••••"
                icon={<Lock className="h-4 w-4" />}
              />
              <div className="pt-5">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 bg-gold-deep text-black font-black rounded-xl uppercase text-[11px] tracking-[0.3em] hover:bg-gold-light hover:shadow-[0_0_30px_rgba(184,134,11,0.4)] transition-all duration-500 active:scale-[0.98] disabled:opacity-50 flex justify-center items-center"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Alternative Sign In */}
            <div className="mt-6 border-t border-white/5 pt-6 text-center">
              <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="ml-1 font-black text-white underline underline-offset-4 transition-colors hover:text-gold-deep"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Policy */}
        <p className="mt-8 px-10 text-center text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/20">
          By creating an account, you agree to our <br />
          <span className="cursor-pointer text-white/40 transition-colors hover:text-white">
            Terms of Service
          </span>{" "}
          &{" "}
          <span className="cursor-pointer text-white/40 transition-colors hover:text-white">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}
