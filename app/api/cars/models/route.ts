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
    return response
}