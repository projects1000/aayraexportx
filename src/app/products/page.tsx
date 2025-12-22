'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Ruler, Package } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Construction Scaffolding Poles',
        image: '/images/product-scaffolding.jpg',
        grade: 'A & B Grade',
        diameter: '4-6 inch',
        length: '10-20 ft',
        description: 'Premium eucalyptus poles ideal for construction scaffolding and temporary structures.',
        features: ['High strength', 'Uniform diameter', 'Crack-free', 'Air-dried'],
        applications: ['Building construction', 'Scaffolding systems', 'Support structures'],
    },
    {
        id: 2,
        name: 'Agricultural Fencing Poles',
        image: '/images/product-fencing.jpg',
        grade: 'B Grade',
        diameter: '3-5 inch',
        length: '8-16 ft',
        description: 'Durable fencing poles perfect for agricultural and farm applications.',
        features: ['Weather resistant', 'Natural treatment', 'Long-lasting', 'Cost-effective'],
        applications: ['Farm fencing', 'Property boundaries', 'Livestock enclosures'],
    },
    {
        id: 3,
        name: 'Heavy-Duty Industrial Poles',
        image: '/images/product-industrial.jpg',
        grade: 'A Grade',
        diameter: '6-8 inch+',
        length: '12-20 ft',
        description: 'Extra thick poles for heavy-duty industrial and commercial applications.',
        features: ['Maximum strength', 'Large diameter', 'Premium quality', 'Export grade'],
        applications: ['Industrial construction', 'Mining support', 'Heavy structures'],
    },
    {
        id: 4,
        name: 'Export Grade Premium Poles',
        image: '/images/product-export.jpg',
        grade: 'A+ Export Grade',
        diameter: '4-7 inch',
        length: '10-20 ft',
        description: 'Top-quality export-grade poles with superior straightness and finish.',
        features: ['Export certified', 'Perfect straightness', 'Debarked', 'Premium sorting'],
        applications: ['International markets', 'High-end projects', 'Quality-focused buyers'],
    },
];

export default function ProductsPageShowcase() {
    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />

            <div className="pt-24 pb-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 px-4"
                >
                    <span className="text-green-500 font-semibold tracking-wider uppercase block mb-2">Our Products</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Eucalyptus (Nilgiri) <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">Wood Poles</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        Premium quality eucalyptus wood poles available in various sizes and grades for all your construction and industrial needs
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-600 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                {/* Product Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                                        {product.grade}
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                        {product.name}
                                    </h3>

                                    <p className="text-gray-400 mb-4">
                                        {product.description}
                                    </p>

                                    {/* Specifications */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="flex items-center text-gray-300">
                                            <Ruler className="w-5 h-5 text-green-500 mr-2" />
                                            <div>
                                                <p className="text-xs text-gray-500">Diameter</p>
                                                <p className="font-semibold">{product.diameter}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <Package className="w-5 h-5 text-green-500 mr-2" />
                                            <div>
                                                <p className="text-xs text-gray-500">Length</p>
                                                <p className="font-semibold">{product.length}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {product.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-400">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mr-1 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Applications */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-white mb-2">Applications:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.applications.map((app, idx) => (
                                                <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                                                    {app}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href={`https://wa.me/919702160068?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20provide%20pricing%20and%20availability.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-center hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300"
                                    >
                                        Request Quote
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bulk Order CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="max-w-3xl mx-auto px-4">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Need Custom Specifications or Bulk Orders?
                        </h3>
                        <p className="text-gray-400 mb-6">
                            We accommodate special requirements and large volume orders. Contact us for custom quotes and flexible delivery options.
                        </p>
                        <a
                            href="https://wa.me/919702160068?text=Hello!%20I%20need%20a%20custom%20quote%20for%20bulk%20eucalyptus%20wood%20poles."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg shadow-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-300"
                        >
                            Get Custom Quote
                        </a>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
