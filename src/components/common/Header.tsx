import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-[#0A1A3A] text-white py-2 border-b border-[#E6AF1C]">
                <div className="container flex justify-between items-center text-sm px-4">
                    <div className="flex items-center gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6AF1C] transition-colors">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6AF1C] transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6AF1C] transition-colors">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="tel:+919876543210" className="flex items-center text-[12px] lg:text-[14px] gap-2 hover:text-[#E6AF1C]">
                            <FontAwesomeIcon icon={faPhone} size="sm" />
                            <span>+91 98765 43210</span>
                        </a> |
                        <a href="#" className="flex items-center text-[12px] lg:text-[14px] gap-2 hover:text-[#E6AF1C]">
                            <span>CONTACT US</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-[#0A1A3A] shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 relative">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <Link to="/">
                                <img
                                    src="/images/Web_Logo.png"
                                    alt="Finyzer Assets Logo"
                                    className="h-[48px] lg:h-[84px] w-auto"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center gap-[15px]">
                            <Link to="/" className={`px-[13px] py-[8px] font-medium border-b transition-colors ${location.pathname === '/' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`}>Home</Link>
                            <Link to="/about" className={`px-[13px] py-[8px] font-medium border-b transition-colors ${location.pathname === '/about' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`}>About Us</Link>
                            <Link to="/services" className={`px-[13px] py-[8px] font-medium border-b transition-colors ${location.pathname === '/services' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`}>Services</Link>
                            <Link to="/calculator" className={`px-[13px] py-[8px] font-medium border-b transition-colors ${location.pathname === '/calculator' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`}>Calculator</Link>
                            <a href="#" className="px-[13px] py-[8px] text-white hover:text-[#E6AF1C] font-medium border-b border-transparent">MF Research</a>
                            <a href="#" className="px-[13px] py-[8px] text-white hover:text-[#E6AF1C] font-medium border-b border-transparent">Become a Distributer</a>
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
                        className={`xl:hidden absolute left-0 right-0 bg-[#0A1A3A] border-t border-[#E6AF1C] overflow-hidden transition-all duration-300 ease-in-out shadow-lg ${isMenuOpen ? 'max-h-[400px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                            }`}
                    >
                        <div className="flex flex-col gap-4 px-4">
                            <Link to="/" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/about" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/about' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                            <Link to="/services" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/services' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
                            <Link to="/calculator" className={`font-medium py-[7px] text-right lg:text-left transition-colors border-b-2 ${location.pathname === '/calculator' ? 'text-[#E6AF1C] border-[#E6AF1C]' : 'text-white hover:text-[#E6AF1C] border-transparent'}`} onClick={() => setIsMenuOpen(false)}>Calculator</Link>
                            <a href="#" className="text-white font-medium py-[7px] text-right lg:text-left hover:text-[#E6AF1C] transition-colors border-b-2 border-transparent">MF Research</a>
                            <a href="#" className="text-white font-medium py-[7px] text-right lg:text-left hover:text-[#E6AF1C] transition-colors border-b-2 border-transparent">Become a Distributer</a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
