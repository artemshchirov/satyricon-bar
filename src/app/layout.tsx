import { Metadata } from 'next';
import * as React from 'react';
import { ReactNode } from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      `https://ik.imagekit.io/webbuilder/satyricon/Prew%20png_NinrID5sX.png?updatedAt=1715793538999`,
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      `https://ik.imagekit.io/webbuilder/satyricon/Prew%20png_NinrID5sX.png?updatedAt=1715793538999`,
    ],
    // creator: '@artemshchirov',
  },
  authors: [
    {
      url: 'https://artemshchirov.github.io/portfolio',
    },
  ],
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
