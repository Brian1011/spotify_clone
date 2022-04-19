import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // token will exists if user is logged in
    const token = await getToken({req, secret:process.env.JWT_SECRET});

    // capture the next url
    const {pathname} = req.nextUrl;

    // allow the request to go through 
    // 1.) Auth related meaning they are trying to login
    // 2.) if the token exists
    if (pathname.includes('/api/auth') || token ){
        return NextResponse.next();
    }

    // redirect to login page if token does not exist
    if (!token && pathname !== '/login') {
        return NextResponse.redirect('http://localhost:3000/login');
    }
}

// middleware