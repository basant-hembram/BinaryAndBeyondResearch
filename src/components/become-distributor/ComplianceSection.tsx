import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ComplianceSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 text-center">
        Compliance & <span className="text-[#E6AF1C]">Disclaimer</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 text-center mb-8">
          Mutual Fund investing is subject to market risks, read all scheme related documents
          carefully. Finyzer Assets is AMFI registered. Returns of the funds are*{' '}
          <span className="font-semibold">-44% -215%</span>
        </p>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Ready To Build Your <span className="text-[#E6AF1C]">Mutual Fund Business</span>
          </h3>
          <Button className="bg-[#01A382] hover:bg-[#018f72] text-white">
            Yes, I am Interested Contact Me Now{' '}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

