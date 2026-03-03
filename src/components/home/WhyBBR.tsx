'use client';

import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faCamera, faUmbrella, faMoneyBill, faSackDollar, faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';
import { useRouter } from 'next/navigation';

const iconMap: Record<string, any> = {
  faCalculator,
  faCamera,
  faUmbrella,
  faMoneyBill,
  faSackDollar,
  faChartLine,
};

const WhyBBR = () => {
  const { whyBBR } = data.home;
  const router = useRouter();

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white">
      <div className="container max-md:px-4 mx-auto">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="" data-gsap="fade-left">
            <div>
              <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] lg:mb-[17px] xl:mb-[13px] font-semibold">
                {whyBBR.title} <br className='block md:hidden'></br> <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold" data-gsap="gradient-shine">
                  {whyBBR.titleHighlight}
                </span>
              </h2>
            </div>

            <p className="text-[#575455] text-[16px] lg:text-[18px] xl:text-[18px] pt-[14px] lg:pt-[27px] xl:pt-[19px] mb-[34px] lg:mb-[28px] xl:mb-[28px]">
              Binary and Beyond Research delivers independent, data-driven market insights backed by deep industry expertise and disciplined analysis. Our transparent approach and consistent performance help investors make informed and confident decisions.
            </p>

            {/* Calculators Grid - 2 columns */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {whyBBR.calculators.map((calc) => (
                <div key={calc.id} className="flex items-center gap-3">
                  <div className="bg-[#6B2E7E] rounded-full p-3 flex items-center justify-center w-10 h-10 flex-shrink-0">
                    <FontAwesomeIcon icon={iconMap[calc.icon]} className="text-white text-sm" />
                  </div>
                  <span className="text-[#0A1A3A] font-medium text-sm">{calc.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:max-w-[620px] mx-auto pl-[100px] md:pl-[80px]" data-gsap="fade-right">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="/images/finyser-calculator.avif"
                alt="Financial workspace with calculator and charts"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Analytics Card Overlay */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-8 bg-white rounded-xl shadow-xl p-4 w-48">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#0A1A3A] rounded-full p-2">
                  <FontAwesomeIcon icon={faChartLine} className="text-white text-xs" />
                </div>
                <div>
                  <h4 className="text-[#0A1A3A] font-bold text-sm">Analytics</h4>
                  <p className="text-gray-500 text-xs">Real time report</p>
                </div>
              </div>
              <div className="flex items-end gap-1 h-16">
                <div className="bg-gray-200 w-3 h-4 rounded-sm"></div>
                <div className="bg-gray-200 w-3 h-6 rounded-sm"></div>
                <div className="bg-gray-200 w-3 h-5 rounded-sm"></div>
                <div className="bg-gray-200 w-3 h-8 rounded-sm"></div>
                <div className="bg-gray-200 w-3 h-6 rounded-sm"></div>
                <div className="bg-[#FF6B6B] w-3 h-12 rounded-sm"></div>
                <div className="bg-[#4285F4] w-3 h-16 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBBR;
