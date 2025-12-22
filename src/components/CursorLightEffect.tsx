'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorLightEffect() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen"
            style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(236,72,153,0.5) 50%, transparent 100%)',
                boxShadow: '0 0 20px 10px rgba(99,102,241,0.3)',
                filter: 'blur(5px)',
            }}
        />
    );
}
