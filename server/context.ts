import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { decode, getToken } from 'next-auth/jwt'

const secret = process.env.NEXTAUTH_SECRET

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {

  async function getUserFromHeader() {
    if(opts?.req) {
      return await getToken({ req: opts.req, secret })
    }
    
    return null
  }
  const user = await getUserFromHeader();
  return {
    user,
  };
}
type Context = trpc.inferAsyncReturnType<typeof createContext>;

export function createRouter() {
  return trpc.router<Context>();
}