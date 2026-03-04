import AboutSection from '@/components/about/AboutSection';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import OurCorePrinciples from '@/components/about/OurCorePrinciples';
import CaseStudies from '@/components/home/CaseStudies';
import { data } from '@/data';

export default function AboutUs() {
  const aboutData = data.about as any;

  return (
    <div className="bg-white">
      {/* Inline Hero */}
      <section className="pt-12 pb-6 bg-white">
        <div className="container max-md:px-4 mx-auto">
          <h1 className="text-[48px] lg:text-[56px] xl:text-[70px] font-normal text-[#151D26] mb-2 leading-tight">
            {aboutData.banner.title}
          </h1>
          <p className="text-[#151D26] text-[15px] lg:text-[18px]">
            {aboutData.banner.subtitle}
          </p>
        </div>
      </section>
      <AboutSection />
      <WhyChooseUs />
      <OurCorePrinciples />
      <CaseStudies />
    </div>
  );
}

