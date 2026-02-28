import Hero from '@/components/home/Hero';
import WhatMakes from '@/components/home/WhatMakes';
import OurExpertise from '@/components/home/OurExpertise';
import SIPCalculator from '@/components/home/SIPCalculator';
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
      <SIPCalculator />
      <MutualFundResources />
      <Founders />
      <Testimonials />
      <FAQ />
    </>
  );
}
