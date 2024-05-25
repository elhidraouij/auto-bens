const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
    const carData = {
        brand: 'BMW',
        model: 'X3',
        year: 2006,
        fuel: 'Essence / Electrique',
        transmission: 'Automatique',
        image: '2006_bmw_x3_270000.png',
        mileage: 270000,
        price: 6990.00,
        capacity: 2.0
    };

    // Insert cars without hidden or solded flags
    for (let i = 0; i < 50; i++) {
        await prisma.car.create({
            data: carData
        });
    }

    // Insert cars with hidden flag
    for (let i = 0; i < 50; i++) {
        await prisma.car.create({
            data: {
                ...carData,
                hidden: true
            }
        });
    }

    // Insert cars with solded flag
    for (let i = 0; i < 50; i++) {
        await prisma.car.create({
            data: {
                ...carData,
                solded: true
            }
        });
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });