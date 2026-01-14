import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faHandHoldingDollar, faSackDollar, faCoins, faMoneyBillTrendUp, faMoneyBillTransfer, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const iconMap: Record<string, any> = {
  faArrowUpRightDots,
  faHandHoldingDollar,
  faSackDollar,
  faCoins,
  faMoneyBillTrendUp,
  faMoneyBillTransfer,
};

const MutualFundResources = () => {
  const { mutualFundResources } = data.home;

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
      <div className="container mx-auto">
        <div className="text-center mb-[53px]">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#090914] mb-2">
            {mutualFundResources.title}
          </h2>
          <h3 className="text-[26px] lg:text-[32px] xl:text-[36px]">
            {mutualFundResources.titleHighlight}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[44px] md:mb-[55px] xl:mb-[65px]">
          {mutualFundResources.resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-2xl p-6 border-2 border-[#E6AF1C] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={iconMap[resource.icon]} className="text-[#E6AF1C] text-[22px]" />
                <div>
                  <h4 className="font-bold text-[#0A1A3A] text-[16px] mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#00A896] hover:bg-[#008c7a] text-white px-8 py-6 rounded-lg">
            Explore MF Research
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MutualFundResources;
