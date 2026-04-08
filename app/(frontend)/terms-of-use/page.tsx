import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import ScrollAnimations from '@/components/common/ScrollAnimations';
import MatrixRain from '@/components/home/MatrixRain';
import { data } from '@/data';

export const metadata: Metadata = {
    title: 'Terms of Use | Binary and Beyond Research',
    description: 'Review the terms and conditions governing your use of the Binary and Beyond Research website and services. By using our site, you agree to these terms.',
    keywords: 'terms of use, terms and conditions, Binary and Beyond Research terms, website terms',
};

export default function TermsOfUse() {
    const termsOfUseData = data.termsOfUse as any;

    return (
        <div className="bg-none">
            <ScrollAnimations />
            <PageHero
                title={termsOfUseData.pageHero.title}
                subtitle={termsOfUseData.pageHero.subtitle}
            />

            {/* Content Section */}
            <section className="">
                <div className="container max-md:px-4 mx-auto py-16 lg:py-20">                  

                    {/* Sections */}
                    <div className="space-y-6">
                        {termsOfUseData.sections.map((section: any, index: number) => (
                            <div
                                key={section.id}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                                data-gsap="fade-up"
                            >
                                {/* Section header */}
                                <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100 bg-white">
                                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#6B2E7E] flex items-center justify-center text-white text-[13px] font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-[17px] lg:text-[19px] font-semibold text-[#0A1A3A]">
                                        {section.title}
                                    </h3>
                                </div>

                                {/* Section body */}
                                <div className="px-6 py-5 border-l-4 border-[#6B2E7E]">
                                    {section.paragraphs.map((paragraph: string, pIndex: number) => (
                                        <p
                                            key={pIndex}
                                            className="text-[#575455] text-[15px] lg:text-[16px] leading-relaxed mb-4 last:mb-0"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact footer note */}
                    <div className="relative mt-12 rounded-xl bg-[#0e0b1a] px-8 py-7 overflow-hidden" data-gsap="fade-up">
                        <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_60%_40%,rgba(96,47,123,0.25)_0%,rgba(53,53,114,0.15)_50%,transparent_80%)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,rgba(14,11,26,0.35)_0%,rgba(14,11,26,0.72)_100%)] before:z-[4] before:pointer-events-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[30%] after:bg-[linear-gradient(to_top,#0e0b1a,transparent)] after:z-[4] after:pointer-events-none">
                            <MatrixRain />
                        </div>
                        <div className="relative z-[5] flex flex-col md:flex-row md:items-center gap-4 justify-between overflow-hidden">
                            <p className="text-white text-[18px]">
                                Questions about these Terms and Conditions?
                            </p>
                            <a
                                href="/contact"
                                className="relative overflow-hidden bg-[linear-gradient(135deg,#A32787,#6B2E7E,#602F7B,#353572)] [background-size:200%_200%] animate-grad-shift text-white border-none py-4 px-9 rounded-full font-poppins text-[0.95rem] font-bold tracking-[0.03em] cursor-pointer shadow-[0_0_30px_rgba(163,39,135,0.45)] transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(163,39,135,0.65)] before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transition-[background] before:duration-[250ms] hover:before:bg-white/[0.06]"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
