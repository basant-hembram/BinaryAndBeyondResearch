'use client';

import { useState, useEffect } from 'react';
import { data } from '@/data';

interface ResearchAnalysisItem {
    title: string;
    description: string;
    image: string;
}

export default function ResearchAnalysisServices() {
    const servicesData = data.services as any;
    const section = servicesData.researchAnalysis;
    const fallbackItems = (section?.items ?? []) as ResearchAnalysisItem[];
    const [items, setItems] = useState<ResearchAnalysisItem[]>(fallbackItems);

    useEffect(() => {
        fetch('/api/services')
            .then((r) => r.json())
            .then((json) => {
                if (json.success && json.data.length > 0) setItems(json.data);
            })
            .catch(() => {/* keep static fallback */});
    }, []);

    return (
        <section className="relative overflow-hidden py-10 md:py-14 lg:py-16">

            <div className="container max-md:px-4 mx-auto relative z-10">
                <div className="max-w-4xl">
                    <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] lg:mb-[17px] xl:mb-[13px] font-semibold uppercase" data-gsap="fade-up">
                        <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold tracking-[0.2em]" data-gsap="gradient-shine">
                            {section?.title}
                        </span>
                    </h2>
                    <p className="text-[#575455] text-[14px] lg:text-[16px] leading-relaxed" data-gsap="fade-up">
                        {section?.description}
                    </p>
                </div>

                <div className="relative mt-14 md:mt-16">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#CFCFD1]" />
                    {items.map((item, index) => {
                        const imageFirst = index % 2 === 0;

                        return (
                            <article key={item.title} className={`${index !== items.length - 1 ? 'border-b border-[#CFCFD1]' : ''}`}>
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className={`px-0 py-7 md:px-8 md:py-10 lg:px-10 ${imageFirst ? '' : 'md:order-2'}`}>
                                        <div className="overflow-hidden rounded-2xl" data-gsap={imageFirst ? 'fade-left' : 'fade-right'}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-[220px] w-full object-cover md:h-[260px] lg:h-[300px]"
                                            />
                                        </div>
                                    </div>

                                    <div className={`px-0 py-7 md:px-8 md:py-10 lg:px-10 flex items-center ${imageFirst ? '' : 'md:order-1'}`}>
                                        <div data-gsap={imageFirst ? 'fade-right' : 'fade-left'}>
                                            <h3 className="text-[#0A1A3A] text-[28px] md:text-[38px] font-semibold leading-[1.2] tracking-[-0.02em]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-4 text-[#2A2A2A] text-[14px] md:text-[16px] leading-[1.75]">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
