import { NextRequest, NextResponse } from "next/server";
import { promises as fsPromises } from 'fs';
import path from "path";

import { deleteCar, fetchCars, insertCar, updateCar } from "@/repositories/carRepository";
import { CarProps } from "@/types";

const { writeFile } = fsPromises;

export const GET = async (
    req: NextRequest,
    res: NextResponse
) => {

    const page = req.nextUrl.searchParams.get('page')
    const elementPerPage = req.nextUrl.searchParams.get('elementPerPage')
    const hidden = req.nextUrl.searchParams.get('hidden')
    const solded = req.nextUrl.searchParams.get('solded')

    console.log(solded)

    if (!page || !elementPerPage || !hidden || !solded) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    let pageInt = 0;
    let elementPerPageInt = 0;
    let hiddenBool = hidden === '1';
    let soldedBool = solded === '1';
    try {
        pageInt = +page
        elementPerPageInt = +elementPerPage
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    let brand = req.nextUrl.searchParams.get('brand')
    let model = req.nextUrl.searchParams.get('model')

    if (!brand) {
        brand = ''
    }

    if (!model) {
        model = ''
    }

    const cars = await fetchCars(pageInt, elementPerPageInt, hiddenBool, soldedBool, brand, model)

    if (!cars) {
        return new NextResponse(JSON.stringify({ message: 'Not found' }), { status: 404 });
    }

    const response = new NextResponse(JSON.stringify(cars))
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
    const formData = await req.formData();

    const brand = formData.get('brand') as string;
    const model = formData.get('model') as string;
    const year = parseInt(formData.get('year') as string, 10);
    const fuel = formData.get('fuel') as string;
    const transmission = formData.get('transmission') as string;
    const mileage = parseInt(formData.get('mileage') as string, 10);
    const price = parseInt(formData.get('price') as string, 10);
    const capacity = parseInt(formData.get('capacity') as string, 10);
    const image = formData.get('image') as File;
    const imageName = `${year}_${brand}_${model}_${mileage}.png`;

    let solded = (formData.get('solded') as string) === '1'
    let hidden = (formData.get('hidden') as string) === '1'

    if (!brand || !model || !year || !fuel || !transmission || !mileage || !price || !capacity || !image) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    const buffer = Buffer.from(await image.arrayBuffer());

  try {
    await writeFile(
      path.join(process.cwd(), "public/images/cars/" + imageName),
      buffer
    );
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }

    const car: CarProps = {
        brand,
        model,
        year,
        fuel,
        transmission,
        image: imageName,
        mileage,
        price,
        capacity,
        solded: solded,
        hidden: hidden
    };

    if (!car) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    try {
        await insertCar(car)
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }


    const response = new NextResponse(JSON.stringify(car))
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    return response
}

export const DELETE = async (
    req: NextRequest,
    res: NextResponse
) => {
    const formData = await req.formData();

    const id = parseInt(formData.get('id') as string);

    if (!id) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    try {
        await deleteCar(id)
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }

    const response = new NextResponse()
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
    const formData = await req.formData();

    const id = parseInt(formData.get('id') as string);
    const brand = formData.get('brand') as string;
    const model = formData.get('model') as string;
    const year = parseInt(formData.get('year') as string, 10);
    const fuel = formData.get('fuel') as string;
    const transmission = formData.get('transmission') as string;
    const mileage = parseInt(formData.get('mileage') as string, 10);
    const price = parseInt(formData.get('price') as string, 10);
    const capacity = parseInt(formData.get('capacity') as string, 10);
    const image = formData.get('image') as File;
    const imageName = `${year}_${brand}_${model}_${mileage}.png`;
    const solded = (formData.get('solded') as string) === '1';
    const hidden = (formData.get('hidden') as string) === '1';

    if (!id || !brand || !model || !year || !fuel || !transmission || !mileage || !price || !capacity || !image) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    const buffer = Buffer.from(await image.arrayBuffer());

  try {
    await writeFile(
      path.join(process.cwd(), "public/images/cars/" + imageName),
      buffer
    );
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }

    const car: CarProps = {
        id: id,
        brand,
        model,
        year,
        fuel,
        transmission,
        image: imageName,
        mileage,
        price,
        capacity,
        solded: hidden,
        hidden: solded
    };

    if (!car) {
        return new NextResponse(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
    }

    try {
        await updateCar(car)
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }


    const response = new NextResponse(JSON.stringify(car))
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    return response
}