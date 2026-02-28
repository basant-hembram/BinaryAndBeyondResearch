import Hero from '@/components/home/Hero';
import WhatMakes from '@/components/home/WhatMakes';
import OurExpertise from '@/components/home/OurExpertise';
import WhyBBR from '@/components/home/WhyBBR';
import MutualFundResources from '@/components/home/MutualFundResources';
import Founders from '@/components/home/Founders';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <WhatMakes />
      <OurExpertise />
      <WhyBBR />
      <MutualFundResources />
      <Founders />
      <Testimonials />
      <FAQ />
    </>
  );
}
