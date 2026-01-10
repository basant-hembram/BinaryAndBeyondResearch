import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ComplianceSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-[24px] lg:text-[32px] xl:text-[36px] text-[#0A1A3A] mb-6 text-center">
        Compliance & <span className="text-[#E6AF1C] font-semibold">Disclaimer</span>
      </h2>
      <div className="mx-auto">
        <p className="text-[#575455] text-center mb-2 text-[16px] lg:text-[18px] xl:text-[20px]">
          Mutual fund investing is subject to market risks, read all schemes related documents carefully
        </p>
        <p className="text-[#575455] text-center mb-8 text-[16px] lg:text-[18px] xl:text-[20px]">
          Finyser Assets is an AMFI registered mutual fund distributor : <span className="font-bold text-[#0A1A3A]">ARN - 879786</span>
        </p>
        <div className="text-center">
          <h3 className="text-[26px] lg:text-[32px] xl:text-[36px] font-medium text-[#E6AF1C] mb-6">
            Ready To Build Your Mutual Fund Business
          </h3>
          <Button className="bg-[#01A382] hover:bg-[#018f72] text-white px-8">
            Join As A Mutual Fund Distributor{' '}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

