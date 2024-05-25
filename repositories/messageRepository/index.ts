import prisma from "@/services/dbService"
import { MessageProps } from "@/types"

export const fetchMessages = async (page: number, elementsPerPage: number) => {
    const skip = elementsPerPage * (page - 1);

    const [messages, totalMessages] = await prisma.$transaction([
        prisma.message.findMany({
            take: elementsPerPage,
            skip: skip,
            orderBy: {
                datePublication: 'desc'
            }
        }),
        prisma.message.count()
    ]);

    const messagesWithConvertedDate = messages.map(message => ({
        ...message,
        datePublication: message.datePublication.toString()
    }));

    return {
        totalMessages,
        messages: messagesWithConvertedDate
    };
};

export const insertMessages = async (message: MessageProps) => {
    try {
        await prisma.message.create({
            data: {
                prenom: message.prenom,
                nom: message.nom,
                email: message.email,
                telephone: message.telephone,
                description: message.description,
                object: message.object,
                datePublication: message.datePublication
            }
        });
    } catch(err) {
        console.log(err)
    }
    
};

export const readMessage = async (id: number) => {
    await prisma.message.update({
        where: { id: id },
        data: { read: true }
    });
};