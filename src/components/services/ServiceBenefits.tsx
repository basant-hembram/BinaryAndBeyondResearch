import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faSackDollar, faHandshake, faMoneyBillTransfer, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const iconMap: Record<string, IconDefinition> = {
  faBullseye,
  faSackDollar,
  faHandshake,
  faMoneyBillTransfer
};

interface Benefit {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const ServiceBenefits = () => {
  const { benefits, whyChooseUs } = data.services;

  return (
    <div className="py-16 bg-gray-50">
      <div className="container max-md:px-4 mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-[38px]">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <h2 className="text-[26px] lg:text-[36px] text-[#0A1A3A]">
              {whyChooseUs.title}
            </h2>
            <h3 className="text-[26px] lg:text-[36px] font-semibold mb-[38px]">
              <span className="text-[#E6AF1C]">{whyChooseUs.subtitle}</span>
              <br className='hidden lg:hidden xl:block'></br>
              <span className="text-[#E6AF1C]">{whyChooseUs.subtitleLine2}</span>
            </h3>
            <p className="text-[#575455] text-[16px] lg:text-[18px] leading-[32px]">
              {whyChooseUs.description}
            </p>
          </div>

          {/* Right Benefits Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit: Benefit, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row gap-4"
                  >
                    <div className={`flex-shrink-0 w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center`}>
                      <FontAwesomeIcon icon={iconMap[benefit.icon]} className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[20px] mb-[12px] text-[#0A1A3A]">{benefit.title}</h4>
                      <p className="text-[#575455] text-[16px] lg:text-[18px] leading-[32px]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits;
