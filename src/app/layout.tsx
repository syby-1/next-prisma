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
      </body>
    </html>
  );
}
