import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Binary and Beyond Research - Market Research & Investment Advisory',
  description: 'Binary and Beyond Research delivers end-to-end market research, data-driven insights, panel services, and expert investment advisory to help businesses and investors make smarter decisions.',
  keywords: 'market research, research analysis, panel services, product testing, healthcare market research, brand assessments, market segmentation, investment advisory, mutual funds, Binary and Beyond Research',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
