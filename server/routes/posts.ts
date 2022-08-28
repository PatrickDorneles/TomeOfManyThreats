import * as trpc from '@trpc/server';
import { TRPCError } from '@trpc/server';
import { unstable_getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import { prisma } from 'prisma/client';
import { createRouter } from 'server/context';
import { z } from 'zod';

export const postsRouter = createRouter()
    .middleware(({ ctx, next }) => {
        if(!ctx.user) throw new TRPCError({ code: 'UNAUTHORIZED' });
        return next()
    })
    .query('mine', {
        input: 
            z.object({
                page: z.number().default(1),
                pageSize: z.number().default(9)
            }),
        
        async resolve({ input, ctx }) {
            const skip = (input.page - 1) * input.pageSize
        
            return await prisma.post.findMany({
                where: {
                    author: { email: ctx.user?.email! }
                },
                take: input.pageSize,
                skip
            })
        }
    })