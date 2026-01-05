import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

interface ResultCard {
  label: string;
  sublabel: string;
  value: string;
  icon: any;
}

const resultCards: ResultCard[] = [
  {
    label: 'Your targeted Wealth Amount',
    sublabel: '(Inflation adjusted)',
    value: '₹ 275,800,768',
    icon: faArrowUpRightDots
  },
  {
    label: 'Growth of your Savings Amount',
    sublabel: '(12% per annum)',
    value: '₹ 26,399,810',
    icon: faArrowUpRightDots
  },
  {
    label: 'Final Targeted Amount',
    sublabel: '(Minus growth of your savings amount)',
    value: '₹ 249,400,958',
    icon: faArrowUpRightDots
  },
  {
    label: 'Number of years you need to save',
    sublabel: '',
    value: '35 Years',
    icon: faArrowUpRightDots
  },
  {
    label: 'Monthly SIP investment required to become Crorepati',
    sublabel: '',
    value: '₹ 45,257',
    icon: faArrowUpRightDots
  },
  {
    label: 'total Amount Invested through SIP in 35 years',
    sublabel: '',
    value: '₹ 19,007,940',
    icon: faArrowUpRightDots
  },
  {
    label: 'Total Growth Amount',
    sublabel: '',
    value: '₹ 19,007,940',
    icon: faArrowUpRightDots
  }
];

const CalculatorResults = () => {
  return (
    <div className="py-16 bg-[#E9E9EB]">
      <div className="container mx-auto px-4">
        <div className='flex flex-col-reverse xl:flex-col gap-[62px]'>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {resultCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-[#E6AF1C] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-start justify-center">
                    <FontAwesomeIcon icon={card.icon} className="text-[35px] text-[#E6AF1C]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#575455] text-[16px] mb-1 leading-tight">
                      {card.label}
                    </h4>
                    {card.sublabel && (
                      <p className="text-[#E6AF1C] text-[16px] mb-3">
                        {card.sublabel}
                      </p>
                    )}
                    <p className="text-[#0A1A3A] text-[20px] font-semibold">
                      {card.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <h2 className="text-[26px] lg:text-[36px] text-center text-[#0A1A3A] mb-[20px]">
              Mutual Funds <span className="text-[#E6AF1C] font-semibold">that can make you a Crorepati</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[50px] max-w-4xl mx-auto">
              {/* Top Performing Mutual Funds */}
                 <div className="flex items-start gap-2 md:gap-4">
                  <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[18px] mt-1" />
                  <p className="text-[#575455] text-[18px] font-medium">Top Performing Mutual Funds to Invest</p>
                </div>

              {/* Top Performing SIP Funds */}
                <div className="flex items-start gap-2 md:gap-4">
                  <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-[18px] mt-1" />
                  <p className="text-[#575455] text-[18px] font-medium">Top Performing SIP Funds to Invest</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResults;
