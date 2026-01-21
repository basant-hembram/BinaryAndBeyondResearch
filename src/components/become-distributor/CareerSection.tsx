import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';
import { useNavigate } from 'react-router-dom';

const CareerSection = () => {
  const { career } = data.becomeDistributor;
  const navigate = useNavigate();

  return (
    <section className="bg-[#0A1A3A] text-white py-24 relative overflow-hidden">
      {/* Top Left Circle */}
      <img 
        src={career.decorativeImages.topLeft}
        alt="" 
        className="absolute left-0 top-0 w-64 h-64 pointer-events-none"
      />

      {/* Bottom Right Circle */}
      <img 
        src={career.decorativeImages.bottomRight}
        alt="" 
        className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none"
      />
      <div className="container max-md:px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[24px] lg:text-[32px] xl:text-[36px]">
              {career.title}
            </h2>
            <h2 className="text-[24px] lg:text-[32px] xl:text-[36px] font-semibold text-[#E6AF1C] mb-6">
              {career.titleHighlight}
            </h2>
            <p className="text-white text-[16px] lg:text-[18px] xl:text-[20px] mb-6">
              {career.subtitle}
            </p>
            <p className="text-white text-[16px] lg:text-[18px] mb-8 leading-relaxed">
              {career.description}
            </p>
            <Button className="bg-[#01A382] hover:bg-[#018f72] text-white px-8 py-6 text-[16px]" onClick={() => navigate('/contact')}>
              {career.ctaButton.text} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </div>
          <div>
            <img
              src={career.image}
              alt="Career"
              className="rounded-[50px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
