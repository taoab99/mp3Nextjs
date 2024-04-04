import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const access = request.cookies.get("accessPrivateRoute")?.value;
  if (!access) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: "/quanly",
};
