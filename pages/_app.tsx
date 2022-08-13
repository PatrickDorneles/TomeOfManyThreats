import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WithTheme } from 'components/core/WithTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return  <WithTheme>
    <Component {...pageProps} />
  </WithTheme>
}

export default MyApp

