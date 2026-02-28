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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
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
                            className={`w-auto transition-all duration-300 ${
                                isScrolled ? 'h-14' : 'h-16 lg:h-20'
                            }`}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-8">
                        {headerData.navigation.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                                    pathname === item.path 
                                        ? 'text-purple-600' 
                                        : isScrolled ? 'text-[#4A4444]' : 'text-gray-800'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`xl:hidden p-2 transition-colors ${
                            isScrolled ? 'text-[#4A4444]' : 'text-gray-800'
                        }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="xl:hidden pb-4 bg-white rounded-b-lg shadow-lg">
                        <div className="flex flex-col gap-2">
                            {headerData.navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-50 rounded ${
                                        pathname === item.path 
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
