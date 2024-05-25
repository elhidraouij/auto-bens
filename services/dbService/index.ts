import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

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
//
    public async getDatabase(): Promise<Database> {
        if (this.db === null) {
            console.log("Chemin complet du fichier actuel :", __filename);
            let dbPath = 'db/autobens.db';

            try {
                this.db = await open({
                    filename: dbPath,
                    driver: sqlite3.Database
                });
            } catch (error) {
                dbPath = '../db/autobens.db'
            }
            try {
                this.db = await open({
                    filename: dbPath,
                    driver: sqlite3.Database
                });
            } catch (error) {
                dbPath = '/db/autobens.db'
            }
            this.db = await open({
                filename: dbPath,
                driver: sqlite3.Database
            });
        }

        return this.db;
    }

    public async select(query: string): Promise<any> {
        const db = await this.getDatabase();

        const result = await db.all(query);

        return result;
    }
}

export default AutobensDatabase;