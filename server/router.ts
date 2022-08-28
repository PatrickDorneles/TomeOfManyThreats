import * as trpc from '@trpc/server';
import { z } from 'zod';
import { postsRouter } from './posts';
import superjson from 'superjson'

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge('posts:', postsRouter)

// export type definition of API
export type AppRouter = typeof appRouter;