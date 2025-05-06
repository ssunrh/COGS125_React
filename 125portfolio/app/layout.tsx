// app/layout.tsx
import './globals.css'; // Optional: Tailwind or global CSS
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { Afacad } from 'next/font/google';

const afacad = Afacad({ subsets: ['latin'] });

export const metadata = {
  title: 'sarah sun',
  description: 'a portfolio website built with next.js and typeScript for COGS 125 SP25',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={afacad.className}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}