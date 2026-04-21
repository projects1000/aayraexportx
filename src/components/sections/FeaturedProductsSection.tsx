'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Ruler, Package, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const featuredProducts = [
    {
        id: 1,
        name: 'Eucalyptus wood log',
        image: '/images/products/custom/eucalyptus-wood.png',
        grade: 'A & B Grade',
        diameter: '4-7 inch',
        length: '10-20 ft',
        description: 'Durable eucalyptus wood logs suitable for scaffolding, fencing, and industrial use.',
        features: ['Straight logs', 'Bulk stock', 'Export ready'],
    },
    {
        id: 2,
        name: 'Basmati & Non-Basmati Rice',
        image: '/images/products/custom/basmati-rice.png',
        grade: 'Export Grade',
        diameter: 'Sortex Clean',
        length: '5kg-50kg packs',
        description: 'Premium basmati and non-basmati rice with consistent quality and custom packaging.',
        features: ['Low moisture', 'Uniform grains', 'Custom packs'],
    },
    {
        id: 3,
        name: 'Parboiled Rice',
        image: '/images/products/custom/parboiled-rice.png',
        grade: 'Premium Grade',
        diameter: 'Long & Medium Grain',
        length: '5kg-50kg packs',
        description: 'Parboiled rice with better shelf life and stable cooking performance.',
        features: ['Low broken ratio', 'Bulk supply', 'Export ready'],
    },
    {
        id: 4,
        name: 'Cashew Nuts',
        image: '/images/products/custom/cashew-nuts.png',
        grade: 'W180 - W240',
        diameter: 'Whole Kernels',
        length: '10kg-25kg packs',
        description: 'Premium quality cashew kernels, available in grades 180 to 240.',
        features: ['Grade 180-240', 'Uniform kernels', 'Vacuum packed'],
    },
];

export default function FeaturedProductsSection() {
    return (
        <section className="py-20 bg-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-green-500 font-semibold tracking-wider uppercase">Featured Products</span>
                    <h2 className="text-4xl font-bold text-white mt-2">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">Product Range</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Explore our premium rice, cashew, millet, and fresh spice offerings for domestic and export buyers
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    {product.grade}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                                    {product.name}
                                </h3>

                                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                    {product.description}
                                </p>

                                {/* Specifications */}
                                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                                    <div className="flex items-center">
                                        <Ruler className="w-4 h-4 text-green-500 mr-1" />
                                        <span>{product.diameter}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Package className="w-4 h-4 text-green-500 mr-1" />
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
                                    className="block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold text-center hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300"
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
                    className="text-center mt-12"
                >
                    <Link
                        href="/products"
                        className="inline-flex items-center px-8 py-3 rounded-full bg-gray-900 border-2 border-green-600 text-green-400 font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
                    >
                        View All Products
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
