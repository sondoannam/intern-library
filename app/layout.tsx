import type { Metadata } from 'next';
import { ReactNode } from 'react';

import localFont from 'next/font/local';

import './globals.css';

const ibmPlexSans = localFont({
  src: [
    { path: '/fonts/IBMPlexSans-Regular.tff', weight: '400', style: 'normal' },
    { path: '/fonts/IBMPlexSans-Medium.tff', weight: '500', style: 'normal' },
    { path: '/fonts/IBMPlexSans-SemiBold.tff', weight: '600', style: 'normal' },
    { path: '/fonts/IBMPlexSans-Bold.tff', weight: '700', style: 'normal' },
  ],
});

const bebasNeue = localFont({
  src: [{ path: '/fonts/BebasNeue-Regular.tff', weight: '400', style: 'normal' }],
  variable: '--bebas-neue',
});

export const metadata: Metadata = {
  title: 'InternLib',
  description: 'InternLib is a book borrowing platform for developers.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
