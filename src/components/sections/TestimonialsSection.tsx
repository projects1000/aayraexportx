'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
    {
        icon: TrendingUp,
        value: '10+',
        label: 'Years Experience',
        description: 'Serving the timber industry',
    },
    {
        icon: Users,
        value: '500+',
        label: 'Happy Clients',
        description: 'Across India and globally',
    },
    {
        icon: Globe,
        value: '15+',
        label: 'Export Countries',
        description: 'Worldwide reach',
    },
    {
        icon: Award,
        value: 'A+',
        label: 'Export Grade',
        description: 'Premium quality assurance',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-green-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-green-500 font-semibold tracking-wider uppercase">Trust & Reliability</span>
                    <h2 className="text-4xl font-bold text-white mt-2">
                        Why Companies <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">Choose Us</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-green-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 to-green-600/0 group-hover:from-green-600/10 group-hover:to-green-600/5 rounded-2xl transition-all duration-300"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                                        <stat.icon className="w-8 h-8" />
                                    </div>

                                    <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-yellow-600 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {stat.label}
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl text-gray-300 mb-6">
                        Ready to partner with a trusted timber exporter?
                    </p>
                    <a
                        href="https://wa.me/919702160068?text=Hello!%20I%20want%20to%20discuss%20a%20long-term%20partnership%20for%20eucalyptus%20wood%20poles."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg shadow-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-300"
                    >
                        Start Partnership
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
