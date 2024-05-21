import AutobensDatabase from "@/services/dbService"
import { MessageProps } from "@/types"

export const fetchMessages = async (page: number, elementParPage: number) => {
    const queryMessages = "SELECT * FROM messages ORDER BY datePublication DESC LIMIT ? OFFSET ?"
    const queryTotalMessages = "SELECT COUNT(*) as total_messages FROM messages"

    const db = await AutobensDatabase.getInstance().getDatabase()

    const [messages, totalMessages] = await Promise.all([
        db.all(queryMessages, [elementParPage, elementParPage*(page-1)]),
        db.all(queryTotalMessages)
    ])

    return {
        totalMessages: totalMessages[0].total_messages,
        messages:messages
    };
}

export const insertMessages = async (message: MessageProps) => {
    const query = "INSERT INTO messages(prenom, nom, email, telephone, description, object, datePublication) VALUES(?, ?, ?, ?, ?, ?, ?)"
    const db = await AutobensDatabase.getInstance().getDatabase()

    await db.run(query, [message.prenom, message.nom, message.email, message.telephone, message.description, message.object, message.datePublication])
}

export const readMessage = async (id: number) => {
    const query = "UPDATE messages SET read = 1 WHERE id = ?"
    const db = await AutobensDatabase.getInstance().getDatabase()

    await db.run(query, [id])
}