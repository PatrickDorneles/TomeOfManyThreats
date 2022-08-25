import * as trpc from '@trpc/server';
import { prisma } from 'prisma/client';
import { z } from 'zod';

export const postsRouter = trpc
    .router()
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
    .query('mine', {
        input: 
            z.object({
                userEmail: z.string().email(),
                page: z.number().default(1),
                pageSize: z.number().default(9)
            }),
        async resolve({ input }) {
            return []
        }
    })