import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

const ADMIN_EMAIL = "mohammed2020@gmail.com";

export async function proxy(request: NextRequest) {
  const response = await updateSession(request);

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll() {},
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    if (!user) {
      return redirectWithCookies("/login", request, response);
    }

    const isMainAdmin =
      user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

    const isAdmin =
      user.app_metadata?.role === "admin";

    if (!isMainAdmin && !isAdmin) {
      return redirectWithCookies("/", request, response);
    }
  }

  return response;
}

function redirectWithCookies(
  path: string,
  request: NextRequest,
  response: NextResponse
) {
  const redirectResponse = NextResponse.redirect(
    new URL(path, request.url)
  );

  response.cookies.getAll().forEach((cookie) => {
    redirectResponse.cookies.set(cookie);
  });

  return redirectResponse;
}

export const config = {
  matcher: ["/admin/:path*"],
};