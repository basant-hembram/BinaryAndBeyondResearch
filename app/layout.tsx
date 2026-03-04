import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Global top-right background graphic */}
          <img
            src="/images/bg-grphix.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none fixed top-0 right-0 w-[420px] lg:w-[580px] xl:w-[680px] object-contain z-0 opacity-100"
          />
          <Header />
          <main className="relative z-10 pt-[112px]">
            {children}
          </main>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors z-50 h-[64px] w-[64px] flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <Footer />
        </div>
      </body>
    </html>
  );
}
