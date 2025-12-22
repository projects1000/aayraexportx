'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
    {
        src: '/images/eucalyptus-poles-1.jpg',
        alt: 'Stacked Eucalyptus Wood Poles',
        category: 'Yard Stock',
    },
    {
        src: '/images/eucalyptus-poles-2.jpg',
        alt: 'Sorted Poles by Diameter',
        category: 'Quality Grading',
    },
    {
        src: '/images/eucalyptus-poles-3.jpg',
        alt: 'Timber Yard Operations',
        category: 'Operations',
    },
    {
        src: '/images/eucalyptus-poles-4.jpg',
        alt: 'Export Container Loading',
        category: 'Export',
    },
    {
        src: '/images/eucalyptus-poles-5.jpg',
        alt: 'Quality Inspection',
        category: 'Quality Control',
    },
    {
        src: '/images/eucalyptus-poles-6.jpg',
        alt: 'Eucalyptus Plantation',
        category: 'Sourcing',
    },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
                    <span className="text-green-500 font-semibold tracking-wider uppercase block mb-2">Our Facility</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Timber Yard <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">& Operations</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        Take a look at our well-organized timber yard, quality control processes, and export operations
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                                onClick={() => setSelectedImage(index)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold mb-2">
                                            {image.category}
                                        </span>
                                        <h3 className="text-white font-bold text-lg">{image.alt}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl text-gray-300 mb-6">Interested in visiting our facility?</p>
                    <a
                        href="https://wa.me/919702160068?text=Hello!%20I%20would%20like%20to%20visit%20your%20timber%20yard."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg shadow-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-300"
                    >
                        Schedule a Visit
                    </a>
                </motion.div>
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={galleryImages[selectedImage].src}
                        alt={galleryImages[selectedImage].alt}
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <span className="inline-block px-4 py-2 rounded-full bg-green-600 text-white font-semibold">
                            {galleryImages[selectedImage].category}
                        </span>
                        <p className="text-white text-lg mt-2">{galleryImages[selectedImage].alt}</p>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
