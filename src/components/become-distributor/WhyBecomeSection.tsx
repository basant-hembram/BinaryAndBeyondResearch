import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const WhyBecomeSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Why Become A Mutual Fund Distributor With{' '}
            <span className="text-[#E6AF1C]">Finyzor Assets</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Finyzer Assets is a professionally managed mutual fund distribution
            platform offering proprietary market leading technology backed
            distribution system, offering:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheck} className="text-[#01A382] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">100% funded investors</h3>
                <p className="text-sm text-gray-600">Get access to verified investors</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheck} className="text-[#01A382] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">24x7 Inquiry Services</h3>
                <p className="text-sm text-gray-600">Round the clock support</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheck} className="text-[#01A382] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Dedicated Relationship Manager</h3>
                <p className="text-sm text-gray-600">Personal assistance for growth</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheck} className="text-[#01A382] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">100% Legacy Services</h3>
                <p className="text-sm text-gray-600">Complete business continuity</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/photo-1551135049-8a33b5883817.avif"
            alt="Team"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyBecomeSection;
