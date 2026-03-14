'use client';

import { useRef, useState } from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (url: string) => void;
  required?: boolean;
  useBase64?: boolean;
}

export default function ImageUpload({ label, value, onChange, required, useBase64 }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const handleFile = async (file: File) => {
    setUploading(true);
    setUploadError('');
    if (useBase64) {
      const reader = new FileReader();
      reader.onload = () => {
        onChange(reader.result as string);
        setUploading(false);
      };
      reader.onerror = () => {
        setUploadError('Failed to read file');
        setUploading(false);
      };
      reader.readAsDataURL(file);
      return;
    }
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res  = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        onChange(json.url);
      } else {
        setUploadError(json.error ?? 'Upload failed');
      }
    } catch {
      setUploadError('Network error during upload');
    } finally {
      setUploading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && ' *'}
      </label>

      {/* Drop zone / click-to-upload */}
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#403373] hover:bg-purple-50 transition-colors"
      >
        {uploading ? (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#403373]" />
            Uploading…
          </div>
        ) : (
          <p className="text-sm text-gray-400">
            Drag & drop or <span className="text-[#403373] font-medium">click to upload</span>
            <br />
            <span className="text-xs">JPG, PNG, WebP, AVIF, GIF, SVG — max 5 MB</span>
          </p>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleInputChange}
        />
      </div>

      {uploadError && (
        <p className="text-xs text-red-500 mt-1">{uploadError}</p>
      )}

      {/* Live preview */}
      {value && (
        <div className="mt-2 relative group w-full h-28 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
          <img
            src={value}
            alt="Preview"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute top-1 right-1 bg-white/90 rounded-full w-6 h-6 flex items-center justify-center text-gray-500 hover:text-red-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
            title="Remove image"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
