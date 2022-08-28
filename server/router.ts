import * as trpc from '@trpc/server';
import { z } from 'zod';
import { postsRouter } from './routes/posts';
import superjson from 'superjson'
import { createRouter } from './context';
import { publicRouter } from './routes/public';

export const appRouter = createRouter()
  .merge('public:', publicRouter)
  .merge('posts:', postsRouter)

// export type definition of API
export type AppRouter = typeof appRouter;