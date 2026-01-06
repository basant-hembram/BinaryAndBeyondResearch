import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const SupportDistributorsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
        We Actively <span className="text-[#E6AF1C]">Support Distributors in</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <FontAwesomeIcon icon={faCheck} className="text-[#01A382]" />
          <span className="text-gray-700">Resellers</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <FontAwesomeIcon icon={faCheck} className="text-[#E6AF1C]" />
          <span className="text-gray-700">Ghanshahi</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <FontAwesomeIcon icon={faCheck} className="text-[#01A382]" />
          <span className="text-gray-700">Bareilly</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <FontAwesomeIcon icon={faCheck} className="text-[#E6AF1C]" />
          <span className="text-gray-700">Mohali</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <FontAwesomeIcon icon={faCheck} className="text-[#01A382]" />
          <span className="text-gray-700">Pathankot</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
          <FontAwesomeIcon icon={faCheck} className="text-[#E6AF1C]" />
          <span className="text-gray-700">Noida</span>
        </div>
      </div>
    </section>
  );
};

export default SupportDistributorsSection;
