import type { Metadata } from 'next';
import { Zen_Antique } from 'next/font/google';
import './globals.css';

const zen = Zen_Antique({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'PlanetScale + Prisma + NextAuth + Next.js Project.',
  description: 'planetscale-mysql-prisma-nextauth-nextjs-approuter-boilerplate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body className={zen.className}>{children}</body>
    </html>
  );
}
