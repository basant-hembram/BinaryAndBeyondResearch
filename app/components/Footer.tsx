'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedinIn, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { data } from '@/data';

const Footer = () => {
  const footerData = data.footer;
  
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#353572] to-[#602F7B] text-white">
      <div className="container max-md:px-4 mx-auto py-12">
        <div className="grid md:grid-cols-12 gap-12 mb-8">
          {/* Company Info */}
          <div className='md:col-span-4'>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={footerData.companyInfo.logo.src}
                alt={footerData.companyInfo.logo.alt}
                className="h-[40px] xl:h-[80px] w-auto brightness-0 invert"
              />
              
            </div>
            <p className="text-white text-[14px] text-[16px] leading-relaxed mb-6">
              {footerData.companyInfo.disclaimer}
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-[50px]">
              {footerData.socialLinks.map((social) => {
                const iconMap: any = { faFacebook, faLinkedinIn, faInstagram, faYoutube };
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

            {/* Our Location */}
          <div className='md:col-span-4'>
            <h4 className="font-semibold text-[16px] mb-4 uppercase">Our Location</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5566093101093!2d77.65899717592303!3d13.000186787317817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1149e693606d%3A0xa2914045c4276fec!2sBinaryandBeyondresearch!5e0!3m2!1sen!2sin!4v1773252650254!5m2!1sen!2sin" width="400" height="200" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

           {/* Contact Info */}
          <div className='md:col-span-4'>
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
        <div className="border-t border-[#C9C9C9] pt-6 mt-8">
          <div className="text-center">
            <ul className="flex justify-center gap-2 mb-2 items-center">
              {footerData.information.links.map((link, index, arr) => (
                <li key={index} className="flex items-center">
                  <Link href={link.path} className="text-white hover:text-[#E6AF1C] transition-colors text-[14px]">
                    {link.label}
                  </Link>
                  {index < arr.length - 1 && <span className="text-white ml-2">•</span>}
                </li>
              ))}
            </ul>
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
