import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A1A3A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-12 gap-8 mb-8">
          {/* Company Info */}
          <div className='md:col-span-4'>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/Web_Logo.png" 
                alt="Finyzer Assets Logo" 
                className="h-[48px] xl:h-[84px] w-auto"
              />
              
            </div>
            <p className="text-white text-[14px] text-[16px] leading-relaxed mb-6">
              Mutual Fund investments are subject to market risks, read all scheme related documents carefully before investing. Past performance is not indicative of future performance.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-[50px]">
              <a 
                href="#" 
                className="flex items-center justify-center hover:text-[#E6AF1C] text-[24px] transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center hover:text-[#E6AF1C] text-[24px] transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center hover:text-[#E6AF1C] text-[24px] transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram}  />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='md:col-span-2'>
            <h4 className="font-semibold text-[16px] mb-4">QUICK LINKS</h4>
            <ul className="space-y-[20px]">
              <li><Link to="/services" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Our Services</Link></li>
              <li><Link to="#" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Latest Blogs</Link></li>
              <li><Link to="#" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Our Team</Link></li>
              <li><Link to="/testimonials" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Testimonials</Link></li>
              <li><Link to="#" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Annual Return</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className='md:col-span-2'>
            <h4 className="font-semibold text-[16px] mb-4">INFORMATION</h4>
            <ul className="space-y-[20px]">
              <li><Link to="/privacy-policy" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Disclaimer</Link></li>
              <li><Link to="/terms-of-use" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Terms of use</Link></li>
              <li><Link to="/important-links" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Important Links</Link></li>
              <li><Link to="/contact" className="text-white hover:text-[#E6AF1C] transition-colors text-[16px]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='md:col-span-4'>
            <h4 className="font-semibold text-[16px] mb-4">KEEP IN TOUCH</h4>
            <ul className="space-y-[20px]">
              <li className="flex items-center gap-3 text-[16px]">
                <FontAwesomeIcon icon={faPhone} className="text-white" />
                <a href="tel:+919876543210" className="text-white hover:text-[#E6AF1C]">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-[16px]">
                <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
                <a href="https://wa.me/919876543210" className="text-white hover:text-[#E6AF1C]">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-[16px]">
                <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                <a href="mailto:info@finyzerassets.com" className="text-white hover:text-[#E6AF1C]">
                  info@finyzerassets.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[16px]">
                <FontAwesomeIcon icon={faLocationDot} className="text-white mt-1" />
                <span className="text-white">
                  24/1 MG Road, Indiranagar,<br />
                  Bengaluru, Karnataka 560038,<br />
                  India.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E6AF1C] pt-6 mt-8">
          <div className="text-center">
            <p className="text-white text-sm">
              © Copyright 2025, All Rights Reserved by Finyzer Assets
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
