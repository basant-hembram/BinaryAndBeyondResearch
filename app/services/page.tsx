import ScrollAnimations from '@/components/common/ScrollAnimations';
import PageHero from '@/components/common/PageHero';
import ResearchAnalysisServices from '@/components/services/ResearchAnalysisServices';
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
