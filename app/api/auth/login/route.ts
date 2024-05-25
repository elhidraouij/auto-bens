// pages/api/login.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie';

import { secret_key } from '@/constants';
import { fetchUser } from '@/repositories/loginRepository';

export const POST = async (
    req: NextRequest,
    res: NextResponse
) => {
    const body = await req.json()

    if (!body) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    const { login, password } = body
    const user = await fetchUser(login)

    if (!user) {
        return new NextResponse(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return new NextResponse(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }

    const token = jwt.sign(
        { userid: user.id, username: user.login },
        secret_key,
        { expiresIn: '1h' }
    );

    const cookie = serialize('auth_token', token, {
        httpOnly: true,
        secure: false,
        path: '/', 
        sameSite: 'lax',
        maxAge: 3600 
    }); 
    const response = new NextResponse(JSON.stringify({token: token, username: user.login, userid: user.id}));
    response.headers.set('Set-Cookie', cookie)
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    return response
}
