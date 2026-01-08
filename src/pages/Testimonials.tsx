import React from 'react';
import Banner from '../components/common/Banner';
import TestimonialCard from '../components/common/TestimonialCard';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Ankita Jain",
            role: "Co-Founder of Womenia",
            text: "We love LandingFolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
            image: "/images/ankita-jain.png"
        },
        {
            name: "Rahul Sharma",
            role: "Software Engineer",
            text: "We love LandingFolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
            image: "/images/rahul-sharma.png"
        },
        {
            name: "Sam John",
            role: "Business Owner",
            text: "We love LandingFolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
            image: "/images/sam-john.png"
        },
        {
            name: "Mohan Khanna",
            role: "Sales Manager",
            text: "We love LandingFolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
            image: "/images/mohan-khanna.png"
        }
    ];

    return (
        <div className="bg-white">
            <Banner
                title="Testimonials"
                breadcrumbs={[
                    { label: 'HOME', path: '/' },
                    { label: 'TESTIMONIALS', path: '/testimonials' }
                ]}
                backgroundImage="/images/testimonials-banner.jpg"
            />

            {/* Main Content */}
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] mb-4">
                            <span className="text-[#E6AF1C]">Don't Just </span>
                            <span className="text-[#0A1A3A] font-semibold">Take Our Words</span>
                        </h2>
                        <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[20px]">
                            Everything you need to know about the Finyzer Assets.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white">
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
};

export default Testimonials;