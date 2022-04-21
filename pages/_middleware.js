import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // token will exists if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const url = req.nextUrl.clone();

  console.log("JWT SECRET " + process.env.JWT_SECRET);

  // capture the next url
  const { pathname } = req.nextUrl;

  return NextResponse.next();

  // if token exists and user is on login redirect to homepage
  console.log(pathname);
  if (token) {
    console.log("************TOKEN EXISTS");
    return NextResponse.redirect(new URL("/", req.url));
  }

  // allow the request to go through
  // 1.) Auth related meaning they are trying to login
  // 2.) if the token exists
  if (pathname.includes("/api/auth") || token) {
    //console.log(NextResponse.next());
    console.log("******************allow");
    console.log(new URL("/", req.url));
    return NextResponse.next();
  }

  // redirect to login page if token does not exist
  if (!token && pathname != "/login") {
    // new URL creates a base url i.e http://localhost:3000/
    // you can then pass the relative url i.e '/login'
    // the url will be http://localhost:3000/login
    console.log("******************DATA");
    console.log(new URL("/login", req.url));
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// middleware
