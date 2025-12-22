'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import Link from 'next/link';

interface Message {
    id: string;
    text: React.ReactNode;
    sender: 'user' | 'bot';
    timestamp: Date;
}

interface KnowledgeEntry {
    keywords: string[];
    response: React.ReactNode;
}

const knowledgeBase: KnowledgeEntry[] = [
    // --- Company Info ---
    {
        keywords: ['mission'],
        response: "Our mission is to simplify technology and deliver scalable, secure, and user-friendly solutions that drive client success."
    },
    {
        keywords: ['vision'],
        response: "Our vision is to be a global leader in digital innovation—helping businesses unlock their full potential through tech excellence."
    },
    {
        keywords: ['who are you', 'what is aayratechx', 'about company', 'about us'],
        response: "AayraTechX is a forward-thinking IT company committed to driving digital transformation. We specialize in crafting powerful software and integrating with popular platforms."
    },
    {
        keywords: ['address', 'location', 'where', 'office', 'map'],
        response: (
            <span>
                Our head office is located at: <br />
                <strong>Adya Palace, Mancheswar, Block B, 509, Bhubaneswar - 751007</strong>. <br />
                <a href="https://maps.google.com/maps?q=Mega+Aadya+Palace+Mancheswar+Bhubaneswar" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline hover:text-indigo-300">
                    View on Map
                </a>
            </span>
        )
    },
    {
        keywords: ['technology', 'tech', 'stack', 'framework', 'language'],
        response: (
            <span>
                We specialize in modern web technologies including <strong>Next.js, React, Node.js, and AI solutions</strong>. <br />
                See more at our{' '}
                <Link href="/#technologies" className="text-indigo-400 underline hover:text-indigo-300">
                    Technologies Section
                </Link>
                .
            </span>
        )
    },

    // --- Team ---
    {
        keywords: ['ceo', 'pulok', 'director', 'leader'],
        response: "Our CEO and Director is Pulok Jyotshna Das, leading our creative team for growth-up works."
    },
    {
        keywords: ['architect', 'priyabrata', 'chinmay', 'sankaraju'],
        response: "Our architectural team includes Priyabrata Pattanaik (Architect), Chinmay Patel (Database Architect), and Sankaraju Chamarthi (Devops Architect)."
    },
    {
        keywords: ['developer', 'tanish', 'lokesh', 'team'],
        response: "Our senior developers include Tanish Tanmay Sahoo and Ch Lokesh Reddy. We have a team of experienced developers, designers, and strategists."
    },

    // --- Products ---
    {
        keywords: ['transport', 'fleet', 'vehicle', 'jr transport'],
        response: "JR Transport Management System is a PWA for complete transport operations including fleet tracking, vehicle & driver management, and route planning."
    },
    {
        keywords: ['gis', 'map', 'survey', 'geosurvey'],
        response: "GeoSurvey Pro is an advanced GIS mapping and land survey analysis tool for urban planning and geographical data management."
    },
    {
        keywords: ['trading', 'investment', 'stock', 'trademaster'],
        response: "TradeMaster is an algorithmic trading and investment platform offering real-time market analysis and portfolio management."
    },
    {
        keywords: ['hospital', 'hms', 'medical', 'hospitall'],
        response: "HospitAll is an integrated hospital management system (HMS) for streamlining administrative, clinical, and financial operations."
    },
    {
        keywords: ['finance', 'analytics', 'fintrack'],
        response: "FinTrack Pro is an AI-powered financial analytics platform for enterprise resource planning and forecasting."
    },
    {
        keywords: ['education', 'learning', 'lms', 'edusphere'],
        response: "EduSphere is an immersive learning management system with virtual reality integration for remote education."
    },
    {
        keywords: ['blockchain', 'supply chain', 'logichain'],
        response: "LogiChain is a Blockchain-based supply chain transparency tool for real-time tracking and verification."
    },
    {
        keywords: ['product', 'service', 'offer'],
        response: (
            <span>
                Explore our wide range of products and services on the{' '}
                <Link href="/products" className="text-indigo-400 underline hover:text-indigo-300">
                    Products Page
                </Link>
                .
            </span>
        )
    },

    // --- Careers ---
    {
        keywords: ['hiring', 'career', 'job', 'work', 'vacancy', 'opening'],
        response: (
            <span>
                We are hiring! Open positions include <strong>Junior Full Stack Developer, UI/UX Designer, and Product Manager</strong>. <br />
                Check out our{' '}
                <Link href="/careers" className="text-indigo-400 underline hover:text-indigo-300">
                    Careers Page
                </Link>
                .
            </span>
        )
    },
    {
        keywords: ['benefit', 'perk', 'remote'],
        response: "We offer Remote First work, Rapid Growth opportunities, Comprehensive Health & Wellness programs, and access to Cutting-Edge Tech."
    },

    // --- Capabilities & Services ---
    {
        keywords: ['ecommerce', 'shop', 'store', 'business website', 'online store'],
        response: (
            <span>
                Yes, we specialize in building robust E-commerce platforms. While our portfolio features complex enterprise solutions like{' '}
                <Link href="/products" className="text-indigo-400 underline hover:text-indigo-300">
                    TradeMaster
                </Link>{' '}
                and{' '}
                <Link href="/products" className="text-indigo-400 underline hover:text-indigo-300">
                    JR Transport
                </Link>
                , we apply the same high standards to E-commerce development.
            </span>
        )
    },
    {
        keywords: ['mobile app', 'android', 'ios', 'flutter', 'react native'],
        response: (
            <span>
                Yes, we develop cross-platform mobile applications. Check out our{' '}
                <Link href="/products" className="text-indigo-400 underline hover:text-indigo-300">
                    JR Transport Management System
                </Link>{' '}
                which includes a PWA for fleet management.
            </span>
        )
    },
    {
        keywords: ['custom software', 'bespoke', 'software development'],
        response: (
            <span>
                Absolutely. Custom software development is our core expertise. Browse our{' '}
                <Link href="/products" className="text-indigo-400 underline hover:text-indigo-300">
                    Products Page
                </Link>{' '}
                to see diverse examples like GIS tools and Hospital Management Systems.
            </span>
        )
    },
    {
        keywords: ['digital marketing', 'seo', 'marketing'],
        response: "Yes, we offer data-driven digital marketing strategies including SEO, SEM, and Content Strategy to boost your brand visibility."
    },

    // --- General ---
    {
        keywords: ['book', 'appointment', 'schedule'],
        response: (
            <span>
                You can book our services easily. Please visit our{' '}
                <Link href="/booking" className="text-indigo-400 underline hover:text-indigo-300">
                    Booking Page
                </Link>
                .
            </span>
        )
    },
    {
        keywords: ['contact', 'email', 'phone', 'call'],
        response: (
            <span>
                You can reach out to us via our{' '}
                <Link href="/contact" className="text-indigo-400 underline hover:text-indigo-300">
                    Contact Page
                </Link>
                .
            </span>
        )
    },
    {
        keywords: ['error', 'bug', 'fail', 'exception', 'crash', 'not working'],
        response: (
            <span>
                It looks like you're encountering a technical issue. <br />
                1. Try refreshing the page. <br />
                2. Clear your browser cache. <br />
                3. If the issue persists, please email this error to{' '}
                <a href="mailto:support@aayratechx.com" className="text-indigo-400 underline hover:text-indigo-300">
                    support@aayratechx.com
                </a>
                .
            </span>
        )
    },
    {
        keywords: ['hello', 'hi', 'hey'],
        response: "Hello! How can I assist you with AayraTechX today?"
    }
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Hi there! 👋 I can tell you about our team, products, or help you navigate. How can I help?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();

        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate bot thinking delay
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage.text as string);
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    text: botResponse,
                    sender: 'bot',
                    timestamp: new Date(),
                },
            ]);
            setIsTyping(false);
        }, 1000);
    };

    const getBotResponse = (text: string): React.ReactNode => {
        const lowerText = text.toLowerCase();
        let bestMatch: KnowledgeEntry | null = null;
        let maxKeywords = 0;

        // Find the entry with the most matching keywords
        for (const entry of knowledgeBase) {
            let matchCount = 0;
            for (const keyword of entry.keywords) {
                if (lowerText.includes(keyword)) {
                    matchCount++;
                }
            }
            // Prioritize longer matches or more specific ones if needed, 
            // but simple count is a good start. 
            // We use >= to allow later entries to override earlier ones if they have same count (optional strategy)
            // or > to keep first match. Let's use > to prioritize order in array if counts are equal.
            if (matchCount > maxKeywords) {
                maxKeywords = matchCount;
                bestMatch = entry;
            }
        }

        if (bestMatch && maxKeywords > 0) {
            return bestMatch.response;
        }

        return "I'm not sure I have the details on that. You can ask me about our products, team, mission, or careers!";
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full shadow-lg text-white hover:shadow-indigo-500/50 transition-shadow ${isOpen ? 'hidden' : 'flex'}`}
            >
                <MessageCircle className="w-6 h-6" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px]"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <h3 className="font-bold text-white">AayraTechX Support</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-900/95 space-y-4 min-h-[300px]">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user'
                                            ? 'bg-indigo-600 text-white rounded-tr-none'
                                            : 'bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700'
                                            }`}
                                    >
                                        <div className="text-sm">{msg.text}</div>
                                        <div className="text-[10px] opacity-50 mt-1 text-right">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none border border-gray-700 flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-gray-800 border-t border-gray-700">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about team, products..."
                                    className="flex-1 bg-gray-900 border border-gray-700 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
