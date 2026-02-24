"use client";

import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useLogoutUser() {
  const clearStore = useAuthStore((state) => state.logout);
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      // Menembak API logout yang baru kita buat
      const { data } = await api.post("/auth/logout");
      return data;
    },
    onSuccess: (data) => {
      clearStore();

      queryClient.clear();

      toast.success("Logged Out", {
        description: data.message || "You have been safely logged out.",
      });

      router.push("/");
      router.refresh();
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || "Failed to logout. Please try again.";

      toast.error("Logout Failed", {
        description: errorMessage,
      });
    },
  });
}
