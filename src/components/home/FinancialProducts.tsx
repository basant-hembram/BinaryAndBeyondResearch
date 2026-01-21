import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faBuildingColumns, faArrowUpRightDots, faPeopleRoof, faCoins, faBriefcaseMedical, faCarBurst, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/button';
import { data } from '../../data';
import { useNavigate } from 'react-router-dom';

const { home: homeData } = data;

const iconMap: Record<string, any> = {
  faHandHoldingDollar,
  faBuildingColumns,
  faArrowUpRightDots,
  faPeopleRoof,
  faCoins,
  faBriefcaseMedical,
  faCarBurst
};

const FinancialProducts = () => {
  const { financialProducts } = homeData;
  const navigate = useNavigate();

  return (
    <section id="services" className="py-16 md:py-24 bg-[#E9E9EB] relative overflow-hidden">
      <div className="container max-md:px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:items-center">
          {/* Left Content */}
          <div className="md:w-[40%]">
             <div>
              <p className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A]">{financialProducts.title}</p>
              <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-[#E6AF1C] mb-[30px] lg:mb-[18px] xl:mb-[24px]">
                {financialProducts.titleHighlight}
              </h2>
            </div>

            <p className="text-[#575455] text-[16px] lg:text-[16px] xl:text-[18px] !leading-[32px]">
              {financialProducts.description}
            </p>

            <div className="pt-[42px] lg:pt-[95px] xl:pt-[59px]">
              <Button 
                size="lg" 
                className="bg-[#00A896] hover:bg-[#008F7E] text-white flex items-center gap-2" onClick={() => navigate('/services')}
              >
                {financialProducts.buttonText}
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>

          {/* Right Products Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-6 md:w-[60%]">
            {financialProducts.products.map((product, index) => (
              <div 
                key={index}
                className="flex items-center gap-4"
              >
                <div className="bg-[#E6AF1C] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={iconMap[product.icon]} className="text-white text-xl" />
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
