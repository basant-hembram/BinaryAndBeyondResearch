import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

interface ResultCard {
  label: string;
  sublabel: string;
  value: string;
  icon: string;
}

const iconMap: Record<string, any> = {
  faArrowUpRightDots,
  faHandPointRight,
};

const CalculatorResults = () => {
  const { calculatorResults } = data.calculator;
  const resultCards: ResultCard[] = calculatorResults.resultCards;

  return (
    <div className="py-16 bg-[#E9E9EB]">
      <div className="container mx-auto">
        <div className='flex flex-col-reverse xl:flex-col gap-[62px]'>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {resultCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-[#E6AF1C] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-start justify-center">
                    <FontAwesomeIcon icon={iconMap[card.icon]} className="text-[35px] text-[#E6AF1C]" />
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
              {calculatorResults.mutualFunds.title} <span className="text-[#E6AF1C] font-semibold">{calculatorResults.mutualFunds.titleHighlight}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[50px] max-w-4xl mx-auto">
              {calculatorResults.mutualFunds.recommendations.map((item, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-4">
                  <FontAwesomeIcon icon={iconMap[item.icon]} className="text-[#E6AF1C] text-[18px] mt-1" />
                  <p className="text-[#575455] text-[18px] font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResults;
