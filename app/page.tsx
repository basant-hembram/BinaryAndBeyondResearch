import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';

export const metadata: Metadata = {
  title: 'Binary and Beyond Research - Market Research & Investment Advisory',
  description: 'Binary and Beyond Research delivers data-driven market research, panel services, and expert investment advisory to help businesses and investors make smarter decisions.',
  keywords: 'market research, investment advisory, data-driven insights, panel services, product testing, research analysis, Binary and Beyond Research',
};

import WhatMakes from '@/components/home/WhatMakes';
import OurExpertise from '@/components/home/OurExpertise';
import WhyBBR from '@/components/home/WhyBBR';
import WhyPeopleTrust from '@/components/home/WhyPeopleTrust';
import CaseStudies from '@/components/home/CaseStudies';
import Clients from '@/components/home/Clients';
import Testimonials from '@/components/home/Testimonials';
import ScrollAnimations from '@/components/common/ScrollAnimations';

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Hero />
      <WhatMakes />
      <OurExpertise />
      <WhyBBR />
      <WhyPeopleTrust />
      <CaseStudies />
      <Clients />
      <Testimonials />
    </>
  );
}
