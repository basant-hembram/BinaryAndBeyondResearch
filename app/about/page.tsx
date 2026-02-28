import Banner from '@/components/common/Banner';
import AboutSection from '@/components/about/AboutSection';
import WhyTrustUs from '@/components/about/WhyTrustUs';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import OurFounders from '@/components/about/OurFounders';
import { data } from '@/data';

export default function AboutUs() {
  const aboutData = data.about;
  
  return (
    <div className="bg-white">
      <Banner 
        title={aboutData.banner.title}
        breadcrumbs={aboutData.banner.breadcrumbs}
        backgroundImage={aboutData.banner.backgroundImage}
      />
      <AboutSection />
      <WhyTrustUs />
      <WhyChooseUs />
      <OurFounders />
    </div>
  );
}
