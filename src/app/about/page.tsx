'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-green-900/30 text-green-400 text-sm font-semibold mb-4">
                            About Our Company
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Trusted Wholesale Supplier <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">of Premium Eucalyptus</span> <br />
                            Wood Poles from India
                        </h1>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            At AAYRAEXPORTX, we specialize in sourcing and exporting high-quality Eucalyptus (Nilgiri) wood poles directly from major plantation belts across South India.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="/images/about-illustration.png"
                            alt="Eucalyptus Timber Business"
                            className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                About <span className="text-green-500">AAYRAEXPORTX</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                AAYRAEXPORTX is a reliable wholesaler and exporter specializing in Eucalyptus (Nilgiri) wood poles. We serve both domestic and international markets with premium-quality timber products.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 p-3 bg-green-900/30 rounded-lg text-green-400">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Who We Are</h3>
                                    <p className="text-gray-300">
                                        A dedicated team with extensive experience in timber sourcing, grading, and export logistics for construction and industrial sectors.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 p-3 bg-yellow-900/30 rounded-lg text-yellow-600">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                                    <p className="text-gray-300">
                                        To provide reliable, consistent supply of export-grade eucalyptus wood poles while maintaining the highest quality standards and building long-term partnerships.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 p-3 bg-green-900/30 rounded-lg text-green-400">
                                    <Eye className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                                    <p className="text-gray-300">
                                        To be recognized as the leading exporter of eucalyptus wood poles from India, known for quality, reliability, and customer satisfaction in global markets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <h2 className="text-3xl font-bold text-center text-white mb-12">
                        Why <span className="text-green-500">Choose Us</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl bg-gray-800 border border-gray-700">
                            <h4 className="text-xl font-bold text-white mb-3">Direct Sourcing</h4>
                            <p className="text-gray-400">
                                We source directly from plantations, ensuring freshness, quality control, and competitive pricing.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-800 border border-gray-700">
                            <h4 className="text-xl font-bold text-white mb-3">Export Experience</h4>
                            <p className="text-gray-400">
                                Proven track record in international shipping with complete documentation and logistics support.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-800 border border-gray-700">
                            <h4 className="text-xl font-bold text-white mb-3">Quality Assurance</h4>
                            <p className="text-gray-400">
                                Rigorous grading and inspection processes to ensure only premium-quality poles reach our customers.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
