import * as trpc from '@trpc/server';
import { z } from 'zod';
import { contentRouter } from './content';

export const appRouter = trpc
  .router()
  .merge('creatures.', contentRouter)

// export type definition of API
export type AppRouter = typeof appRouter;