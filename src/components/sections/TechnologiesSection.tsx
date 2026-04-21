'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const states = [
    { name: 'Karnataka', emoji: '🌲' },
    { name: 'Tamil Nadu', emoji: '🌳' },
    { name: 'Andhra Pradesh', emoji: '🌴' },
    { name: 'Telangana', emoji: '🌿' },
];

export default function TechnologiesSection() {
    return (
        <section id="sourcing" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-green-700/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-green-500 font-semibold tracking-wider uppercase">Our Network</span>
                    <h2 className="text-4xl font-bold text-white mt-2">
                        Sourcing <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">States</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Direct sourcing from major agro production and processing hubs across South India
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {states.map((state, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-green-600/20 hover:border-green-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 to-green-600/0 group-hover:from-green-600/10 group-hover:to-green-600/5 rounded-2xl transition-all duration-300"></div>

                            <div className="relative z-10">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {state.emoji}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{state.name}</h3>
                                <div className="flex items-center justify-center text-green-500 text-sm">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span>India</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-2xl bg-gray-800 border border-gray-700 text-center"
                >
                    <div className="flex items-center justify-center mb-4">
                        <MapPin className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Plantation Network</h4>
                    <p className="text-gray-400">
                        Our established network across South India ensures consistent supply of premium rice, cashew, millet, ginger, and turmeric with reliable logistics and quality control.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
