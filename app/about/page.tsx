import ScrollAnimations from '@/components/common/ScrollAnimations';
import PageHero from '@/components/common/PageHero';
import AboutSection from '@/components/about/AboutSection';
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

