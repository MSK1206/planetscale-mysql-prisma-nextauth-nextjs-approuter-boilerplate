import type { Metadata } from 'next';
import { Zen_Antique } from 'next/font/google';
import './globals.css';
import Header from './components/base/Header';
import SessionProviderWrap from './components/contexts/SessionProviderWrap';

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
    <html lang="ja">
      <body className={zen.className}>
        <SessionProviderWrap>
          <Header />
          <main>{children}</main>
        </SessionProviderWrap>
      </body>
    </html>
  );
}
