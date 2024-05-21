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
    db.run(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY,
        prenom TEXT,
        nom TEXT,
        email TEXT,
        telephone TEXT,
        description TEXT,
        object TEXT,
        read INTEGER DEFAULT 0,
        datePublication INTEGER
    )`),
    (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('TABLE créée')
    }

    const values = ['Jawad', 'EL HIDRAOUI', 'Voitures avec des prix attractifs ce qui est un sacré argument de vente vu l\'entretien et le suivi impeccable des voitures.', 'Carcassonne', '', 5]

    const insertSql = `INSERT INTO avis(prenom, nom, description, lieu, image, note) VALUES(?, ?, ?, ?, ?, ?)`;

    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Closed the database connection.");
      });
})