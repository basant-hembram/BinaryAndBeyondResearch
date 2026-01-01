import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A1A3A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/images/Web_Logo.png" 
                alt="Finyzer Assets Logo" 
                className="h-12 w-auto mb-2 brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building your financial future with transparency and trust since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#E6AF1C] transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#E6AF1C] transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#E6AF1C] transition-colors text-sm">Services</a></li>
              <li><a href="#calculator" className="text-gray-400 hover:text-[#E6AF1C] transition-colors text-sm">Calculator</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#E6AF1C] transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Mutual Funds</li>
              <li className="text-gray-400 text-sm">Health Insurance</li>
              <li className="text-gray-400 text-sm">General Insurance</li>
              <li className="text-gray-400 text-sm">Fixed Deposits</li>
              <li className="text-gray-400 text-sm">NPS (Pension Plan)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="flex-shrink-0 text-[#E6AF1C] mt-1" size={18} />
                <span className="text-gray-400">
                  Main Road, Ranchi<br />
                  Jharkhand - 834001
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="flex-shrink-0 text-[#E6AF1C]" size={18} />
                <a href="tel:+919234567890" className="text-gray-400 hover:text-[#E6AF1C]">
                  +91 9234567890
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="flex-shrink-0 text-[#E6AF1C]" size={18} />
                <a href="mailto:contact@finyzerassets.com" className="text-gray-400 hover:text-[#E6AF1C]">
                  contact@finyzerassets.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Finyzer Assets. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-gray-700 p-2 rounded-full hover:bg-[#E6AF1C] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-2 rounded-full hover:bg-[#E6AF1C] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-2 rounded-full hover:bg-[#E6AF1C] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-2 rounded-full hover:bg-[#E6AF1C] transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#E6AF1C] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#E6AF1C] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
