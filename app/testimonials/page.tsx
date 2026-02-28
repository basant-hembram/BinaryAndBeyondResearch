import React from 'react';
import Banner from '@/components/common/Banner';
import TestimonialCard from '@/components/common/TestimonialCard';
import { data } from '@/data';

export default function Testimonials() {
    const testimonialsData = data.testimonials;

    return (
        <div className="bg-white">
            <Banner
                title={testimonialsData.title}
                breadcrumbs={testimonialsData.breadcrumbs}
                backgroundImage={testimonialsData.backgroundImage}
            />

            {/* Main Content */}
            <div className="py-16 md:py-24">
                <div className="container max-md:px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-4">
                            <span className="text-[#E6AF1C]">{testimonialsData.sectionTitle} </span>
                            <span className="text-[#0A1A3A] font-semibold">{testimonialsData.sectionTitleHighlight}</span>
                        </h2>
                        <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px]">
                            {testimonialsData.sectionDescription}
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                        {testimonialsData.testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white">
                                <TestimonialCard
                                    name={testimonial.name}
                                    role={testimonial.role}
                                    text={testimonial.text}
                                    image={testimonial.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
