import * as trpc from '@trpc/server';
import { z } from 'zod';
import { postsRouter } from './posts';

export const appRouter = trpc
  .router()
  .merge('posts:', postsRouter)

// export type definition of API
export type AppRouter = typeof appRouter;