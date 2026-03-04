import ScrollAnimations from '@/components/common/ScrollAnimations';
import PageHero from '@/components/common/PageHero';
import HowWeGuideYou from '@/components/our-work/HowWeGuideYou';
import { data } from '@/data';

export default function OurWork() {
  const ourWorkData = (data as any).ourWork;

  return (
    <div className="bg-white">
      <ScrollAnimations />
      <PageHero
        title={ourWorkData.banner.title}
        subtitle={ourWorkData.banner.subtitle}
      />
      <HowWeGuideYou />
    </div>
  );
}

