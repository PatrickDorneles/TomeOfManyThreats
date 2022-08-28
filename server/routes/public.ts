import { prisma } from "prisma/client";
import { createRouter } from "server/context";
import { z } from "zod";

export const publicRouter = createRouter()
    .query('search', {
    input: 
        z.string(),
    async resolve({ input }) {
        const pages = await prisma.post.findMany({
            where: {
                OR: [
                    { title: { contains: input } },
                    { text: { contains: input } },
                    { tags: {
                        some: { name: { contains: input } }
                    } }
                ]
            },
            take: 10,
            include: {
                tags: true
            }
        })
        
        return [...pages]
    }
})