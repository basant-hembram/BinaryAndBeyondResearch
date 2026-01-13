import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faBuildingColumns, faArrowUpRightDots, faPeopleRoof, faCoins, faBriefcaseMedical, faCarBurst, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/button';

const FinancialProducts = () => {
  const products = [
    {
      icon: faHandHoldingDollar,
      title: "Mutual Fund"
    },
    {
      icon: faBuildingColumns,
      title: "Corporate FD"
    },
    {
      icon: faArrowUpRightDots,
      title: "Demat-trading"
    },
    {
      icon: faPeopleRoof,
      title: "Term Insurance"
    },
    {
      icon: faBriefcaseMedical,
      title: "Health Insurance"
    },
    {
      icon: faCarBurst,
      title: "Motor Insurance"
    },
    {
      icon: faCoins,
      title: "Loan Against Securities"
    }    
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#E9E9EB] relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:items-center">
          {/* Left Content */}
          <div className="md:w-[40%]">
             <div>
              <p className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A]">Our Suite Of</p>
              <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-[#E6AF1C] mb-[30px] lg:mb-[18px] xl:mb-[24px]">
                Financial Products
              </h2>
            </div>

            <p className="text-[#575455] text-[16px] lg:text-[16px] xl:text-[18px] !leading-[32px]">
              At Finyzer Assets, we offer a diverse array of innovative financial products, from advanced investment tools to comprehensive portfolio management solutions. Our products empower distributors to deliver exceptional value to their clients and drive growth.
            </p>

            <div className="pt-[42px] lg:pt-[95px] xl:pt-[59px]">
              <Button 
                size="lg" 
                className="bg-[#00A896] hover:bg-[#008F7E] text-white flex items-center gap-2"
              >
                Explore Product
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>

          {/* Right Products Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-6 md:w-[60%]">
            {products.map((product, index) => (
              <div 
                key={index}
                className="flex items-center gap-4"
              >
                <div className="bg-[#E6AF1C] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={product.icon} className="text-white text-xl" />
                </div>
                <h4 className="font-medium text-[#0A1A3A] text-[16px]">
                  {product.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialProducts;
