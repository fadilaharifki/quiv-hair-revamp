import { createClientComponentClient } from "@/lib/supabase-client";

interface UseGoogleLoginOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export function useGoogleLogin(options?: UseGoogleLoginOptions) {
  const supabase = createClientComponentClient();

  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/api/auth/callback`,
          queryParams: {
            access_type: "offline",
            prompt: "select_account",
          },
        },
      });

      if (error) {
        if (options?.onError) options.onError(error);
        console.error("Google Auth Error:", error.message);
        return;
      }

      if (data && options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (err) {
      if (options?.onError) options.onError(err);
      console.error("Unexpected Error:", err);
    }
  };

  return { handleGoogleLogin };
}
