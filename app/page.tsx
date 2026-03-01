import Hero from '@/components/home/Hero';
import WhatMakes from '@/components/home/WhatMakes';
import OurExpertise from '@/components/home/OurExpertise';
import WhyBBR from '@/components/home/WhyBBR';
import WhyPeopleTrust from '@/components/home/WhyPeopleTrust';
import CaseStudies from '@/components/home/CaseStudies';
import Clients from '@/components/home/Clients';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
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
