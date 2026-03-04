import Link from 'next/link';
import { data } from '../../data';

const { about: aboutData } = data;

const AboutSection = () => {
  const { aboutSection } = aboutData as any;

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container max-md:px-4 mx-auto">
        <div className="grid lg:grid-cols-[60%_1fr] gap-12 items-start">
          {/* Left */}
          <div data-gsap="fade-left">
            <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] lg:mb-[17px] xl:mb-[13px] font-semibold">
              {aboutSection.headingStart}{' '} <br className='block md:hidden'></br> <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold" data-gsap="gradient-shine">{aboutSection.headingHighlight}</span>
            </h2>
            <img
              src={aboutSection.image.src}
              alt={aboutSection.image.alt}
              className="rounded-2xl w-full h-[240px] lg:h-[280px] object-cover"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col h-full" data-gsap="fade-right">
            {aboutSection.description.map((para: string, i: number) => (
              <p key={i} className="text-[#151D26] text-[14px] lg:text-[18px] leading-relaxed mb-4">
                {para}
              </p>
            ))}
            <Link
              href={aboutSection.ctaLink}
              className="text-[#1F2541] font-semibold text-[16px] underline underline-offset-4 mt-2 w-fit hover:opacity-80 transition-opacity"
            >
              {aboutSection.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
