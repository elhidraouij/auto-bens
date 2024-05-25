import { CarProps } from "@/types";
import prisma from "@/services/dbService";

export async function fetchCars(page: number, elementsPerPage: number, hidden: boolean, solded: boolean, brand: string, model: string) {
    const skip = (page - 1) * elementsPerPage;
    const whereClause = {
        solded: solded,
        hidden: hidden,
        brand: { contains: brand },
        model: { contains: model }
    };

    const [cars, totalCars] = await prisma.$transaction([
        prisma.car.findMany({
            where: whereClause,
            skip: skip,
            take: elementsPerPage,
        }),
        prisma.car.count({
            where: whereClause
        })
    ]);

    return {
        totalCars,
        cars
    };
}

export async function insertCar(car: CarProps) {
    const newCar = await prisma.car.create({
        data: {
            brand: car.brand,
            model: car.model,
            year: car.year,
            fuel: car.fuel,
            transmission: car.transmission,
            image: car.image,
            mileage: car.mileage,
            price: car.price,
            capacity: car.capacity,
            hidden: car.hidden,
            solded: car.solded
        }
    });
    return newCar;
}

export async function updateCar(car: CarProps) {
    const updatedCar = await prisma.car.update({
        where: { id: car.id },
        data: {
            brand: car.brand,
            model: car.model,
            year: car.year,
            fuel: car.fuel,
            transmission: car.transmission,
            image: car.image,
            mileage: car.mileage,
            price: car.price,
            capacity: car.capacity,
            hidden: car.hidden,
            solded: car.solded
        }
    });
    return updatedCar;
}

export async function deleteCar(id: number) {
    const deletedCar = await prisma.car.delete({
        where: { id: id }
    });
    return deletedCar;
}

export async function fetchModels() {
    const models = await prisma.car.findMany({
        select: { model: true },
        distinct: ['model']
    });
    return models.map(model => model.model);
}