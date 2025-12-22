'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomDatePickerProps {
    value: string;
    onChange: (date: string) => void;
    placeholder?: string;
    className?: string;
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export default function CustomDatePicker({
    value,
    onChange,
    placeholder = 'Select Date',
    className = '',
}: CustomDatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Parse initial date or default to today
    const initialDate = value ? new Date(value) : new Date();
    const [currentDate, setCurrentDate] = useState(initialDate); // For navigation
    const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDateSelect = (day: number) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        // Adjust for timezone offset to ensure the string is correct YYYY-MM-DD
        // Actually, let's just use local string format
        const offset = newDate.getTimezoneOffset();
        const adjustedDate = new Date(newDate.getTime() - (offset * 60 * 1000));
        const dateString = adjustedDate.toISOString().split('T')[0];

        setSelectedDate(newDate);
        onChange(dateString);
        setIsOpen(false);
    };

    const formatDateDisplay = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDay = getFirstDayOfMonth(currentDate);
        const days = [];

        // Empty cells for days before start of month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isSelected = selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const isPast = date < today;
            const isToday = today.toDateString() === date.toDateString();

            days.push(
                <button
                    key={day}
                    onClick={() => !isPast && handleDateSelect(day)}
                    disabled={isPast}
                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm transition-all duration-200
                        ${isPast
                            ? 'text-gray-600 cursor-not-allowed opacity-50'
                            : isSelected
                                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }
                        ${isToday && !isSelected ? 'border border-indigo-500 text-indigo-400' : ''}
                    `}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            {/* Input Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white cursor-pointer flex items-center justify-between transition-all duration-300 group
                    ${isOpen ? 'ring-2 ring-indigo-500 border-transparent' : 'hover:border-gray-600'}
                `}
            >
                <span className={value ? 'text-white' : 'text-gray-500'}>
                    {value ? formatDateDisplay(value) : placeholder}
                </span>
                <CalendarIcon className={`w-5 h-5 transition-colors ${isOpen ? 'text-indigo-500' : 'text-gray-500 group-hover:text-gray-400'}`} />
            </div>

            {/* Calendar Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 mt-2 w-72 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 flex items-center justify-between border-b border-gray-700 bg-gray-800/50">
                            <button
                                onClick={handlePrevMonth}
                                className="p-1 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <span className="font-semibold text-white">
                                {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                            </span>
                            <button
                                onClick={handleNextMonth}
                                className="p-1 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Days Header */}
                        <div className="grid grid-cols-7 gap-1 p-2 border-b border-gray-700/50 bg-gray-800/30">
                            {DAYS.map(day => (
                                <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-gray-500">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="p-2 grid grid-cols-7 gap-1">
                            {renderCalendarDays()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
