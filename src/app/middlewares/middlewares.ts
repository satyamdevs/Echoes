import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    
    const isPublicPath = path === "/SignIn" || path === "/SignUp";

    const token = request.cookies.get("token")?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/Home", request.url));
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/SignIn", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/SignIn",
        "/SignUp",
        "/Home",
        "/Profile"
    ]
};