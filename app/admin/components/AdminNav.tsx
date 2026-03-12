'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard', icon: '⊞' },
  { href: '/admin/case-study', label: 'Case Studies', icon: '◈' },
  { href: '/admin/our-work', label: 'Our Work', icon: '◉' },
  { href: '/admin/services', label: 'Services', icon: '◎' },
  { href: '/admin/panel-services', label: 'Panel Services', icon: '◐' },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-[#0A1A3A] text-white flex flex-col flex-shrink-0">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-lg font-bold tracking-tight">BBR Admin</h1>
        <p className="text-xs text-gray-400 mt-0.5">Content Management</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-[#6B2E7E] text-white font-medium'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              <span className="text-base leading-none">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
        >
          ← View Website
        </Link>
      </div>
    </aside>
  );
}
