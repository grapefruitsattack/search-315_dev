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
  icons: {
      icon: '/favicons/favicon.ico',
      shortcut: '/favicons/favicon.ico',
      apple: '/favicons/apple-touch-icon.png',
      other: [
        {rel: 'mask-icon', url: '/favicons/safari-pinned-tab.svg'},
        {rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon-precomposed.png'},
      ]
    },
  manifest: "/favicons/site.webmanifest",
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" /> 
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" /> 
          <meta name="theme-color" content="#ffffff" />
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
