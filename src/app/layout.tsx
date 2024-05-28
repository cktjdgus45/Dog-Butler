import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from '@/context/AuthContext';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: '강아지 집사',
    template: '강아지 집사 | %s',
  },
  description: '강아지 생활용품 판매하는 전자상거래 사이트.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthContext>
          <header className='bg-red-50 text-red-50'>
            <h1>sfasfasf</h1>
            <Navbar />
          </header>

          {children}
        </AuthContext>
      </body>
    </html>
  );
}
