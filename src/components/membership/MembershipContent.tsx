'use client';

import { useState } from 'react';
import { data } from '@/data';

export default function MembershipContent() {
  const [phone, setPhone] = useState('+91');
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const suffix = value.startsWith('+91')
      ? value.slice(3).replace(/[^0-9]/g, '').slice(0, 10)
      : '';
    const newPhone = '+91' + suffix;
    setPhone(newPhone);
    setPhoneError(suffix && suffix.length < 10 ? 'Must be at least 10 digits' : '');
  };
    const membershipData = (data as any).membership;
    const hero = membershipData?.hero;
    const registration = membershipData?.registration;
    const form = membershipData?.form;

    return (
        <section className="relative overflow-hidden py-8 md:py-10 lg:py-12">
            <div
                className="pointer-events-none absolute right-0 top-8 h-[280px] w-[280px] rounded-full blur-3xl md:h-[380px] md:w-[380px]"
                style={{ background: 'radial-gradient(circle, rgba(163,39,135,0.28) 0%, rgba(163,39,135,0) 72%)' }}
            />

            <div className="container max-md:px-4 mx-auto relative z-10">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-[#151D26] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.3] tracking-[-0.02em]" data-gsap="fade-up">
                        {hero?.title}
                    </h1>
                    {hero?.paragraphs?.map((p: string, i: number) => (
                        <p key={i} className="mt-4 text-[#2A2A2A] text-[15px] md:text-[17px] leading-[1.8]" data-gsap="fade-up">
                            {p}
                        </p>
                    ))}
                </div>

                {/* Two-column section */}
                <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                    {/* Left */}
                    <div>
                        <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] font-semibold" data-gsap="fade-right">
                            {registration?.title}{' '}
                            <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold" data-gsap="gradient-shine">
                                {registration?.titleHighlight}
                            </span>
                        </h2>

                        {registration?.paragraphs?.map((p: string, i: number) => (
                            <p key={i} className="mt-4 text-[#151D26] text-[14px] lg:text-[16px] leading-relaxed" data-gsap="fade-right">
                                {p}
                            </p>
                        ))}

                        <div className="mt-8 overflow-hidden rounded-2xl" data-gsap="scale-up">
                            <img
                                src={registration?.image}
                                alt="Register Now"
                                className="h-[240px] md:h-[290px] w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right — form */}
                    <div data-gsap="fade-left">
                        <div className="space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.name?.label}</label>
                                <input
                                    type="text"
                                    placeholder={form?.fields?.name?.placeholder}
                                    className="w-full h-[48px] rounded-md border border-[#C9BEB0] bg-transparent px-4 text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none"
                                />
                            </div>

                            {/* Age */}
                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.age?.label}</label>
                                <input
                                    type="number"
                                    placeholder={form?.fields?.age?.placeholder}
                                    className="w-full h-[48px] rounded-md border border-[#C9BEB0] bg-transparent px-4 text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none"
                                />
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.gender?.label}</label>
                                <select className="w-full h-[48px] rounded-md border border-[#C9BEB0] bg-transparent px-4 text-[14px] text-[#8A8A8A] outline-none appearance-none">
                                    <option value="" disabled selected>{form?.fields?.gender?.placeholder}</option>
                                    {form?.fields?.gender?.options?.map((opt: string) => (
                                        <option key={opt} value={opt} className="text-[#151D26]">{opt}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.email?.label}</label>
                                <input
                                    type="email"
                                    placeholder={form?.fields?.email?.placeholder}
                                    className="w-full h-[48px] rounded-md border border-[#C9BEB0] bg-transparent px-4 text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.phone?.label}</label>
                                <div className={`w-full h-[48px] rounded-md border px-3 flex items-center gap-2 text-[14px] focus-within:border-[#4D3D84] ${phoneError ? 'border-red-400' : 'border-[#C9BEB0]'}`}>
                                    <span className="text-[#4A4A4A] shrink-0 pr-2 border-r border-[#C9BEB0]">{form?.fields?.phone?.code} ▾</span>
                                    <input
                                        type="tel"
                                        placeholder={form?.fields?.phone?.placeholder}
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        className="flex-1 h-full bg-transparent text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none"
                                    />
                                </div>
                                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                            </div>

                            {/* ZIP */}
                            <div>
                                <label className="block text-[#4A4A4A] text-[14px] mb-2">{form?.fields?.zip?.label}</label>
                                <input
                                    type="text"
                                    placeholder={form?.fields?.zip?.placeholder}
                                    className="w-full h-[48px] rounded-md border border-[#C9BEB0] bg-transparent px-4 text-[14px] text-[#151D26] placeholder:text-[#8A8A8A] outline-none"
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full h-[48px] rounded-md bg-[#4D3D84] text-white text-[16px] font-medium"
                            >
                                {form?.submitText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
