'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // 2.5 seconds load time

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <div className="relative flex flex-col items-center">
                        {/* Glowing Orb - Forest Green Theme */}
                        <motion.div
                            className="w-32 h-32 rounded-full bg-gradient-to-tr from-green-600 to-yellow-600 blur-2xl opacity-40 absolute"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Logo Text */}
                        <motion.div
                            className="flex flex-col items-center justify-center relative z-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Tree Icon */}
                            <motion.div
                                className="text-6xl mb-2"
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                🌲
                            </motion.div>

                            <span className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-yellow-600">
                                AAYRAEXPORTX
                            </span>
                            <span className="text-sm md:text-base text-gray-400 mt-2 tracking-wide">
                                Eucalyptus Wood Poles
                            </span>
                        </motion.div>

                        {/* Loading Bar - Green Theme */}
                        <div className="mt-8 w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
                            <motion.div
                                className="h-full bg-gradient-to-r from-green-600 to-yellow-600"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 2.3, ease: 'easeInOut' }}
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            className="mt-6 text-gray-400 text-sm tracking-widest uppercase flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <span>Loading Products</span>
                            <motion.span
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                ...
                            </motion.span>
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
