import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
