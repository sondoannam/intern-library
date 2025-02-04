import type { Metadata } from 'next';
import { ReactNode } from 'react';

import localFont from 'next/font/local';

import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const ibmPlexSans = localFont({
  src: [
    { path: '../public/fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/IBMPlexSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
});

const bebasNeue = localFont({
  src: [{ path: '../public/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--bebas-neue',
});

export const metadata: Metadata = {
  title: 'InternLib',
  description: 'InternLib is a book borrowing platform made by an Intern dev.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
