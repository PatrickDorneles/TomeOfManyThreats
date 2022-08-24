import * as trpc from '@trpc/server';
import { prisma } from 'prisma/client';
import { z } from 'zod';

export const contentRouter = trpc
    .router()
    .query('search', {
        input: 
            z.string(),
        async resolve({ input }) {
            const creatures = await prisma.creature.findMany({
                where: {
                    OR: [
                        {
                            name: { 
                                contains: input,
                            }
                        },
                        {
                            description: {
                                contains: input
                            }
                        },
                        {
                            tags: {
                                some: {
                                    name: {
                                        contains: input
                                    }
                                }
                            }
                        }
                    ]
                    
                    
                },
                take: 10,
                include: {
                    tags: true
                }
            })
            
            return [...creatures]
        }
    })