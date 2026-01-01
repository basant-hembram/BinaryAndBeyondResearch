import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faBuildingColumns, faArrowUpRightDots, faPeopleRoof, faCoins, faBriefcaseMedical, faCarBurst, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';

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
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 md:items-center">
          {/* Left Content */}
          <div className="space-y-6 md:w-[40%]">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#0A1A3A] mb-2">
                Our Suite Of
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-[#E6AF1C]">
                Financial Products
              </h3>
            </div>

            <p className="text-[#575455] text-base leading-relaxed">
              At Finyzer Assets, we offer a diverse array of innovative financial products, from advanced investment tools to comprehensive portfolio management solutions. Our products empower distributors to deliver exceptional value to their clients and drive growth.
            </p>

            <div className="pt-4">
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
          <div className="grid md:grid-cols-3 gap-y-6 md:w-[60%]">
            {products.map((product, index) => (
              <div 
                key={index}
                className="flex items-center gap-4"
              >
                <div className="bg-[#E6AF1C] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={product.icon} className="text-white text-xl" />
                </div>
                <h4 className="font-medium text-[#0A1A3A] text-sm">
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
