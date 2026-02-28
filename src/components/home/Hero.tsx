'use client';

import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const heroData = data.hero;
  const router = useRouter();

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white pt-16 lg:pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-[500] !leading-[1.3]">
              <span className="block text-[#4A4444]">{heroData.title.line1}</span>
              <span className="block font-[600] bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent">
                {heroData.title.line2}
              </span>
              <span className="block text-[#4A4444]">{heroData.title.line3}</span>
            </h1>
            
            <p className="text-base lg:text-lg text-[#575455] leading-relaxed">
              {heroData.subtitle}
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-[#403373] hover:bg-purple-800 text-white px-8 py-6 text-base font-medium rounded-md flex items-center gap-2"
                onClick={() => router.push('/contact')}
              >
                {heroData.ctaButton.text}
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">

          </div>
        </div>

        {/* Stats Section - White Card */}
        <div className="mt-16 lg:mt-20 max-w-7xl -mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Branding */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-[400] text-[#0A1A3A] mb-2">
                  {heroData.branding.title}
                </h3>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl lg:text-3xl font-[400] bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent">
                    {heroData.branding.companyName}
                  </h2>
                  <span className="text-2xl lg:text-3xl font-[400] text-[#0A1A3A]">
                    {heroData.branding.subtitle}
                  </span>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="grid grid-cols-2 gap-8">
                {heroData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center ${index > 0 ? 'border-l-2 border-gray-200 pl-8' : ''}`}
                  >
                    <p className="text-3xl lg:text-4xl font-[500] bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm lg:text-base text-[#4A4444] font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 overflow-hidden shadow-2xl">
        <img
          src={heroData.image.src}
          alt={heroData.image.alt}
          className="h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
