'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';


export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-700/20 to-green-500/20 rounded-3xl transform rotate-3 scale-105 blur-lg"></div>
                        <div className="relative rounded-3xl p-2 flex items-center justify-center overflow-visible">
                            <img
                                src="/images/about-illustration.png"
                                alt="Eucalyptus Plantation"
                                className="w-full h-auto max-w-md mx-auto transform hover:scale-105 transition-transform duration-500 rounded-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <div className="relative">
                            <svg
                                className="absolute -top-10 -left-10 w-20 h-20 text-green-900/20"
                                fill="currentColor"
                                viewBox="0 0 100 100"
                            >
                                <path d="M0 50 Q25 25 50 50 T100 50" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                            <span className="text-green-500 font-semibold tracking-wider uppercase">About Us</span>
                        </div>

                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Trusted Source of <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">
                                Premium Eucalyptus Wood
                            </span>
                        </h2>

                        <p className="text-lg text-gray-300">
                            AayraExportX is a trusted wholesaler and exporter of Eucalyptus (Nilgiri) wood poles, sourced directly from major plantation belts in South India.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Direct Sourcing from Plantations</h4>
                                    <p className="text-gray-400">
                                        We source directly from certified eucalyptus plantations across South India.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-600/10 flex items-center justify-center text-yellow-600">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Bulk Availability & Export-Grade Sorting</h4>
                                    <p className="text-gray-400">
                                        Large inventory with professional grading for domestic and international markets.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center text-green-600">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Long-term Supply Partnerships</h4>
                                    <p className="text-gray-400">
                                        Reliable partner for construction companies, contractors, and international buyers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
