const sqlite3 = require("sqlite3").verbose();
const bcrypt = require('bcryptjs');

// Création et ouverture de la connexion à la base de données
const db = new sqlite3.Database("./db/autobens.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to the SQLite database.");
});

// Fonction pour insérer un utilisateur avec hachage de mot de passe
const insertUser = (login, plainPassword) => {
    bcrypt.hash(plainPassword, 10, (err, hash) => {
        if (err) {
            console.error('Erreur de hachage:', err);
            return;
        }
        console.log(hash)

        db.run('INSERT INTO user (login, password) VALUES (?, ?)', [login, hash], (err) => {
            if (err) {
                console.error('Erreur lors de l\'insertion:', err);
            } else {
                console.log('Utilisateur inséré avec succès avec le mot de passe haché');
            }

            // Fermeture de la base de données à l'intérieur de la callback
            db.close((err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log("Closed the database connection.");
                }
            });
        });
    });
};

// Création de la table et insertion de l'utilisateur
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT,
        password TEXT
    )`, (err) => {
        if (err) {
            console.error('Erreur lors de la création de la table:', err);
            return;
        }

        // Appel de la fonction d'insertion après la création de la table
        insertUser('dalwaj', 'lej');
    });
});
