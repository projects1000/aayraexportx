'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Ruler, TreeDeciduous, Package2 } from 'lucide-react';

const qualityFeatures = [
    {
        title: 'Straightness Maintained',
        description: 'Each pole is carefully selected to ensure straight, uniform structure for optimal use.',
        icon: Ruler,
    },
    {
        title: 'Uniform Diameter',
        description: 'Consistent diameter throughout the length for better structural integrity.',
        icon: Package2,
    },
    {
        title: 'Crack-Free & Fungus-Free',
        description: 'Thoroughly inspected to ensure no cracks, splits, or fungal damage.',
        icon: Shield,
    },
    {
        title: 'Fresh / Air-Dried Options',
        description: 'Available in freshly cut or properly air-dried variants as per requirement.',
        icon: TreeDeciduous,
    },
    {
        title: 'Debarked / Semi-Debarked',
        description: 'Professional debarking services available for smooth, clean finish.',
        icon: CheckCircle,
    },
];

const grades = [
    {
        title: 'A Grade',
        subtitle: 'Export Quality',
        description: 'Premium export-grade poles with superior straightness, uniform diameter, and flawless finish.',
        color: 'from-green-600 to-green-700',
    },
    {
        title: 'B Grade',
        subtitle: 'Domestic Use',
        description: 'High-quality poles suitable for domestic construction, scaffolding, and industrial applications.',
        color: 'from-yellow-600 to-yellow-700',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
    return (
        <section id="quality" className="py-20 bg-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-700/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-green-500 font-semibold tracking-wider uppercase">Quality Standards</span>
                    <h2 className="text-4xl font-bold text-white mt-2">
                        Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">Quality & Grading</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        We maintain strict quality control to ensure every pole meets international export standards.
                    </p>
                </div>

                {/* Quality Features */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {qualityFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-6 rounded-2xl bg-gray-900 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-700/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Grading Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-center text-white mb-12">
                        Quality <span className="text-green-500">Grades</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {grades.map((grade, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative p-8 rounded-2xl bg-gray-900 border-2 border-green-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${grade.color} rounded-t-2xl`}></div>
                                <div className="mb-4">
                                    <h4 className={`text-3xl font-bold bg-gradient-to-r ${grade.color} bg-clip-text text-transparent`}>
                                        {grade.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm font-medium mt-1">{grade.subtitle}</p>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {grade.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
