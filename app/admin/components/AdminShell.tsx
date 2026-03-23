'use client';

import { usePathname, useRouter } from 'next/navigation';
import AdminNav from './AdminNav';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNav />
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
