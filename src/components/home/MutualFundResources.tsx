import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faHandHoldingDollar, faSackDollar, faCoins, faMoneyBillTrendUp, faMoneyBillTransfer, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MutualFundResources = () => {
  const resources = [
    {
      icon: faArrowUpRightDots,
      title: "Mutual Fund Trailing Returns",
      description: "Find out the best performing schemes across categories and time frame."
    },
    {
      icon: faHandHoldingDollar,
      title: "Mutual Fund Volatility Ranking",
      description: "Find out the risk quotient of every scheme here. Learn More"
    },
    {
      icon: faSackDollar,
      title: "Mutual Fund Quartile Ranking",
      description: "Check the relative performance of the schemes here."
    },
    {
      icon: faCoins,
      title: "Rolling Return vs Category",
      description: "Find out the consistency of a fund performance over here."
    },
    {
      icon: faMoneyBillTrendUp,
      title: "SIP Return Calculator",
      description: "What has an SIP in a particular scheme actually delivered for you. Check here."
    },
    {
      icon: faMoneyBillTransfer,
      title: "SWP Return Calculator",
      description: "How much is left in a scheme after taking out regular withdrawals."
    }
  ];

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
      <div className="container mx-auto px-4">
        <div className="text-center mb-[53px]">
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#090914] mb-2">
            Want to know the <span className="text-[#E6AF1C] font-semibold">Most Suitable MF</span> for you? Explore
          </h2>
          <h3 className="text-[26px] lg:text-[32px] xl:text-[36px]">
            <span className="text-[#E6AF1C] font-semibold">Mutual Fund Research</span> <span className="text-[#090914]">Hub</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[44px] md:mb-[55px] xl:mb-[65px]">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-[#E6AF1C] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={resource.icon} className="text-[#E6AF1C] text-[22px]" />
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
