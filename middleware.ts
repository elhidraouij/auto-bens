import { NextResponse, NextRequest } from 'next/server';

import { verifyAuth } from './services/authService';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('auth_token')?.value;

    if (!token) {
        if (req.nextUrl.pathname.startsWith('/admin/dashboard')) return NextResponse.redirect(new URL('/admin/login', req.url));
        if (req.nextUrl.pathname.startsWith('/admin/login')) return NextResponse.next();
    }

    const verifiedToken = await verifyAuth(token!)

    if (!verifiedToken) {
        if (req.nextUrl.pathname.startsWith('/admin/dashboard')) return NextResponse.redirect(new URL('/admin/login', req.url));
        if (req.nextUrl.pathname.startsWith('/admin/login')) return NextResponse.next();
    }

    if (verifiedToken) {
        if (req.nextUrl.pathname.startsWith('/admin/dashboard')) return NextResponse.next();
        if (req.nextUrl.pathname.startsWith('/admin/login')) return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher:['/admin/dashboard', '/admin/login']
}