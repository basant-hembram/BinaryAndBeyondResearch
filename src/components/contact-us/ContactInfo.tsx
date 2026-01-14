import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { data } from '../../data';

const ContactInfo = () => {
  const contactData = data.contact;
  const iconMap: any = { faLocationDot, faEnvelope, faPhone, faWhatsapp, faClock };
  
  return (
    <div className="space-y-6 lg:mt-[60px]">
      {contactData.contactInfo.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#E6AF1C] flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={iconMap[item.icon]} className="text-white" />
          </div>
          <div>
            {item.type === 'hours' ? (
              <>
                <h3 className="font-regular text-[18px] text-[#0A1A3A] mb-2">{item.title}</h3>
                {item.hours?.map((hour, idx) => (
                  <p key={idx} className="text-[#575455] text-[18px]">{hour}</p>
                ))}
              </>
            ) : item.link ? (
              <a href={item.link} className="text-[#575455] text-[18px] hover:text-[#01A382]">
                {item.content}
              </a>
            ) : (
              <p className="text-[#575455] text-[18px]" dangerouslySetInnerHTML={{ __html: item.content || '' }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
