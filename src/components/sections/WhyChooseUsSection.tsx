'use client';

import { motion } from 'framer-motion';
import { Building, Globe, Truck, FileText, Users, Package } from 'lucide-react';

const panIndiaSupply = [
    { title: 'Rice Distributors', icon: Building },
    { title: 'Cashew Processors', icon: Package },
    { title: 'Food & Commodity Buyers', icon: Users },
];

const globalExport = [
    { region: 'Middle East / GCC', icon: Globe },
    { region: 'Africa', icon: Globe },
    { region: 'South Asia', icon: Globe },
    { region: 'International Markets', icon: Globe },
];

const services = [
    {
        title: 'Truckload & Container Supply',
        description: 'Flexible delivery options for both domestic and international shipments',
        icon: Truck,
    },
    {
        title: 'Export Documentation Support',
        description: 'Complete assistance with customs, certificates, and shipping documentation',
        icon: FileText,
    },
];

export default function WhyChooseUsSection() {
    return (
        <section id="supply" className="py-20 bg-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-600/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-green-500 font-semibold tracking-wider uppercase">Our Reach</span>
                    <h2 className="text-4xl font-bold text-white mt-2">
                        Supply <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">Capability</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Serving domestic and international markets with reliable, large-scale agro commodity supply
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Pan India Supply */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-gray-900 border border-gray-700 hover:border-green-600 transition-all duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center text-green-500 mr-4">
                                <Building className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Pan India Supply</h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Catering to wholesalers, processors, and retail channels across India
                        </p>
                        <div className="space-y-3">
                            {panIndiaSupply.map((item, index) => (
                                <div key={index} className="flex items-center text-gray-300">
                                    <item.icon className="w-5 h-5 text-green-500 mr-3" />
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Global Export */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-gray-900 border border-gray-700 hover:border-yellow-600 transition-all duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-lg bg-yellow-600/20 flex items-center justify-center text-yellow-600 mr-4">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Global Export</h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Export-grade agro products shipped to international markets worldwide
                        </p>
                        <div className="space-y-3">
                            {globalExport.map((item, index) => (
                                <div key={index} className="flex items-center text-gray-300">
                                    <item.icon className="w-5 h-5 text-yellow-600 mr-3" />
                                    <span>{item.region}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-gray-900 border border-gray-700 hover:border-green-600 transition-all duration-300"
                        >
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white mr-4 flex-shrink-0">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                    <p className="text-gray-400 text-sm">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
