import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WithTheme } from 'components/core/WithTheme'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return  <WithTheme>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </WithTheme>
}

export default MyApp

