import { fetchModels } from "@/repositories/carRepository";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
    req: NextRequest,
    res: NextResponse
) => {
    const models = await fetchModels()

    if (!models) {
        return new NextResponse(JSON.stringify({ message: 'Not found' }), { status: 404 });
    }

    const response = new NextResponse(JSON.stringify(models))
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    return response
}