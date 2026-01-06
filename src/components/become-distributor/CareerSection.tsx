import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CareerSection = () => {
  return (
    <section className="bg-[#0A1A3A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Career In Mutual Fund <span className="text-[#E6AF1C]">Distribution Business</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Start Your Mutual Fund Distributor Career
            </p>
            <p className="text-gray-300 mb-6">
              Build Your Assets To Build A Successful Career With Good Returns
              And Avail Benefits Of The Booming Mutual Fund Industry With Detailed Fund
              Details & Schemes. We Have Facility For Offline And Online.
            </p>
            <Button className="bg-[#01A382] hover:bg-[#018f72] text-white">
              Apply Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </div>
          <div>
            <img
              src="/images/photo-1560264280-88b68371db39.avif"
              alt="Career"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
