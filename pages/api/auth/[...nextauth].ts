import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from 'prisma/client'

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || ""
        }),
        GithubProvider({
            clientId: '',
            clientSecret: '',
            
        })
        
    ],
    secret: process.env.NEXTAUTH_SECRET
    
  })