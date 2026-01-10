import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHandHoldingDollar, faLandmark, faChartLine, faMoneyBillTransfer, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

const offerings = [
  { icon: faHandHoldingDollar, title: 'Readymade Mutual Fund Baskets' },
  { icon: faLandmark, title: 'Free Financial Planner' },
  { icon: faChartLine, title: 'Expert Rated Schemes' },
  { icon: faLandmark, title: 'Govt Based Investment' },
  { icon: faMoneyBillTransfer, title: 'Instant Redemption' },
  { icon: faPiggyBank, title: 'Family Investment Tracker' },
];

const OfferingsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-start">
        <div className='col-span-2'>
          <h2 className="text-[24px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A]">
            Offerings
          </h2>
          <h2 className="text-[24px] lg:text-[32px] xl:text-[36px] font-semibold text-[#E6AF1C] mb-6">
            For Your Clients
          </h2>
          <p className="text-[#575455] mb-8 leading-relaxed">
            Our commitment to excellence, cutting-edge technology, and personalized
            support ensures that you have a reliable ally in navigating the complexities of the
            financial world.
          </p>
          <div className="lg:hidden grid grid-cols-1 gap-6 mb-[45px]">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={offering.icon} className="text-white text-lg" />
                </div>
                <h3 className="font-medium text-[#090914] text-[16px]">{offering.title}</h3>
              </div>
            ))}
          </div>
          <Button className="bg-[#01A382] hover:bg-[#018f72] text-white text-[16px] px-8">
            Know More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
        </div>
        <div className="hidden col-span-4 lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={offering.icon} className="text-white text-lg" />
              </div>
              <h3 className="font-medium text-[#090914] text-[16px]">{offering.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
