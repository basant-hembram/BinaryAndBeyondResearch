import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[52px] items-center">
        <div>
          <img
            src="/images/founder.png"
            alt="Distributor"
            className="rounded-[50px] w-full"
          />
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Become <span className="text-[#E6AF1C]">A Successful</span>
            <br />
            Mutual Fund Distributor
          </h1>
          <p className="text-gray-600 mb-6">
            Partner with Finyzor Assets towards exceptional mutual funds distributor &amp; achieve your ASP,
            turnover growth through SIPs, Mutual Funds, and portfolio planning.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-[#01A382]" />
              <span className="text-sm">Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-[#01A382]" />
              <span className="text-sm">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-[#01A382]" />
              <span className="text-sm">Distributor support</span>
            </div>
          </div>
          <Button className="bg-[#01A382] hover:bg-[#018f72] text-white">
            Become Distributor <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
