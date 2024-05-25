import prisma from "@/services/dbService";

export async function fetchUser(login: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { login: login }
        });
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}