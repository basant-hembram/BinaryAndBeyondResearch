import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../data';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const headerData = data.header;

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-[#0A1A3A] text-white py-2 border-b border-[#E6AF1C]">
                <div className="container max-md:px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 lg:gap-4">
                        {headerData.socialLinks.map((social) => {
                            const iconMap: any = { faFacebook, faLinkedin, faInstagram };
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#E6AF1C] transition-colors"
                                >
                                    <FontAwesomeIcon icon={iconMap[social.icon]} size="lg" />
                                </a>
                            );
                        })}
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <a href={headerData.contact.phoneLink} className="flex items-center text-[12px] lg:text-[14px] gap-2 hover:text-[#E6AF1C]">
                            <FontAwesomeIcon icon={faPhone} size="sm" />
                            <span>{headerData.contact.phone}</span>
                        </a> |
                        <Link to={headerData.contact.contactLink} className="flex items-center text-[12px] lg:text-[14px] gap-2 hover:text-[#E6AF1C]">
                            <span>{headerData.contact.contactText}</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-[#0A1A3A] shadow-md">
                <div className="container max-md:px-4 mx-auto relative">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <Link to="/">
                                <img
                                    src={headerData.logo.src}
                                    alt={headerData.logo.alt}
                                    className="h-[48px] lg:h-[118px] w-auto"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center gap-[15px]">
                            {headerData.navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-[13px] py-[8px] font-medium border-b transition-colors ${location.pathname === item.path ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="xl:hidden text-white bg-[#E6AF1C] p-2 rounded-[50%]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav
                        className={`xl:hidden absolute left-0 right-0 z-50 bg-[#0A1A3A] border-t border-[#E6AF1C] overflow-hidden transition-all duration-300 ease-in-out shadow-lg ${isMenuOpen ? 'max-h-[400px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                            }`}
                    >
                        <div className="flex flex-col gap-4 px-4">
                            <Link to="/" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/about" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/about' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                            <Link to="/services" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/services' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
                            <Link to="/calculator" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/calculator' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>Calculator</Link>
                            <Link to="/mf-research" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/mf-research' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>MF Research</Link>
                            <Link to="/become-distributor" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/become-distributor' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>Become a Distributer</Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
