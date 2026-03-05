import type { Metadata } from 'next';
import ScrollAnimations from '@/components/common/ScrollAnimations';
import PageHero from '@/components/common/PageHero';
import HowWeGuideYou from '@/components/our-work/HowWeGuideYou';

export const metadata: Metadata = {
  title: 'Our Work | Binary and Beyond Research',
  description: 'Discover how Binary and Beyond Research guides clients from research design to actionable insights — see our proven methodology and success stories across industries.',
  keywords: 'our work, research methodology, case studies, client success, market research process, Binary and Beyond Research',
};

import { data } from '@/data';

export default function OurWork() {
  const ourWorkData = (data as any).ourWork;

  return (
    <div className="bg-none">
      <ScrollAnimations />
      <PageHero
        title={ourWorkData.banner.title}
        subtitle={ourWorkData.banner.subtitle}
      />
      <HowWeGuideYou />
    </div>
  );
}

