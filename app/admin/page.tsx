'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const COLLECTIONS = [
  { label: 'Case Studies', api: '/api/case-study', href: '/admin/case-study', color: 'bg-purple-100 text-purple-700 border-purple-200', icon: '◈' },
  { label: 'Our Work',     api: '/api/our-work',   href: '/admin/our-work',   color: 'bg-blue-100 text-blue-700 border-blue-200',     icon: '◉' },
  { label: 'Services',     api: '/api/services',   href: '/admin/services',   color: 'bg-green-100 text-green-700 border-green-200',   icon: '◎' },
  { label: 'Panel Services', api: '/api/panel-services', href: '/admin/panel-services', color: 'bg-orange-100 text-orange-700 border-orange-200', icon: '◐' },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState('');

  useEffect(() => {
    const fetchCounts = async () => {
      const results = await Promise.allSettled(
        COLLECTIONS.map((c) => fetch(c.api).then((r) => r.json()))
      );
      const newCounts: Record<string, number> = {};
      results.forEach((r, i) => {
        if (r.status === 'fulfilled' && r.value.success) {
          newCounts[COLLECTIONS[i].api] = r.value.data.length;
        } else {
          newCounts[COLLECTIONS[i].api] = 0;
        }
      });
      setCounts(newCounts);
      setLoading(false);
    };
    fetchCounts();
  }, []);

  const handleSeed = async () => {
    if (!confirm('This will replace all existing data with demo data. Continue?')) return;
    setSeeding(true);
    setSeedMsg('');
    try {
      const res = await fetch('/api/seed', { method: 'POST' });
      const json = await res.json();
      if (json.success) {
        setSeedMsg(`✓ Seeded: ${json.counts.caseStudies} case studies, ${json.counts.ourWork} our work steps, ${json.counts.services} services, ${json.counts.panelServices} panel services.`);
        // Refresh counts
        const results = await Promise.allSettled(
          COLLECTIONS.map((c) => fetch(c.api).then((r) => r.json()))
        );
        const newCounts: Record<string, number> = {};
        results.forEach((r, i) => {
          if (r.status === 'fulfilled' && r.value.success) {
            newCounts[COLLECTIONS[i].api] = r.value.data.length;
          }
        });
        setCounts(newCounts);
      } else {
        setSeedMsg('✗ Seed failed: ' + json.error);
      }
    } catch {
      setSeedMsg('✗ Network error while seeding.');
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your website content from here.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {COLLECTIONS.map((c) => (
          <Link
            key={c.api}
            href={c.href}
            className={`block border rounded-xl p-5 hover:shadow-md transition-shadow ${c.color}`}
          >
            <div className="text-2xl mb-2">{c.icon}</div>
            <div className="text-3xl font-bold mb-1">
              {loading ? '—' : (counts[c.api] ?? 0)}
            </div>
            <div className="text-sm font-medium">{c.label}</div>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-base font-semibold text-gray-800 mb-4">Quick Access</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 font-medium"
            >
              <span className="text-lg">{c.icon}</span>
              Manage {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Seed Data */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-base font-semibold text-gray-800 mb-1">Demo Data</h2>
        <p className="text-sm text-gray-500 mb-4">
          Seed the database with demo content matching the existing site data. This replaces all current records.
        </p>
        {seedMsg && (
          <div className={`mb-3 text-sm px-4 py-2 rounded-lg ${seedMsg.startsWith('✓') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {seedMsg}
          </div>
        )}
        <button
          onClick={handleSeed}
          disabled={seeding}
          className="bg-[#0A1A3A] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#1a2d5a] disabled:opacity-60 transition-colors"
        >
          {seeding ? 'Seeding…' : 'Seed Demo Data'}
        </button>
      </div>
    </div>
  );
}
