import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import GithubProvider from 'next-auth/providers/github'
import Credentials, { CredentialsProviderType } from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from 'prisma/client'
import { argon2i, verify } from 'argon2'

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
            
            
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        }),
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'johndoe@email.com' },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials?.email
                    },
                    include: {
                        accounts: true
                    }
                })
                
                if(!user || !credentials?.password || !user.password) {
                    return null
                }
                
                const doesPasswordsMatch = verify(user.password, credentials?.password, { type: argon2i })
                
                if(!doesPasswordsMatch) {
                    return null
                }
                
                return user
              }
          
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session(params) {
            return {
                ...params.session,
                user: {
                    ...params.user,
                }
            }
        },
        
    },
  })