'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { Provider } from '@/context/themeProvider';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <Provider>{children}</Provider>
        <Script defer id="googleTag" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NSKKPP2')
            
    `}</Script>
      </body>
    </html>
  );
}
