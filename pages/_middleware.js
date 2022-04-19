import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // token will exists if user is logged in
    const token = await getToken({req, secret:process.env.JWT_SECRET});

    // capture the next url
    const {pathname} = req.nextUrl;

    
}

// middleware