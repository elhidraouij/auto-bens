import AutobensDatabase from "@/services/dbService";

export async function fetchUser(login: string){
    const db = await AutobensDatabase.getInstance().getDatabase()
    const query = 'SELECT * FROM user WHERE login = ?;'

    try {
        const result = await db.get(query, [login]);
        return result;
    } catch(error) {
        return null;
    }

}