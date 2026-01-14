import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLaptop, faBookBookmark, faHandshake, faCoins, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const iconMap: Record<string, any> = {
  faLaptop,
  faBookBookmark,
  faHandshake,
  faHandHoldingUsd,
  faCoins,
};

const HeroSection = () => {
  const { hero } = data.becomeDistributor;

  return (
    <section className="container max-md:px-4 mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] xl:gap-[52px] items-start">
        <div>
          <img
            src={hero.image}
            alt="Distributor"
            className="rounded-[50px] w-full"
          />
        </div>
        <div>
          <h1 className="text-[26px] lg:text-[36px] xl:text-[48px] text-[#0A1A3A] mb-[13px]">
            {hero.title} <span className="text-[#E6AF1C]">{hero.titleHighlight}</span>
            <br />
            {hero.titleContinued}
          </h1>
          <p className="text-[#E6AF1C] text-[16px] lg:text-[18px] font-normal mb-[13px]">
            {hero.subtitle}
          </p>
          <p className="text-[#575455] text-[16px] lg:text-[18px] font-semibold mb-[16px]">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-[12px] xl:gap-[20px] mb-[23px]">
            {hero.features.map((feature, index) => (
              <div key={index} className="flex flex-col lg:flex-row lg:items-center gap-[15px]">
                <FontAwesomeIcon icon={iconMap[feature.icon]} className="text-[#01A382] text-xl" />
                <span className="text-[#575455]">{feature.label}</span>
              </div>
            ))}
          </div>
          <div className="flex mb-6">
            {hero.stats.map((stat, index) => (
              <div key={index} className={index === 0 ? "" : "pl-[30px] ml-[30px] border-l border-[#D9D9D9]"}>
                <div className="flex items-start  justify-center gap-3 mb-2">
                  <FontAwesomeIcon icon={iconMap[stat.icon]} className="text-[#E6AF1C] text-2xl mt-2" />
                  <span className="text-[20px] lg:text-[24px] font-normal text-[#E6AF1C]">{stat.value}</span>
                </div>
                <p className="text-center text-[#0A1A3A] text-[14px]">{stat.label}</p>
              </div>
            ))}
          </div>
          <Button className="bg-[#01A382] hover:bg-[#018f72] text-white mb-6">
            {hero.ctaButton.text} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
          <p className="text-[#575455] italic text-[16px] lg:text-[18px] font-medium">
            {hero.footerText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
