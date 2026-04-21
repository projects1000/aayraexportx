'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
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
        response: 'Our mission is to deliver reliable export-grade agro products with consistent quality, transparent sourcing, and dependable global logistics.'
    },
    {
        keywords: ['vision'],
        response: 'Our vision is to be a trusted global agro export partner known for quality, reliability, and long-term customer relationships.'
    },
    {
        keywords: ['who are you', 'what is aayratechx', 'about company', 'about us'],
        response: 'AAYRAEXPORTX is an Indian wholesaler and exporter of rice, cashew nuts, millet rice, fresh ginger, and turmeric for domestic and international buyers.'
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
                Our strength is in <strong>quality sourcing, grading, packaging, and export logistics</strong> for agro commodities. <br />
                See more in our{' '}
                <Link href="/#quality" className="text-indigo-400 underline hover:text-indigo-300">
                    Quality Section
                </Link>
                .
            </span>
        )
    },

    // --- Team ---
    {
        keywords: ['ceo', 'pulok', 'director', 'leader'],
        response: 'Our leadership team oversees sourcing, quality assurance, and export operations to ensure reliable delivery for every order.'
    },
    {
        keywords: ['architect', 'priyabrata', 'chinmay', 'sankaraju'],
        response: 'Our operations team manages procurement, quality grading, packaging, and shipment planning to support domestic and export buyers.'
    },
    {
        keywords: ['developer', 'tanish', 'lokesh', 'team'],
        response: 'We have an experienced team for quality control, bulk order handling, documentation, and customer support.'
    },

    // --- Products ---
    {
        keywords: ['basmati', 'non basmati', 'rice'],
        response: 'We supply premium basmati and non-basmati rice in export-ready quality and custom pack sizes.'
    },
    {
        keywords: ['parboiled', 'parboiled rice'],
        response: 'Yes, we supply parboiled rice with good grain consistency, low broken ratio, and bulk availability.'
    },
    {
        keywords: ['cashew', '180', '240', 'w180', 'w240'],
        response: 'We offer premium whole cashew kernels in quality grades from W180 to W240.'
    },
    {
        keywords: ['millet', 'millet rice'],
        response: 'We supply nutritious millet rice options for retail, wholesale, and export markets.'
    },
    {
        keywords: ['ginger', 'fresh ginger'],
        response: 'Fresh ginger is available in graded lots suitable for export and processing requirements.'
    },
    {
        keywords: ['turmeric', 'haldi'],
        response: 'We supply premium turmeric with rich natural color and quality suitable for spice trade and export.'
    },
    {
        keywords: ['product', 'products', 'service', 'offer'],
        response: (
            <span>
                Our products include basmati and non-basmati rice, parboiled rice, cashew nuts (W180-W240), millet rice, fresh ginger, and turmeric. Explore details on the{' '}
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
        response: 'We offer a professional work environment with growth opportunities in sourcing, quality operations, and export management.'
    },

    // --- Capabilities & Services ---
    {
        keywords: ['ecommerce', 'shop', 'store', 'business website', 'online store'],
        response: 'We focus on agro product sourcing and exports. For product inquiries, share your requirement and quantity through our booking page.'
    },
    {
        keywords: ['mobile app', 'android', 'ios', 'flutter', 'react native'],
        response: 'Our core business is agro exports. Please contact us for product specs, pricing, and delivery timelines.'
    },
    {
        keywords: ['custom software', 'bespoke', 'software development'],
        response: 'We are an agro export company. Ask us about rice, cashew nuts, millet rice, ginger, and turmeric supply options.'
    },
    {
        keywords: ['digital marketing', 'seo', 'marketing'],
        response: 'For business inquiries, our team can help with product catalogs, quotations, and shipment planning.'
    },

    // --- General ---
    {
        keywords: ['book', 'appointment', 'schedule'],
        response: (
            <span>
                You can book product inquiries easily. Please visit our{' '}
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
        response: 'Hello! How can I help you with rice, cashew nuts, millet rice, ginger, or turmeric today?'
    }
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Hi there! I can help with product details, quality grades, and booking for rice, cashew, millet, ginger, and turmeric. How can I help?',
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
                                <h3 className="font-bold text-white">AAYRAEXPORTX Support</h3>
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
                                    placeholder="Ask about rice, cashew, millet..."
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
