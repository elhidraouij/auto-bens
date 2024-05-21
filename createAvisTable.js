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
    db.run(`CREATE TABLE IF NOT EXISTS avis (
        id INTEGER PRIMARY KEY,
        prenom TEXT,
        nom TEXT,
        description TEXT,
        lieu TEXT,
        image TEXT,
        note INTEGER,
    )`),
    (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('TABLE créée')
    }

    const values = ['Jawad', 'EL HIDRAOUI', 'Voitures avec des prix attractifs ce qui est un sacré argument de vente vu l\'entretien et le suivi impeccable des voitures.', 'Carcassonne', '', 5]

    const insertSql = `INSERT INTO avis(prenom, nom, description, lieu, image, note) VALUES(?, ?, ?, ?, ?, ?)`;

    for (let i = 0; i < 50; i++){
        db.run(insertSql, values, function (err) {
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