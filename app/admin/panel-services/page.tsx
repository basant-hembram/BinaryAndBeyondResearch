'use client';

import { useState, useEffect, useCallback } from 'react';
import ImageUpload from '../components/ImageUpload';

interface PanelServiceItem {
  _id?: string;
  title: string;
  description: string;
  image: string;
}

const EMPTY: PanelServiceItem = { title: '', description: '', image: '' };

export default function AdminPanelServicesPage() {
  const [items, setItems]         = useState<PanelServiceItem[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm]           = useState<PanelServiceItem>(EMPTY);
  const [editId, setEditId]       = useState<string | null>(null);
  const [saving, setSaving]       = useState(false);
  const [toast, setToast]         = useState('');

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 3500); };

  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/panel-services');
      const json = await res.json();
      if (json.success) setItems(json.data);
      else setError(json.error ?? 'Failed to load');
    } catch { setError('Network error.'); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const setField = (key: keyof PanelServiceItem, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const openCreate = () => { setForm(EMPTY); setEditId(null); setShowModal(true); };
  const openEdit   = (item: PanelServiceItem) => { setForm({ ...item }); setEditId(item._id!); setShowModal(true); };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this panel service?')) return;
    try {
      const res  = await fetch(`/api/panel-services/${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.success) { setItems((p) => p.filter((i) => i._id !== id)); showToast('Deleted.'); }
      else alert(json.error);
    } catch { alert('Delete failed.'); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const url    = editId ? `/api/panel-services/${editId}` : '/api/panel-services';
      const method = editId ? 'PUT' : 'POST';
      const res    = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const json   = await res.json();
      if (json.success) {
        await fetchItems();
        setShowModal(false);
        showToast(editId ? 'Updated successfully.' : 'Created successfully.');
      } else { alert(json.error); }
    } catch { alert('Operation failed.'); }
    finally { setSaving(false); }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Panel Services</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage panel type cards (B2B, Consumer, Healthcare)</p>
        </div>
        <button onClick={openCreate} className="bg-[#403373] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2d2558] transition-colors">
          + Add New
        </button>
      </div>

      {toast && <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-2.5 rounded-lg text-sm">{toast}</div>}
      {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-lg text-sm">{error}</div>}

      {loading ? (
        <div className="flex items-center justify-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#403373]" />
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Preview</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Title</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Description</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 w-24">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.length === 0 ? (
                <tr><td colSpan={4} className="text-center py-12 text-gray-400">No panel services yet. Click <strong>+ Add New</strong> to create one.</td></tr>
              ) : items.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    {item.image ? (
                      <img src={item.image} alt="" className="h-10 w-16 object-cover rounded" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    ) : <span className="text-gray-300">—</span>}
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 max-w-[180px] truncate">{item.title}</td>
                  <td className="px-4 py-3 text-gray-500 max-w-[240px] truncate">{item.description}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-3">
                      <button onClick={() => openEdit(item)} className="text-blue-600 hover:text-blue-800 text-xs font-medium">Edit</button>
                      <button onClick={() => handleDelete(item._id!)} className="text-red-500 hover:text-red-700 text-xs font-medium">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">{editId ? 'Edit Panel Service' : 'New Panel Service'}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input type="text" value={form.title} onChange={(e) => setField('title', e.target.value)} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#403373] focus:border-transparent" />
              </div>
              <ImageUpload label="Image" value={form.image} onChange={(url) => setField('image', url)} required useBase64 />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea value={form.description} onChange={(e) => setField('description', e.target.value)} required rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#403373] focus:border-transparent resize-none" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors">Cancel</button>
                <button type="submit" disabled={saving} className="flex-1 bg-[#403373] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2d2558] disabled:opacity-60 transition-colors">
                  {saving ? 'Saving…' : (editId ? 'Update' : 'Create')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
