import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Binary and Beyond Research - Mutual Fund Distribution & Investment Advisory',
  description: 'Leading mutual fund distributor offering expert investment advisory, financial planning, and wealth management services.',
  keywords: 'mutual funds, investment advisory, financial planning, wealth management, Binary and Beyond Research',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="min-h-screen">
          <Header />
          <main className="pt-[112px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
