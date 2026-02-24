import { errorResponse, successResponse } from "@/lib/api-response";
import { createClientCookies } from "@/lib/supabase-server";

export async function GET() {
  const supabase = await createClientCookies();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return errorResponse("Not authenticated", 401);
  }

  const filteredUser = {
    id: user.id,
    email: user.email,
    full_name: user.user_metadata?.full_name || user.user_metadata?.name,
    avatar_url: user.user_metadata?.avatar_url || user.user_metadata?.picture,
    provider: user.app_metadata?.provider,
  };

  return successResponse({
    user: filteredUser,
  });
}
