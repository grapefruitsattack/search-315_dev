import './globals.css'
import {Metadata} from "next";
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import { Providers } from "./providers";
import ScriptGoogleAnalytics from "../features/management/ScriptGoogleAnalytics";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'サーチサイコー',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <body className={inter.className}>
      <Providers>
      {children}
      </Providers>
      <Script id="holder-js" src="//cdnjs.cloudflare.com/ajax/libs/holder/2.9.6/holder.js" strategy="lazyOnload">
      </Script>
      <ScriptGoogleAnalytics />
  <div id="root"></div>
      </body>
    </html>
  )
}
