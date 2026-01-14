import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const SupportDistributorsSection = () => {
  const { supportDistributors } = data.becomeDistributor;

  return (
    <section className="relative py-[45px] lg:py-[55px] xl:py-[100px] bg-cover">
      <div className="absolute inset-0 bg-white/80" style={{ backgroundImage: `url(${supportDistributors.backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundPositionX: 'right' }}></div>
      <div className="container max-md:px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[26px] lg:text-[34px] xl:text-[40px] font-normal text-[#090914]">
              {supportDistributors.title}
            </h2>
            <h2 className="text-[26px] lg:text-[34px] xl:text-[40px] font-semibold text-[#E6AF1C]">
              {supportDistributors.titleHighlight}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {supportDistributors.locations.map((location, index) => (
              <div key={index} className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#E6AF1C] text-xl" />
                <span className="text-gray-900 text-lg font-medium">{location.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportDistributorsSection;
