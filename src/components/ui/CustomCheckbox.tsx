'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CustomCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    className?: string;
}

export default function CustomCheckbox({
    checked,
    onChange,
    label,
    className = '',
}: CustomCheckboxProps) {
    return (
        <label className={`flex items-center space-x-3 cursor-pointer group ${className}`}>
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <motion.div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors duration-300 ${checked
                            ? 'bg-gradient-to-r from-indigo-500 to-pink-500 border-transparent'
                            : 'bg-gray-900 border-gray-600 group-hover:border-indigo-500'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        initial={false}
                        animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                        <Check className="w-4 h-4 text-white font-bold" strokeWidth={3} />
                    </motion.div>
                </motion.div>
            </div>
            {label && (
                <span className={`text-gray-400 group-hover:text-white transition-colors select-none ${checked ? 'text-white' : ''}`}>
                    {label}
                </span>
            )}
        </label>
    );
}
