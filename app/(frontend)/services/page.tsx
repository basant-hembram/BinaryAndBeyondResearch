import type { Metadata } from 'next';
import ScrollAnimations from '@/components/common/ScrollAnimations';
import PageHero from '@/components/common/PageHero';
import ResearchAnalysisServices from '@/components/services/ResearchAnalysisServices';

export const metadata: Metadata = {
  title: 'Services | Binary and Beyond Research',
  description: 'Explore our suite of research and advisory services — product testing, healthcare market research, brand assessments, market segmentation, advertising testing, and mutual fund advisory.',
  keywords: 'market research services, product testing, healthcare market research, brand assessments, market segmentation, advertising testing, mutual fund advisory, Binary and Beyond Research',
};

import { data } from '@/data';

export default function Services() {
  const servicesData = data.services as any;

  return (
    <div className="bg-none">
      <ScrollAnimations />
      <PageHero title={servicesData.pageHero?.title} subtitle={servicesData.pageHero?.subtitle} />
      <ResearchAnalysisServices />
    </div>
  );
}
