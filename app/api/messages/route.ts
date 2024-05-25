import { fetchMessages, insertMessages, readMessage } from "@/repositories/messageRepository";
import { MessageProps } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
    req: NextRequest,
    res: NextResponse
) => {
    let messages;
    let page = req.nextUrl.searchParams.get('page')
    let elementPerPage = req.nextUrl.searchParams.get('elementParPage')
    
    if (!page) {
        page = '1'
    }

    if (!elementPerPage) {
        elementPerPage = '6'
    }

    let pageInt;
    let elementParPageInt;
    try {
        pageInt = parseInt(page)
        elementParPageInt = parseInt(elementPerPage)
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }
    
    try {
        messages = await fetchMessages(pageInt, elementParPageInt)
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }

    const response = new NextResponse(JSON.stringify(messages))
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    return response
}

export const POST = async (
    req: NextRequest,
    res: NextResponse
) => {
    const form = await req.formData()

    const prenom = form.get('prenom') as string;
    const nom = form.get('nom') as string;
    const telephone = form.get('telephone') as string;
    const email = form.get('email') as string;
    const object = form.get('object') as string;
    const description = form.get('description') as string;

    if (!prenom || !nom || !telephone || !email || !object || !description) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    if (
        (telephone[0] === '+' && telephone.length != 12) ||
        (telephone[0] === '0' && telephone.length != 10)
    ) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 }); 
    }

    if (
        email.length < 5 ||
        !email.includes("@") ||
        !email.includes(".")
      ) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 }); 
      }

    const now = new Date();

    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const dateTimeString = `${year}${month}${day}${hours}${minutes}`;

    const message: MessageProps = {
        prenom,
        nom,
        telephone,
        email,
        object,
        description,
        datePublication: parseInt(dateTimeString)
        
    }

    if (!message) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    try {
        await insertMessages(message)
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }

    const response = new NextResponse(JSON.stringify(message))
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    return response
}

export const PUT = async (
    req: NextRequest,
    res: NextResponse
) => {
    const form = await req.formData()
    const id = form.get('id') as string

    if (!id) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    let idInt;

    try {
        idInt = parseInt(id)
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    try {
        await readMessage(idInt)
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }

    const response = new NextResponse()
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    return response
}