'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomDropdown from '@/components/ui/CustomDropdown';
import CustomCheckbox from '@/components/ui/CustomCheckbox';
import CustomDatePicker from '@/components/ui/CustomDatePicker';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Code, Layers, MapPin, Mail, Phone, User, Send } from 'lucide-react';

const projectTypes = [
    { label: 'Web Application', value: 'Web Application' },
    { label: 'Mobile App (iOS/Android)', value: 'Mobile App' },
    { label: 'E-commerce Platform', value: 'E-commerce' },
    { label: 'Corporate Website', value: 'Corporate Website' },
    { label: 'AI/ML Solution', value: 'AI/ML Solution' },
    { label: 'Other', value: 'Other' },
];

export default function BookingPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        projectName: '',
        projectType: 'Web Application',
        keyFeatures: '',
        requirements: '',
        deadline: '',
        budget: '',
        techStack: '',
        techStackFlexible: true,
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDropdownChange = (value: string) => {
        setFormData(prev => ({ ...prev, projectType: value }));
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData(prev => ({ ...prev, techStackFlexible: checked }));
    };

    const handleDateChange = (date: string) => {
        setFormData(prev => ({ ...prev, deadline: date }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            window.scrollTo(0, 0);
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-gray-900 flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center px-4 pt-24 pb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gray-800 p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-gray-700"
                    >
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Request Initiated!</h2>
                        <p className="text-gray-300 mb-8">
                            Thank you for submitting your project details. We have received your request and will get back to you within 24 hours.
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Back to Home
                        </button>
                    </motion.div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-900">
            <Navbar />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">Project</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Tell us about your vision. Fill out the form below to get a custom quote and timeline for your project.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-700"
                    >
                        <div className="p-8 md:p-12 space-y-12">

                            {/* Project Details Section */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white flex items-center border-b border-gray-700 pb-4">
                                    <Layers className="w-6 h-6 mr-3 text-indigo-500" />
                                    Project Details
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Project Name</label>
                                        <input
                                            type="text"
                                            name="projectName"
                                            value={formData.projectName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                            placeholder="e.g. Super App 2.0"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Project Type</label>
                                        <CustomDropdown
                                            options={projectTypes}
                                            value={formData.projectType}
                                            onChange={handleDropdownChange}
                                            placeholder="Select Project Type"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Key Features</label>
                                    <textarea
                                        name="keyFeatures"
                                        value={formData.keyFeatures}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="List the main features you need..."
                                    ></textarea>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Detailed Requirements</label>
                                    <textarea
                                        name="requirements"
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Describe your project requirements in detail..."
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 col-span-2">
                                        <label className="text-sm font-medium text-gray-300 flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-indigo-400" /> Deadline
                                        </label>
                                        <CustomDatePicker
                                            value={formData.deadline}
                                            onChange={handleDateChange}
                                            placeholder="Select Project Deadline"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 flex items-center">
                                        <Code className="w-4 h-4 mr-2 text-indigo-400" /> Tech Stack Preference
                                    </label>
                                    <div className="flex flex-col space-y-3">
                                        <input
                                            type="text"
                                            name="techStack"
                                            value={formData.techStack}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                            placeholder="e.g. React, Node.js, Python (Optional)"
                                        />
                                        <CustomCheckbox
                                            checked={formData.techStackFlexible}
                                            onChange={handleCheckboxChange}
                                            label="As you wish (We will recommend the best stack)"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details Section */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white flex items-center border-b border-gray-700 pb-4">
                                    <User className="w-6 h-6 mr-3 text-pink-500" />
                                    Contact Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 flex items-center">
                                            <Phone className="w-4 h-4 mr-2 text-pink-400" /> Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 flex items-center">
                                        <Mail className="w-4 h-4 mr-2 text-pink-400" /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 flex items-center">
                                        <MapPin className="w-4 h-4 mr-2 text-pink-400" /> Address / Company Details
                                    </label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        rows={2}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Your company address or location..."
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <span>Submit Project Request</span>
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>

                        </div>
                    </motion.form>
                </div>
            </div>
            <Footer />
        </main>
    );
}
