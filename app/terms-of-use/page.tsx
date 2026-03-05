import type { Metadata } from 'next';
import Banner from '@/components/common/Banner';
import { data } from '@/data';

export const metadata: Metadata = {
  title: 'Terms of Use | Binary and Beyond Research',
  description: 'Review the terms and conditions governing your use of the Binary and Beyond Research website and services. By using our site, you agree to these terms.',
  keywords: 'terms of use, terms and conditions, Binary and Beyond Research terms, website terms',
};

export default function TermsOfUse() {
    const termsOfUseData = data.termsOfUse;

    return (
        <div className="bg-none">
            <Banner
                title={termsOfUseData.title}
                breadcrumbs={termsOfUseData.breadcrumbs}
                backgroundImage={termsOfUseData.backgroundImage}
            />

            {/* Content Section */}
            <section className="container max-md:px-4 mx-auto py-16">
                <div className="">
                    <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-8">
                        {termsOfUseData.title} <span className="text-[#E6AF1C] font-semibold">{termsOfUseData.titleHighlight}</span>
                    </h2>

                    {/* Sections */}
                    {termsOfUseData.sections.map((section) => (
                        <div key={section.id} className="mb-8">
                            <h3 className="text-[18px] font-semibold text-[#E6AF1C] mb-4">{section.title}</h3>
                            {section.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-[#575455] text-[16px] leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
