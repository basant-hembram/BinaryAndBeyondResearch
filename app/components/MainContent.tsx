'use client';

import { usePathname } from 'next/navigation';

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main className={`relative z-10 ${isHome ? '' : 'pt-[112px]'}`}>
      {children}
    </main>
  );
}
