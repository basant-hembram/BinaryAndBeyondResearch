'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { data } from '@/data';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const headerData = data.header;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-md border-b border-gray-200 py-3'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src={headerData.logo.src}
                            alt={headerData.logo.alt}
                            className={`w-auto transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16 lg:h-20'
                                }`}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center">
                        {headerData.navigation.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative text-sm font-medium px-4 py-3 transition-colors hover:text-[#6B2E7E] ${pathname === item.path
                                        ? 'bg-[linear-gradient(180deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] bg-clip-text text-transparent'
                                        : (isScrolled || pathname !== '/') ? 'text-[#4A4444]' : 'text-white/55'
                                    }`}
                            >
                                {item.label}
                                {pathname === item.path && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[linear-gradient(90deg,#353572_0%,#602F7B_50%,#A32787_75%,#6B2E7E_100%)] rounded-full" />
                                )}
                            </Link>
                        ))}
                    </nav>
                    <Link href="/contact" className={`border border-[rgba(163,39,135,0.28)] bg-[rgba(163,39,135,0.07)] backdrop-blur-[10px] px-6 py-2.5 rounded-full text-[0.85rem] font-poppins cursor-pointer transition-[border-color,background] duration-300 hover:border-[#A32787] hover:bg-[rgba(181,111,255,0.1)] ${(isScrolled || pathname !== '/') ? 'text-[#4A4444]' : 'text-white/55'}`}>
                        Contact Us
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className={`xl:hidden p-2 transition-colors ${(isScrolled || pathname !== '/') ? 'text-[#4A4444]' : 'text-white/55'
                            }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="xl:hidden pb-4 bg-none rounded-b-lg shadow-lg">
                        <div className="flex flex-col gap-2">
                            {headerData.navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-50 rounded ${pathname === item.path
                                            ? 'text-purple-600 bg-purple-50'
                                            : 'text-[#4A4444]'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
