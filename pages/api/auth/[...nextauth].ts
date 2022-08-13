import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        DiscordProvider({
            clientId: '',
            clientSecret: ''
        })
    ],
  })