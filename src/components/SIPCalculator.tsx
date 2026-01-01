import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faCamera, faUmbrella, faMoneyBill, faSackDollar, faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SIPCalculator = () => {
  const calculators = [
    { icon: faCalculator, title: "SIP Calculator" },
    { icon: faChartLine, title: "Step-Up SIP Calculator" },
    { icon: faCamera, title: "Lumpsum Calculator" },
    { icon: faSackDollar, title: "Goal Planner" },
    { icon: faUmbrella, title: "Retirement Planner" },
    { icon: faMoneyBill, title: "Financial Planning" }
  ];

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#0A1A3A] mb-2">
                Know how much you might need, Do goal planning with
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-[#E6AF1C]">
                Finyser Calculators
              </h3>
            </div>

            <p className="text-gray-600 text-sm">
              Zero Paperwork- Zero hassle - 100% Guidance
            </p>

            {/* Calculators Grid - 2 columns */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {calculators.map((calc, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-[#E6AF1C] rounded-full p-3 flex items-center justify-center w-10 h-10 flex-shrink-0">
                    <FontAwesomeIcon icon={calc.icon} className="text-white text-sm" />
                  </div>
                  <span className="text-[#0A1A3A] font-medium text-sm">{calc.title}</span>
                </div>
              ))}
            </div>

            <Button 
              className="bg-[#00A896] hover:bg-[#008c7a] text-white px-8 py-6 rounded-lg"
            >
              Calculate your Wealth
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative pl-[100px] md:pl-[80px]">
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

export default SIPCalculator;
