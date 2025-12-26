'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Ruler, Package, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const featuredProducts = [
    {
        id: 1,
        name: 'Construction Scaffolding Poles',
        image: '/images/product-scaffolding.jpg',
        grade: 'A & B Grade',
        diameter: '4-6 inch',
        length: '10-20 ft',
        description: 'Premium eucalyptus poles ideal for construction scaffolding and temporary structures.',
        features: ['High strength', 'Uniform diameter', 'Crack-free'],
    },
    {
        id: 2,
        name: 'Agricultural Fencing Poles',
        image: '/images/product-fencing.jpg',
        grade: 'B Grade',
        diameter: '3-5 inch',
        length: '8-16 ft',
        description: 'Durable fencing poles perfect for agricultural and farm applications.',
        features: ['Weather resistant', 'Natural treatment', 'Cost-effective'],
    },
    {
        id: 3,
        name: 'Heavy-Duty Industrial Poles',
        image: '/images/product-industrial.jpg',
        grade: 'A Grade',
        diameter: '6-8 inch+',
        length: '12-20 ft',
        description: 'Extra thick poles for heavy-duty industrial and commercial applications.',
        features: ['Maximum strength', 'Large diameter', 'Export grade'],
    },
    {
        id: 4,
        name: 'Export Grade Premium Poles',
        image: '/images/product-export.jpg',
        grade: 'A+ Export',
        diameter: '4-7 inch',
        length: '10-20 ft',
        description: 'Top-quality export-grade poles with superior straightness and finish.',
        features: ['Export certified', 'Perfect straightness', 'Debarked'],
    },
];

export default function FeaturedProductsSection() {
    return (
        <section className="py-20 bg-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8 sm:mb-12 px-4">
                    <span className="text-green-500 font-semibold tracking-wider uppercase text-sm">Featured Products</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">Product Range</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                        Explore our selection of premium eucalyptus wood poles for various applications
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.03,
                                y: -8,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17
                                }
                            }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-green-600 shadow-lg hover:shadow-[0_20px_60px_rgba(34,197,94,0.3)] group cursor-pointer"
                        >
                            {/* Product Image */}
                            <div className="relative h-40 sm:h-48 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 right-3 bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                                    {product.grade}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-4 sm:p-5">
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                                    {product.name}
                                </h3>

                                <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">
                                    {product.description}
                                </p>

                                {/* Specifications */}
                                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                                    <div className="flex items-center">
                                        <Ruler className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1" />
                                        <span>{product.diameter}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Package className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1" />
                                        <span>{product.length}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-1 mb-4">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-xs text-gray-400">
                                            <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Quote Button */}
                                <a
                                    href={`https://wa.me/919702160068?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(product.name)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full px-4 py-2.5 sm:py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white text-xs sm:text-sm font-semibold text-center hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300 min-h-[44px] flex items-center justify-center"
                                >
                                    Get Quote
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Products Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-8 sm:mt-12"
                >
                    <Link
                        href="/products"
                        className="inline-flex items-center px-6 sm:px-8 py-3 rounded-full bg-gray-900 border-2 border-green-600 text-green-400 font-semibold text-sm sm:text-base hover:bg-green-600 hover:text-white transition-all duration-300 min-h-[44px]"
                    >
                        View All Products
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
