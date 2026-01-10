import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const WhyBecomeSection = () => {
  return (
    <section className="container mx-auto px-4 py-[48px] lg:py-[65px] xl:py-[110px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-6">
            Why Become A Mutual Fund Distributor With{' '}
            <span className="text-[#E6AF1C] font-semibold">Finyser Assets</span>
          </h2>
          <p className="text-[#575455] text-[16px] lg:text-[18px] mb-8">
            Finyser Assets is a professionally managed mutual fund distribution
            platform helping partners scale their business through technology,
            research and local support.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-xl" />
              <span className="text-[#0A1A3A] font-medium">1100+ Trusted Investors</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-xl" />
              <span className="text-[#0A1A3A] font-medium">Dedicated Relationship Manager</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-xl" />
              <span className="text-[#0A1A3A] font-medium">200+ Happy Families</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faHandPointRight} className="text-[#E6AF1C] text-xl" />
              <span className="text-[#0A1A3A] font-medium">200+ Happy Families</span>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/why-become-mutual-fund-investor.avif"
            alt="Team"
            className="rounded-[50px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyBecomeSection;
