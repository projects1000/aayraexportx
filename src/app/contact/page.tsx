'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CustomDropdown from '@/components/ui/CustomDropdown';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const contactDetails = [
    {
        icon: MapPin,
        title: 'Head Office:',
        content: 'Adya Palace, Mancheswar, Block B, 509, Bhubaneswar - 751007',
        link: null,
        iconColor: 'text-green-400',
        bgColor: 'bg-green-900/20'
    },
    {
        icon: Phone,
        title: 'Contact / WhatsApp',
        content: (
            <>
                <a href="tel:+919702160068" className="hover:text-green-500 transition-colors block">+91 9702160068</a>
            </>
        ),
        link: null,
        iconColor: 'text-green-400',
        bgColor: 'bg-green-900/20'
    },
    {
        icon: Mail,
        title: 'Email',
        content: 'info@aayraexportx.com',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@aayraexportx.com',
        iconColor: 'text-yellow-600',
        bgColor: 'bg-yellow-900/20'
    },
    {
        icon: Clock,
        title: 'Business Hours',
        content: 'Mon - Sat: 9.00-6.00\nSunday: Closed',
        link: null,
        iconColor: 'text-green-400',
        bgColor: 'bg-green-900/20'
    },
];

export default function ContactPage() {
    const [inquiryType, setInquiryType] = useState('');

    const dropdownOptions = [
        { label: 'Bulk Quote Inquiry', value: 'bulk' },
        { label: 'Export Documentation', value: 'export' },
        { label: 'General Inquiry', value: 'general' },
    ];

    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />

            <div className="pt-24 pb-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-white">
                        Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-600">AAYRAEXPORTX</span>
                    </h1>
                </motion.div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactDetails.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group h-full flex flex-col items-center overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10 flex flex-col items-center h-full w-full">
                                    <div className={`w-16 h-16 mb-6 ${info.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <info.icon className={`w-8 h-8 ${info.iconColor}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-4">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-green-500 transition-colors"
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                            {info.content}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Get In Touch & Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Contact Form */}
                            <div className="p-8 lg:p-12">
                                <h2 className="text-3xl font-bold text-white mb-8">
                                    Get In <span className="text-green-500">Touch</span>
                                </h2>
                                <form className="space-y-6">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Full Name / Company Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Phone / WhatsApp (+91)"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <CustomDropdown
                                            options={dropdownOptions}
                                            value={inquiryType}
                                            onChange={setInquiryType}
                                            placeholder="How can we help you?"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            rows={4}
                                            placeholder="Your Requirement (quantity, size, etc.)"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] text-white font-semibold rounded-full transition-all flex items-center justify-center space-x-2"
                                    >
                                        <span>Send Inquiry</span>
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            </div>

                            {/* Map */}
                            <div className="relative h-[400px] lg:h-auto bg-gray-200">
                                <iframe
                                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Mega%20Aadya%20Palace%20Mancheswar%20Bhubaneswar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                ></iframe>
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <span className="bg-black/80 text-white text-xs px-2 py-1 rounded">Head Office</span>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
