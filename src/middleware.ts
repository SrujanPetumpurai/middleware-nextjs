import { redirect } from "next/dist/server/api-utils";
import { NextRequest,NextResponse } from "next/server";

let responsecount = 0;
export function middleware(req:NextRequest){
    if(req.nextUrl.pathname.startsWith('/user')){
        return NextResponse.redirect(new URL('/signin',req.url))
    }
    responsecount++
    console.log("No. of requests="+responsecount);
   return NextResponse.next();
}