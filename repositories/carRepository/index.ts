import { CarProps } from "@/types";
import AutobensDatabase from "../../services/dbService";

export async function fetchCars(page: number, elementPerPage: number, hidden: number, solded: number, brand: string, model: string): Promise<any> {
    brand = '%'.concat(brand, '%')
    model = '%'.concat(model, '%')
    const queryCars = `
        SELECT * 
        FROM cars 
        WHERE solded = ? AND hidden = ? AND brand LIKE ? AND model LIKE ? LIMIT ? OFFSET ?`
    const queryTotalCars = `
        SELECT COUNT(*) as total_cars
        FROM cars 
        WHERE solded = ? AND hidden = ? AND brand LIKE ? AND model LIKE ?`

    const db = await AutobensDatabase.getInstance().getDatabase()

    const [cars, totalCars] = await Promise.all([
        db.all(queryCars, [solded, hidden, brand, model, elementPerPage, elementPerPage*(page-1)]),
         db.all(queryTotalCars, [solded, hidden, brand, model])
        ])

    return {
        totalCars: totalCars[0].total_cars,
        cars: cars
    };
}

export async function insertCar(car: CarProps) {
    const query = 'INSERT INTO cars(brand, model, year, fuel, transmission, image, mileage, price, capacity, hidden, solded) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    const db = await AutobensDatabase.getInstance().getDatabase()
    await db.run(query, [car.brand, car.model, car.year, car.fuel, car.transmission, car.image, car.mileage, car.price, car.capacity, car.hidden, car.solded])
}

export async function updateCar(car: CarProps) {
    const query = 'UPDATE cars SET brand = ?, model = ?, year = ?, fuel = ?, transmission = ?, image = ?, mileage = ?, price = ?, capacity = ?, hidden = ?, solded = ? WHERE id = ?'
    const db = await AutobensDatabase.getInstance().getDatabase()
    await db.run(query, [car.brand, car.model, car.year, car.fuel, car.transmission, car.image, car.mileage, car.price, car.capacity, car.hidden, car.solded, car.id])
}

export async function deleteCar(id: number) {
    const query = " DELETE FROM cars WHERE id = ?"
    const db = await AutobensDatabase.getInstance().getDatabase()
    await db.run(query, [id])
}

export async function fetchModels(): Promise<Array<string>> {
    const db = await AutobensDatabase.getInstance().getDatabase()
    const models = await db.all('SELECT DISTINCT model FROM cars')
    return models
}