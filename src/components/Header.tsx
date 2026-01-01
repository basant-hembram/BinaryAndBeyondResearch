import { Menu, X, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-[#0A1A3A] text-white py-2 px-4 border-b border-[#E6AF1C]">
                <div className="container mx-auto flex justify-between items-center text-sm">
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
                        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#E6AF1C]">
                            <FontAwesomeIcon icon={faPhone} size="sm" />
                            <span>+91 98765 43210</span>
                        </a> | 
                        <a href="#" className="flex items-center gap-2 hover:text-[#E6AF1C]">
                            <span>CONTACT US</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-[#0A1A3A] shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/Web_Logo.png"
                                alt="Finyzer Assets Logo"
                                className="h-15 w-auto"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a href="#" className="text-white hover:text-[#E6AF1C] font-medium">Home</a>
                            <a href="#" className="text-white hover:text-[#E6AF1C] font-medium">About Us</a>
                            <a href="#" className="text-white hover:text-[#E6AF1C] font-medium">Services</a>
                            <a href="#" className="text-white hover:text-[#E6AF1C] font-medium">Calculator</a>
                            <a href="#" className="text-white hover:text-[#E6AF1C] font-medium">MF Research</a>
                            <a href="#" className="text-white hover:text-[#E6AF1C] font-medium">Become a Distributer</a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-[#0A1A3A]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden py-4 border-t">
                            <div className="flex flex-col gap-4">
                                <a href="#home" className="text-gray-700 hover:text-[#E6AF1C] font-medium">Home</a>
                                <a href="#about" className="text-gray-700 hover:text-[#E6AF1C] font-medium">About Us</a>
                                <a href="#services" className="text-gray-700 hover:text-[#E6AF1C] font-medium">Services</a>
                                <a href="#calculator" className="text-gray-700 hover:text-[#E6AF1C] font-medium">Calculator</a>
                                <a href="#contact" className="text-gray-700 hover:text-[#E6AF1C] font-medium">Contact</a>
                                <Button size="sm">Get Started</Button>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
