import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactInfo = () => {
  return (
    <div className="space-y-6 lg:mt-[60px]">
      {/* Address */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faLocationDot} className="text-white" />
        </div>
        <div>
          <p className="text-[#575455] text-[18px]">
            24/1 MG Road, Indiranagar, Bengaluru,<br />
            Karnataka 560038, India.
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faEnvelope} className="text-white" />
        </div>
        <div>
          <a href="mailto:info@finyzerassets.com" className="text-[#575455] text-[18px] hover:text-[#01A382]">
            info@finyzerassets.com
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faPhone} className="text-white" />
        </div>
        <div>
          <a href="tel:+919876543210" className="text-[#575455] text-[18px] hover:text-[#01A382]">
            +91 98765 43210
          </a>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
        </div>
        <div>
          <a href="https://wa.me/919876543210" className="text-[#575455] text-[18px] hover:text-[#01A382]">
            +91 98765 43210
          </a>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faClock} className="text-white" />
        </div>
        <div>
          <h3 className="font-regular text-[18px] text-[#0A1A3A] mb-2">Opening Hours</h3>
          <p className="text-[#575455] text-[18px]">Monday – Friday: 10:00 AM to 7:00 PM</p>
          <p className="text-[#575455] text-[18px]">Saturday – 10:00 AM to 5:00 PM</p>
          <p className="text-[#575455] text-[18px]">Sunday - Closed</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
