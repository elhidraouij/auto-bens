import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import fs from "fs";
const fsPromises = fs.promises;
import path from "path";
import bcryptjs from "bcryptjs";

class AutobensDatabase {
  private static instance: AutobensDatabase;

  private db: Database | null = null;

  private constructor() {}

  public static getInstance(): AutobensDatabase {
    if (!AutobensDatabase.instance) {
      AutobensDatabase.instance = new AutobensDatabase();
    }
    return AutobensDatabase.instance;
  }

  public async getDatabase(): Promise<Database> {
    if (this.db === null) {
      console.log("Répertoire actuel : " + process.cwd());
      let projectDir = process.cwd()
      const dirPath = projectDir + "db";
      try {
        await fsPromises.mkdir(dirPath, { recursive: true });
        console.log(`Dossier créé à l'adresse : ${dirPath}`);
      } catch (error) {
        console.error(`Erreur lors de la création du dossier : ${error}`);
      }
      const dbPath = dirPath + "/autobens.db";

      await this.generateDb(dbPath); // Assurez-vous que cette opération est terminée

      this.db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
      });
    }

    return this.db;
  }

  public async select(query: string): Promise<any> {
    const db = await this.getDatabase();

    const result = await db.all(query);

    return result;
  }

  private async generateDb(path: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const db = new sqlite3.Database(
        path,
        sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err) => {
          if (err) {
            console.error(
              "Erreur lors de la connexion à la base de données SQLite: " +
                err.message
            );
            return reject(err);
          }
          console.log("Connecté à la base de données SQLite.");
          db.serialize(() => {
            const createTableSql = `
              CREATE TABLE IF NOT EXISTS cars (
                id INTEGER PRIMARY KEY, brand TEXT, model TEXT, year INTEGER, 
                fuel TEXT, transmission TEXT, image TEXT, mileage INTEGER, 
                price REAL, capacity REAL, solded INTEGER DEFAULT 0, hidden INTEGER DEFAULT 0
              );
              CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, password TEXT
              );
              CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY, prenom TEXT, nom TEXT, email TEXT, 
                telephone TEXT, description TEXT, object TEXT, read INTEGER DEFAULT 0, 
                datePublication INTEGER
              );
            `;

            // Execute creation of tables
            db.exec(createTableSql, (err) => {
              if (err) {
                console.error(
                  "Erreur lors de la création des tables: " + err.message
                );
                return reject(err);
              }
              console.log("Tables créées.");

              // Insert initial data into cars table
              const insertCarSql = `INSERT INTO cars (brand, model, year, fuel, transmission, image, mileage, price, capacity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
              const carData = [
                "BMW",
                "X3",
                2006,
                "Essence / Electrique",
                "Automatique",
                "2006_bmw_x3_270000.png",
                270000,
                6990.0,
                2.0,
              ];

              for (let i = 0; i < 50; i++) {
                db.run(insertCarSql, carData, (err) => {
                  if (err) {
                    console.error(
                      "Erreur lors de l'insertion de voiture: " + err.message
                    );
                    return reject(err);
                  }
                });
              }

              // Insert a user
              const insertUserSql =
                "INSERT INTO user (login, password) VALUES (?, ?)";
              bcryptjs.hash("lej", 10, (err, hash) => {
                if (err) {
                  console.error("Erreur de hachage: " + err.message);
                  return reject(err);
                }
                db.run(insertUserSql, ["dalwaj", hash], (err) => {
                  if (err) {
                    console.error(
                      "Erreur lors de l'insertion utilisateur: " + err.message
                    );
                    return reject(err);
                  }
                  console.log(
                    "Utilisateur inséré avec succès avec le mot de passe haché"
                  );

                  // Close database after all operations
                  db.close((err) => {
                    if (err) {
                      console.error(
                        "Erreur lors de la fermeture de la connexion à la base de données: " +
                          err.message
                      );
                      return reject(err);
                    }
                    console.log("Connexion à la base de données fermée.");
                    resolve();
                  });
                });
              });
            });
          });
        }
      );
    });
  }
}

export default AutobensDatabase;
