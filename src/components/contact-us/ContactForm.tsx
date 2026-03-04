'use client';

import { useState } from 'react';
import Link from 'next/link';
import { data } from '@/data';

const ContactForm = () => {
  const formConfig = (data as any).contact.form;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToPolicy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const validate = (name: string, value: string) => {
    if (name === 'firstName' || name === 'lastName') {
      return value && !/^[A-Za-z\s]+$/.test(value) ? 'Only letters allowed' : '';
    }
    if (name === 'email') {
      return value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
    }
    if (name === 'phone') {
      const digits = value.replace(/[^0-9]/g, '');
      return value && digits.length < 10 ? 'Must be at least 10 digits' : '';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
    if (type !== 'checkbox') {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const isFormValid = () =>
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.message.trim() &&
    formData.agreeToPolicy &&
    Object.values(errors).every(e => !e);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    try {
      await new Promise(r => setTimeout(r, 800));
      setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', agreeToPolicy: false });
    } catch {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase = 'w-full h-[48px] rounded-md border border-[#D0D5DD] bg-none px-4 text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none focus:border-[#4D3D84]';

  return (
    <div data-gsap="fade-right">
      <h2 className="text-[#151D26] text-[28px] md:text-[34px] font-semibold mb-2">{formConfig?.heading}</h2>
      <p className="text-[#575455] text-[15px] mb-8">{formConfig?.subheading}</p>

      {submitStatus.type && (
        <div className={`mb-6 p-4 rounded-lg text-sm ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[#4A4A4A] text-[14px] mb-2">{formConfig?.fields?.firstName?.label}</label>
            <input type="text" name="firstName" placeholder={formConfig?.fields?.firstName?.placeholder}
              value={formData.firstName} onChange={handleChange}
              className={`${inputBase} ${errors.firstName ? 'border-red-400' : ''}`} />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-[#4A4A4A] text-[14px] mb-2">{formConfig?.fields?.lastName?.label}</label>
            <input type="text" name="lastName" placeholder={formConfig?.fields?.lastName?.placeholder}
              value={formData.lastName} onChange={handleChange}
              className={`${inputBase} ${errors.lastName ? 'border-red-400' : ''}`} />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-[#4A4A4A] text-[14px] mb-2">{formConfig?.fields?.email?.label}</label>
          <input type="email" name="email" placeholder={formConfig?.fields?.email?.placeholder}
            value={formData.email} onChange={handleChange}
            className={`${inputBase} ${errors.email ? 'border-red-400' : ''}`} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-[#4A4A4A] text-[14px] mb-2">{formConfig?.fields?.phone?.label}</label>
          <div className={`w-full h-[48px] rounded-md border border-[#D0D5DD] bg-none px-3 flex items-center gap-2 text-[14px] focus-within:border-[#4D3D84] ${errors.phone ? 'border-red-400' : ''}`}>
            <span className="text-[#4A4A4A] shrink-0 pr-2 border-r border-[#D0D5DD] flex items-center gap-1">
              {formConfig?.fields?.phone?.code}
              <svg viewBox="0 0 12 8" className="w-3 h-3 text-[#667085]" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <input type="tel" name="phone" placeholder={formConfig?.fields?.phone?.placeholder}
              value={formData.phone} onChange={handleChange}
              className="flex-1 h-full bg-transparent text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none" />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-[#4A4A4A] text-[14px] mb-2">{formConfig?.fields?.message?.label}</label>
          <textarea name="message" placeholder={formConfig?.fields?.message?.placeholder}
            value={formData.message} onChange={handleChange} rows={5}
            className="w-full rounded-md border border-[#D0D5DD] bg-none px-4 py-3 text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none focus:border-[#4D3D84] resize-none" />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="agreeToPolicy" id="agreeToPolicy"
            checked={formData.agreeToPolicy} onChange={handleChange}
            className="w-4 h-4 rounded border border-[#D0D5DD] accent-[#4D3D84]" />
          <label htmlFor="agreeToPolicy" className="text-[13px] text-[#575455]">
            You agree to our friendly{' '}
            <Link href="/privacy-policy" className="underline hover:text-[#4D3D84]">privacy policy</Link>.
          </label>
        </div>

        <button type="submit" disabled={!isFormValid() || isSubmitting}
          className="w-full h-[48px] rounded-md bg-[#4D3D84] text-white text-[15px] font-medium disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? 'Sending...' : formConfig?.submitText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
