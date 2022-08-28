import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from 'server/router';

export const { useQuery: useTrpcQuery, useMutation: useTrpcMutation } = createReactQueryHooks<AppRouter>();