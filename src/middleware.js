import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // const currentCookie = request.cookies.get("token");
  // console.log(currentCookie.value);

  const dummyUserData = {
    role: "admin",
    email: "test@admin.com",
  };
  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData.role === "admin";
  if (isServicesPage && !isAdmin)
    return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}
