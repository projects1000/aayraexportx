import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center mb-4">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="AAYRAEXPORTX Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 -ml-1.5 mt-1">
                                AAYRAEXPORTX
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leading wholesale supplier and exporter of premium Eucalyptus (Nilgiri) wood poles from India. Export-grade quality for construction and industrial use.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-green-500 hover:-translate-y-1 transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 hover:-translate-y-1 transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 hover:-translate-y-1 transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 hover:-translate-y-1 transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                        </div>
                        <div className="mt-6">
                            <a href="https://wa.me/919702160068?text=Hello!%20I%20am%20interested%20in%20bulk%20eucalyptus%20wood%20poles." target="_blank" rel="noopener noreferrer">
                                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-105 transition-all duration-300">
                                    Get Bulk Quote
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Products</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/#products" className="text-gray-400 hover:text-white transition-colors">Eucalyptus Poles</a>
                            </li>
                            <li>
                                <a href="/#products" className="text-gray-400 hover:text-white transition-colors">Scaffolding Poles</a>
                            </li>
                            <li>
                                <a href="/#quality" className="text-gray-400 hover:text-white transition-colors">Quality Grading</a>
                            </li>
                            <li>
                                <a href="/#supply" className="text-gray-400 hover:text-white transition-colors">Export Services</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                                <span className="text-gray-400">Adya Palace, Mancheswar, Block B, 509, Bhubaneswar - 751007</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+919702160068" className="text-gray-400 hover:text-indigo-500 transition-colors">+91 9702160068</a>
                                    <a href="tel:+917977596827" className="text-gray-400 hover:text-indigo-500 transition-colors">+91 7977596827</a>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                <a href="mailto:info@aayratechx.com" className="text-gray-400 hover:text-indigo-500 transition-colors">info@aayratechx.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} AAYRAEXPORTX. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
