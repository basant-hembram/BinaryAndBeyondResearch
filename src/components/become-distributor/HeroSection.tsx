import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLaptop, faBookBookmark, faHandshake, faCoins, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] xl:gap-[52px] items-start">
        <div>
          <img
            src="/images/founder.png"
            alt="Distributor"
            className="rounded-[50px] w-full"
          />
        </div>
        <div>
          <h1 className="text-[26px] lg:text-[36px] xl:text-[48px] text-[#0A1A3A] mb-[13px]">
            Become <span className="text-[#E6AF1C]">A Successful</span>
            <br />
            Mutual Fund Distributor
          </h1>
          <p className="text-[#E6AF1C] text-[16px] lg:text-[18px] font-normal mb-[13px]">
            Build a scalable income with India's fastest growing investment industry
          </p>
          <p className="text-[#575455] text-[16px] lg:text-[18px] font-semibold mb-[16px]">
            Partner with Finyser Assets and grow your mutual fund business with
          </p>
          <div className="flex flex-wrap gap-[12px] xl:gap-[20px] mb-[23px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-[15px]">
              <FontAwesomeIcon icon={faLaptop} className="text-[#01A382] text-xl" />
              <span className="text-[#575455]">Technology</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-[15px]">
              <FontAwesomeIcon icon={faBookBookmark} className="text-[#01A382] text-xl" />
              <span className="text-[#575455]">Research</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-[15px]">
              <FontAwesomeIcon icon={faHandshake} className="text-[#01A382] text-xl" />
              <span className="text-[#575455]">Dedicated support</span>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="">
              <div className="flex items-start  justify-center gap-3 mb-2">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="text-[#E6AF1C] text-2xl mt-2" />
                <span className="text-[20px] lg:text-[24px] font-normal text-[#E6AF1C]">₹ 15+ Cr.</span>
              </div>
              <p className="text-center text-[#0A1A3A] text-[14px]">SIP Book</p>
            </div>
            <div className="pl-[30px] ml-[30px] border-l border-[#D9D9D9]">
              <div className="flex items-start justify-center gap-3 mb-2">
                <FontAwesomeIcon icon={faCoins} className="text-[#E6AF1C] text-2xl mt-2" />
                <span className="text-[20px] lg:text-[24px] font-normal text-[#E6AF1C]">₹ 1250+ Cr.</span>
              </div>
              <p className="text-center text-[#0A1A3A] text-[14px]">Assets Under Management</p>
            </div>
          </div>
          <Button className="bg-[#01A382] hover:bg-[#018f72] text-white mb-6">
            Join Finyzer Assets <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
          <p className="text-[#575455] italic text-[16px] lg:text-[18px] font-medium">
            21+ years of experience, a strong presence in Jharkhand, and 200+ families guided through SIPs, Mutual Funds, and portfolio planning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
