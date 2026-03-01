'use client';

import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faHandHoldingDollar, faSackDollar, faCoins, faMoneyBillTrendUp, faMoneyBillTransfer, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';
import { useRouter } from 'next/navigation';

const iconMap: Record<string, any> = {
  faArrowUpRightDots,
  faHandHoldingDollar,
  faSackDollar,
  faCoins,
  faMoneyBillTrendUp,
  faMoneyBillTransfer,
};

const WhyPeopleTrust = () => {
  const { whyPeopleTrust } = data.home;
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 bg-[#E9E9EB] relative overflow-hidden">
      {/* Top Left Circle */}
      <img
        src="/images/top-left-circle.png"
        alt=""
        className="absolute left-0 top-0 w-64 h-64 pointer-events-none"
      />

      {/* Bottom Right Circle */}
      <img
        src="/images/bottom-right-circle.png"
        alt=""
        className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none"
      />
      <div className="container max-md:px-4 mx-auto">
        <div className="text-center mb-[53px]">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-[15px] lg:mb-[17px] xl:mb-[13px] font-semibold">
            {whyPeopleTrust.title} <br className='block md:hidden'></br> <span className="bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent font-semibold">{whyPeopleTrust.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {whyPeopleTrust.reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-white rounded-2xl p-6 border border-[#602F7B] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={iconMap[reason.icon]} className="text-[#602F7B] text-[22px]" />
                <div>
                  <h4 className="font-bold text-[#090914] text-[16px] mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-[#575455] text-[16px] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPeopleTrust;
