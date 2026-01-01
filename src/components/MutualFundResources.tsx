import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faArrowTrendUp, faRankingStar, faArrowsRotate, faCalculator, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MutualFundResources = () => {
  const resources = [
    {
      icon: faChartLine,
      title: "Mutual Fund Trailing Returns",
      description: "Find out the best performing schemes across categories and time frame."
    },
    {
      icon: faArrowTrendUp,
      title: "Mutual Fund Volatility Ranking",
      description: "Find out the risk quotient of every scheme here. Learn More"
    },
    {
      icon: faRankingStar,
      title: "Mutual Fund Quartile Ranking",
      description: "Check the relative performance of the schemes here."
    },
    {
      icon: faArrowsRotate,
      title: "Rolling Return vs Category",
      description: "Find out the consistency of a fund performance over here."
    },
    {
      icon: faCalculator,
      title: "SIP Return Calculator",
      description: "What has an SIP in a particular scheme actually delivered for you. Check here."
    },
    {
      icon: faCalculator,
      title: "SWP Return Calculator",
      description: "How much is left in a scheme after taking out regular withdrawals."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#E9E9EB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#090914] mb-2">
            Want to know the <span className="text-[#E6AF1C] font-semibold">Most Suitable MF</span> for you? Explore
          </h2>
          <h3 className="text-3xl md:text-4xl">
            <span className="text-[#E6AF1C] font-semibold">Mutual Fund Research</span> <span className="text-[#090914]">Hub</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-[#E6AF1C] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#E6AF1C] rounded-lg p-3 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={resource.icon} className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1A3A] text-base mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
