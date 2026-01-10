import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const SupportDistributorsSection = () => {
  return (
    <section className="relative py-[45px] lg:py-[55px] xl:py-[100px] bg-cover">
      <div className="absolute inset-0 bg-white/80" style={{ backgroundImage: 'url(/images/support-distributors.png)', backgroundRepeat: 'no-repeat', backgroundPositionX: 'right' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[26px] lg:text-[34px] xl:text-[40px] font-normal text-[#090914]">
              We Actively
            </h2>
            <h2 className="text-[26px] lg:text-[34px] xl:text-[40px] font-semibold text-[#E6AF1C]">
              Support Distributors In
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#E6AF1C] text-xl" />
              <span className="text-gray-900 text-lg font-medium">Bokaro</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#E6AF1C] text-xl" />
              <span className="text-gray-900 text-lg font-medium">Dhanbad,</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#E6AF1C] text-xl" />
              <span className="text-gray-900 text-lg font-medium">Ranchi</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#E6AF1C] text-xl" />
              <span className="text-gray-900 text-lg font-medium">Jamshedpur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportDistributorsSection;
