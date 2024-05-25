import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import fs from "fs";
const fsPromises = fs.promises;
import path from "path";

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
            const dbPath = 'db/autobens.db';
            const dirPath = path.dirname(dbPath);

            try {
                await fsPromises.access(dirPath);
            } catch (error) {
                await fsPromises.mkdir(dirPath, { recursive: true });
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