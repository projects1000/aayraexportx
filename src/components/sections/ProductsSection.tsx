'use client';

import { motion } from 'framer-motion';
import { Ruler, Package, Building2, Tractor, Container } from 'lucide-react';

const lengthOptions = [
    '10 ft',
    '12 ft',
    '14 ft',
    '16 ft',
    '20 ft',
    'Custom lengths for bulk orders'
];

const diameterSpecs = [
    { range: '3-4 inch', usage: 'Light duty', icon: Ruler, color: 'from-green-400 to-green-500' },
    { range: '4-5 inch', usage: 'Standard construction', icon: Building2, color: 'from-green-500 to-green-600' },
    { range: '5-6 inch', usage: 'Heavy duty', icon: Package, color: 'from-green-600 to-green-700' },
    { range: '6-8 inch+', usage: 'Industrial & export grade', icon: Container, color: 'from-green-700 to-green-800' },
];

const applications = [
    {
        title: 'Construction Scaffolding',
        description: 'Ideal for temporary support structures in construction',
        icon: Building2,
    },
    {
        title: 'Industrial & Commercial Projects',
        description: 'Heavy-duty applications requiring durable wood poles',
        icon: Package,
    },
    {
        title: 'Agriculture Fencing',
        description: 'Natural fencing solutions for farms and estates',
        icon: Tractor,
    },
    {
        title: 'Export Packaging & Structures',
        description: 'Export-grade poles for international markets',
        icon: Container,
    },
];

export default function ProductsSection() {
    return (
        <section id="products" className="py-20 bg-gray-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-green-500 font-semibold tracking-wider uppercase">Our Products</span>
                    <h2 className="text-4xl font-bold text-white mt-2">
                        Eucalyptus (Nilgiri) <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">Wood Poles</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Available in various sizes and specifications to meet your construction and industrial needs
                    </p>
                </div>

                {/* Length Options */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Available <span className="text-green-500">Length Options</span>
                    </h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {lengthOptions.map((length, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 bg-gray-800 border-2 border-green-600/30 rounded-full text-white font-semibold hover:bg-green-600 hover:border-green-600 transition-all duration-300 hover:scale-105"
                            >
                                {length}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Diameter Specifications */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Diameter <span className="text-green-500">Specifications</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {diameterSpecs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative p-6 rounded-2xl bg-gray-800 border border-gray-700 hover:border-green-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${spec.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                    <spec.icon className="w-6 h-6" />
                                </div>
                                <h4 className={`text-xl font-bold bg-gradient-to-r ${spec.color} bg-clip-text text-transparent mb-2`}>
                                    {spec.range}
                                </h4>
                                <p className="text-gray-400 text-sm">{spec.usage}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Applications */}
                <div>
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Common <span className="text-green-500">Applications</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {applications.map((app, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-green-600 hover:bg-gray-750 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-lg bg-green-600/10 flex items-center justify-center text-green-500 mb-4">
                                    <app.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{app.title}</h4>
                                <p className="text-gray-400 text-sm">{app.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://wa.me/919702160068?text=Hello!%20I%20need%20a%20quote%20for%20eucalyptus%20wood%20poles."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg shadow-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-300"
                    >
                        Request Custom Quote
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
