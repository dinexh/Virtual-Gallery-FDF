import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Virtual Gallery',
  description: 'A platform for artists to showcase and sell their artwork',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
