import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { data } from '../../data';

const Footer = () => {
  const footerData = data.footer;
  
  return (
    <footer id="contact" className="bg-[#0A1A3A] text-white">
      <div className="container max-md:px-4 mx-auto py-12">
        <div className="grid md:grid-cols-12 gap-12 mb-8">
          {/* Company Info */}
          <div className='md:col-span-4'>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={footerData.companyInfo.logo.src}
                alt={footerData.companyInfo.logo.alt}
                className="h-[24px] xl:h-[50px] w-auto"
              />
              
            </div>
            <p className="text-white text-[14px] text-[16px] leading-relaxed mb-6">
              {footerData.companyInfo.disclaimer}
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-[50px]">
              {footerData.socialLinks.map((social) => {
                const iconMap: any = { faFacebook, faLinkedinIn, faInstagram };
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center justify-center hover:text-[#E6AF1C] text-[24px] transition-colors"
                  >
                    <FontAwesomeIcon icon={iconMap[social.icon]} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className='md:col-span-2'>
            <h4 className="font-semibold text-[16px] mb-4">{footerData.quickLinks.title}</h4>
            <ul className="space-y-[20px]">
              {footerData.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className='md:col-span-2 xl:pl-[50px]'>
            <h4 className="font-semibold text-[16px] mb-4">{footerData.information.title}</h4>
            <ul className="space-y-[20px]">
              {footerData.information.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='md:col-span-4 xl:pl-[50px]'>
            <h4 className="font-semibold text-[16px] mb-4">{footerData.contact.title}</h4>
            <ul className="space-y-[20px]">
              {footerData.contact.items.map((item, index) => {
                const iconMap: any = { faPhone, faWhatsapp, faEnvelope, faLocationDot };
                return (
                  <li key={index} className={`flex ${item.type === 'address' ? 'items-start' : 'items-center'} gap-3 text-[16px]`}>
                    <FontAwesomeIcon icon={iconMap[item.icon]} className={`text-white ${item.type === 'address' ? 'mt-1' : ''}`} />
                    {item.link ? (
                      <a href={item.link} className="text-white hover:text-[#E6AF1C]">
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-white" dangerouslySetInnerHTML={{ __html: item.label }} />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E6AF1C] pt-6 mt-8">
          <div className="text-center">
            <p className="text-white text-sm">
              {footerData.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
