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
  icons:[
    { url: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" }, 
    { url: "/favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }, 
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
    <link rel="manifest" href="/favicons/site.webmanifest"/>
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#2b47bb"/>
    <meta name="msapplication-TileColor" content="#2b5797"/>
    <meta name="theme-color" content="#ffffff"/>
    </Head>
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
