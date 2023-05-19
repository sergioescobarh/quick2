import '@/styles/globals.scss'
import Button from '@/atoms/Button'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
