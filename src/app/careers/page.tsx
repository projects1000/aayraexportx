'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Briefcase, Code, Globe, Heart, Rocket, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const benefits = [
    {
        icon: <Globe className="w-8 h-8 text-indigo-400" />,
        title: 'Remote First',
        description: 'Work from anywhere in the world. We believe in freedom and flexibility.'
    },
    {
        icon: <Rocket className="w-8 h-8 text-pink-400" />,
        title: 'Rapid Growth',
        description: 'Join a fast-paced environment where your contributions directly impact our success.'
    },
    {
        icon: <Heart className="w-8 h-8 text-red-400" />,
        title: 'Health & Wellness',
        description: 'Comprehensive health insurance and wellness programs to keep you at your best.'
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        title: 'Cutting-Edge Tech',
        description: 'Work with the latest technologies and tools. We never stop learning.'
    }
];

const positions = [
    {
        title: 'Junior Full Stack Developer',
        type: 'Full-time',
        location: 'Remote',
        department: 'Engineering',
        description: 'We are looking for an experienced developer to lead our core product development using Next.js and Node.js.'
    },
    {
        title: 'UI/UX Designer',
        type: 'Full-time',
        location: 'Remote',
        department: 'Design',
        description: 'Create stunning, user-centric interfaces that delight our users and elevate our brand.'
    },
    {
        title: 'Product Manager',
        type: 'Full-time',
        location: 'Remote',
        department: 'Product',
        description: 'Drive the product vision and strategy, working closely with engineering and design teams.'
    }
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-6 border border-indigo-500/20">
                            We Are Hiring
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Build the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">Future</span> With Us
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                            Join a team of passionate innovators, creators, and problem solvers. We're on a mission to redefine digital experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="#positions" className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-105 transition-all duration-300">
                                View Open Positions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Join AayraTechX?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We offer more than just a job. We offer a career where you can grow, learn, and make a real impact.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
                            >
                                <div className="mb-6 p-4 bg-gray-800 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="positions" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
                        <p className="text-gray-400">
                            Find the role that fits your skills and passion.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {positions.map((position, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{position.title}</h3>
                                    <div className="flex flex-wrap gap-3 mb-4 text-sm">
                                        <span className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 flex items-center">
                                            <Briefcase className="w-3 h-3 mr-2" /> {position.type}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 flex items-center">
                                            <Globe className="w-3 h-3 mr-2" /> {position.location}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 flex items-center">
                                            <Code className="w-3 h-3 mr-2" /> {position.department}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 max-w-2xl">
                                        {position.description}
                                    </p>
                                </div>
                                <Link href="mailto:info@aayratechx.com" className="shrink-0">
                                    <button className="w-full md:w-auto px-6 py-3 rounded-xl bg-gray-700 hover:bg-indigo-600 text-white font-semibold transition-all duration-300 flex items-center justify-center">
                                        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center mt-12 p-8 bg-indigo-900/20 rounded-2xl border border-indigo-500/20"
                    >
                        <p className="text-gray-300 mb-4">Don't see a role that fits?</p>
                        <p className="text-gray-400 text-sm mb-6">
                            We are always looking for talented individuals. Send your resume to <a href="mailto:info@aayratechx.com" className="text-indigo-400 hover:underline">info@aayratechx.com</a>
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
