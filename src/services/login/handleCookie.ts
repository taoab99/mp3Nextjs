"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function handleCookie(clear?: boolean, accessToken?: string) {
  if (clear) {
    cookies().delete("accessPrivateRoute");
    redirect("/");
  } else {
    cookies().set("accessPrivateRoute", "true", {
      path: "/",
      maxAge: 1800,
      httpOnly: true,
      secure: false,
    });
    accessToken &&
      cookies().set("accessToken", accessToken, {
        path: "/",
        maxAge: 1800,
        httpOnly: true,
        secure: false,
      });
  }
}

export default handleCookie;
