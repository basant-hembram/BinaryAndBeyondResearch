import type { Metadata } from 'next';
import ScrollAnimations from '@/components/common/ScrollAnimations';
import PageHero from '@/components/common/PageHero';
import AboutSection from '@/components/about/AboutSection';

export const metadata: Metadata = {
  title: 'About Us | Binary and Beyond Research',
  description: 'Learn about Binary and Beyond Research — our mission, core principles, and expert team dedicated to delivering industry-leading market research and investment advisory services.',
  keywords: 'about Binary and Beyond Research, our team, market research experts, investment advisory, AMFI-registered distributor, research company',
};

import WhyChooseUs from '@/components/about/WhyChooseUs';
import OurCorePrinciples from '@/components/about/OurCorePrinciples';
import CaseStudies from '@/components/home/CaseStudies';
import { data } from '@/data';

export default function AboutUs() {
  const aboutData = data.about as any;

  return (
    <div className="bg-none">
      <ScrollAnimations />
      <PageHero title={aboutData.banner.title} subtitle={aboutData.banner.subtitle} />
      <AboutSection />
      <WhyChooseUs />
      <OurCorePrinciples />
      <CaseStudies />
    </div>
  );
}

