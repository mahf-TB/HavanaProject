import { NextResponse } from "next/server";

export function middleware(req) {
    const user = ''
    if (!user) {
        return NextResponse.redirect(
            new URL('/user/home', req.url)
        )
    }
    return NextResponse.next();
}
