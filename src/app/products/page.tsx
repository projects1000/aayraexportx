'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Package } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Eucalyptus wood log',
        image: '/images/products/custom/eucalyptus-wood.png',
        grade: 'A & B Grade',
        diameter: '4-7 inch',
        length: '10-20 ft',
        description: 'Durable eucalyptus wood logs suitable for scaffolding, fencing, and industrial structure support.',
        features: ['Straight logs', 'Uniform diameter', 'Bulk stock ready', 'Export support'],
        applications: ['Scaffolding supply', 'Farm fencing', 'Industrial use'],
    },
    {
        id: 2,
        name: 'Basmati & Non-Basmati Rice',
        image: '/images/products/custom/basmati-rice.png',
        grade: 'Export Grade',
        diameter: 'Sortex Clean',
        length: '5kg-50kg packs',
        description: 'Premium basmati and non-basmati rice with consistent grain quality for domestic and export supply.',
        features: ['Uniform grain size', 'Low moisture', 'Sortex cleaned', 'Custom packing'],
        applications: ['Retail packaging', 'Wholesale trade', 'International export'],
    },
    {
        id: 3,
        name: 'Parboiled Rice',
        image: '/images/products/custom/parboiled-rice.png',
        grade: 'Premium Grade',
        diameter: 'Long & Medium Grain',
        length: '5kg-50kg packs',
        description: 'Nutritious parboiled rice processed for better shelf life and cooking stability.',
        features: ['Parboiled process', 'Better shelf life', 'Low broken ratio', 'Bulk availability'],
        applications: ['Food service', 'Institutional kitchens', 'Export consignments'],
    },
    {
        id: 4,
        name: 'Cashew Nuts',
        image: '/images/products/custom/cashew-nuts.png',
        grade: 'W180 - W240',
        diameter: 'Whole Kernels',
        length: '10kg-25kg packs',
        description: 'High-quality cashew kernels available in premium grades from 180 to 240.',
        features: ['Grade range 180-240', 'Uniform white kernels', 'Vacuum packed', 'Export quality'],
        applications: ['Snacking brands', 'Food processing', 'Global export buyers'],
    },
    {
        id: 5,
        name: 'Millet Rice',
        image: '/images/products/custom/millet-rice.png',
        grade: 'Natural Grade',
        diameter: 'Foxtail/Pearl Mix Options',
        length: '5kg-25kg packs',
        description: 'Healthy millet rice options sourced for nutrition-focused retail and bulk markets.',
        features: ['High fiber', 'Naturally gluten free', 'Cleaned and graded', 'Farm-direct sourcing'],
        applications: ['Health food brands', 'Retail stores', 'Modern trade'],
    },
    {
        id: 6,
        name: 'Fresh Ginger',
        image: '/images/products/custom/fresh-ginger.png',
        grade: 'A Grade Fresh',
        diameter: 'Bold / Medium',
        length: '5kg-30kg cartons',
        description: 'Fresh ginger with strong aroma and low fiber, suitable for export and processing.',
        features: ['Freshly harvested', 'Strong aroma', 'Low fiber', 'Careful sorting'],
        applications: ['Spice distributors', 'Food processing', 'Export shipments'],
    },
    {
        id: 7,
        name: 'Turmeric',
        image: '/images/products/custom/turmeric.png',
        grade: 'Curcumin Rich',
        diameter: 'Finger / Bulb',
        length: '5kg-50kg packs',
        description: 'Premium turmeric with rich color and curcumin content for spice and food industries.',
        features: ['High curcumin', 'Rich natural color', 'Sun dried', 'Machine cleaned'],
        applications: ['Spice processors', 'Wholesale markets', 'Export trade'],
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
                        Agro Export <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">Product Range</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        Premium rice, cashew, millet, and fresh spice products available in export-ready quality and custom pack sizes
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-700/80 bg-gradient-to-b from-gray-800 to-gray-900 shadow-[0_10px_28px_rgba(2,6,23,0.42)] hover:border-green-500/70 hover:shadow-[0_14px_34px_rgba(34,197,94,0.2)] transition-all duration-300"
                            >
                                {/* Product Image */}
                                <div className="relative h-56 md:h-60 p-3 bg-gradient-to-b from-gray-900/90 to-gray-800/70">
                                    <div className="relative h-full w-full rounded-xl bg-gray-950/55 ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="relative z-10 w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                                        {product.grade}
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="p-5 md:p-6 flex flex-col flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2.5 group-hover:text-green-300 transition-colors min-h-[58px] flex items-start leading-tight">
                                        {product.name}
                                    </h3>

                                    <p className="text-gray-300/90 mb-4 text-sm md:text-base leading-relaxed min-h-[68px]">
                                        {product.description}
                                    </p>

                                    {/* Specifications */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="flex items-center rounded-xl border border-gray-700/80 bg-gray-900/55 px-3 py-3 text-gray-100">
                                            <ShieldCheck className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Quality</p>
                                                <p className="font-semibold text-sm md:text-base">{product.diameter}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center rounded-xl border border-gray-700/80 bg-gray-900/55 px-3 py-3 text-gray-100">
                                            <Package className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Pack Size</p>
                                                <p className="font-semibold text-sm md:text-base">{product.length}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-white mb-2 tracking-wide uppercase">Key Features</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {product.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-300 leading-snug">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mr-1.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Applications */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-white mb-2 tracking-wide uppercase">Applications</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.applications.map((app, idx) => (
                                                <span key={idx} className="text-xs bg-gray-700/70 text-gray-200 border border-gray-600/60 px-2.5 py-1 rounded-full break-words">
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
                                        className="block w-full mt-auto px-5 py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white text-sm md:text-base font-semibold text-center hover:shadow-[0_0_22px_rgba(34,197,94,0.45)] transition-all duration-300"
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
                            We accommodate special requirements and large volume orders. Contact us for custom commodity quotes and flexible delivery options.
                        </p>
                        <a
                            href="https://wa.me/919702160068?text=Hello!%20I%20need%20a%20custom%20quote%20for%20bulk%20agro%20products."
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
