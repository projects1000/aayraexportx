'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/#products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Quality', href: '/#quality' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
    const pathname = usePathname();

    const isActive = (href: string) => {
        // Section anchors should never glow
        if (href.startsWith('/#')) return false;
        // Home only glows on exact match
        if (href === '/') return pathname === '/';
        // Other pages glow when path starts with href
        return pathname.startsWith(href);
    };

    return (
        <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="relative w-9 h-9">
                                <Image
                                    src="/logo.png"
                                    alt="ayraExportX Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 -ml-1.5 mt-1">
                                ayraExportX
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative px-4 py-2"
                                onMouseEnter={() => setHoveredIndex(item.name)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <AnimatePresence>
                                    {hoveredIndex === item.name && (
                                        <motion.span
                                            className="absolute inset-0 rounded-full bg-green-900/30"
                                            layoutId="hoverBackground"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                        />
                                    )}
                                </AnimatePresence>
                                <Link
                                    href={item.href}
                                    className={`relative z-10 transition-colors font-medium ${isActive(item.href)
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]'
                                        : 'text-gray-300 hover:text-green-400'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                        <a href="https://wa.me/919702160068?text=Hello!%20I%20am%20interested%20in%20bulk%20eucalyptus%20wood%20poles." target="_blank" rel="noopener noreferrer">
                            <span className="ml-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-300 inline-block cursor-pointer">
                                Get Bulk Quote
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-indigo-400 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900 border-b border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 ${isActive(item.href)
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600'
                                        : 'text-gray-300 hover:text-green-400'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <a href="https://wa.me/919702160068?text=Hello!%20I%20am%20interested%20in%20bulk%20eucalyptus%20wood%20poles." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                                    <span className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] transition-all duration-300 block text-center cursor-pointer">
                                        Get Bulk Quote
                                    </span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
