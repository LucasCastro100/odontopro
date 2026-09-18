import { NextRequest, NextResponse } from "next/server";
import auth from "./lib/getSession";

export async function proxy(request: NextRequest){
    const session = await auth()
    const isOnPainel = request.nextUrl.pathname.startsWith("/dashboard")

    if(!session && isOnPainel){
        return Response.redirect(new URL("/", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*"]
}