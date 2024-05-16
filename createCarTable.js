const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
    "./db/autobens.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to the SQlite database.");
    }
);

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS cars (
        id INTEGER PRIMARY KEY,
        brand TEXT,
        model TEXT,
        year INTEGER,
        fuel TEXT,
        transmission TEXT,
        image TEXT,
        mileage INTEGER,
        price REAL,
        capacity REAL,
        solded INTEGER DEFAULT 0,
        hidden INTEGER DEFAULT 0
    )`),
    (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('TABLE créée')
    }

    const values = ['BMW', 'X3', 2006, 'Essence', 'Automatic', '2006_bmw_x3_270000.png', 270000, 6990.00, 2.0]

    const insertSql = `INSERT INTO cars(brand, model, year, fuel, transmission, image, mileage, price, capacity) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    for (let i = 0; i < 50; i++){
        db.run(insertSql, values, function (err) {
            if (err) {
                return console.error(err.message);
            }
            const id = this.lastID;
            console.log(`Rows inserted, ID ${id}`)
        })
    }
    
    const values2 = ['BMW', 'X3', 2006, 'Essence', 'Automatic', '2006_bmw_x3_270000.png', 270000, 6990.00, 2.0, 1]

    const insertSql2 = `INSERT INTO cars(brand, model, year, fuel, transmission, image, mileage, price, capacity, hidden) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    for (let i = 0; i < 50; i++){
        db.run(insertSql2, values2, function (err) {
            if (err) {
                return console.error(err.message);
            }
            const id = this.lastID;
            console.log(`Rows inserted, ID ${id}`)
        })
    }
    const values3 = ['BMW', 'X3', 2006, 'Essence', 'Automatic', '2006_bmw_x3_270000.png', 270000, 6990.00, 2.0, 1]

    const insertSql3 = `INSERT INTO cars(brand, model, year, fuel, transmission, image, mileage, price, capacity, solded) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    for (let i = 0; i < 50; i++){
        db.run(insertSql3, values3, function (err) {
            if (err) {
                return console.error(err.message);
            }
            const id = this.lastID;
            console.log(`Rows inserted, ID ${id}`)
        })
    }
    

    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Closed the database connection.");
      });
})