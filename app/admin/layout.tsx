import type { Metadata } from 'next';
import AdminNav from './components/AdminNav';

export const metadata: Metadata = {
  title: 'Admin Panel | Binary and Beyond Research',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNav />
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
