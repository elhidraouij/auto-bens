import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export const POST = async (
    req: NextRequest,
    res: NextResponse
) => {
    // Supprimer le cookie d'authentification en fixant une date d'expiration antérieure
    const cookie = serialize('auth_token', '', {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'lax',
        expires: new Date(0),
    }); 

    const response = new NextResponse(null);
    response.headers.set('Set-Cookie', cookie);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    
    return response;
};