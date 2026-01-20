import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Basiq360 - Track & Trace Platform for Food Exporters",
  description:
    "End-to-end cloud-based traceability system for Middle East food exporters with regulatory compliance and real-time tracking.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "favicon.webp",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "favicon.webp",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "favicon.webp",
        type: "image/svg+xml",
      },
    ],
    apple: "favicon.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/webp" href="/track-trace/favicon.webp" />
      
        {/* Meta Pixel Code */}
<Script
  id="facebook-pixel"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '733484639407288');
      fbq('track', 'PageView');
    `,
  }}
/>
<noscript><img height="1" width="1" style={{display:'none'}}
src="https://www.facebook.com/tr?id=733484639407288&ev=PageView&noscript=1"
/></noscript>
 {/* End Meta Pixel Code  */}
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <GoogleTagManager gtmId="GTM-MM5PWB94" />
        <GoogleAnalytics gaId="G-M6HMK9JLLG" />
      </body>
    </html>
  )
}
