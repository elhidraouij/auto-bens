import { jwtVerify, SignJWT } from 'jose';
import { secret_key } from '@/constants';

interface UserJwtPayload {
    jti: string
    iat: number
}

// test
export const verifyAuth = async (token: string) => {
    try {
        const verified = await jwtVerify(token, new TextEncoder().encode(secret_key))
        return verified.payload as UserJwtPayload
    } catch (error) {
        throw new Error('Your token has expired')
    }
}