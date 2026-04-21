'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WoodGrainSpheres() {
    const [rotation, setRotation] = useState([0, 0, 0]);

    useFrame((state, delta) => {
        setRotation((prev) => [
            prev[0] + delta * 0.1,
            prev[1] + delta * 0.15,
            prev[2] + delta * 0.05,
        ]);
    });

    return (
        <group rotation={rotation as any}>
            {/* Large center sphere - Light wood */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#a0826d"
                    roughness={0.8}
                    metalness={0.1}
                />
            </mesh>

            {/* Medium sphere - Dark wood */}
            <mesh position={[-1.5, 0.5, 0.5]}>
                <sphereGeometry args={[0.7, 64, 64]} />
                <meshStandardMaterial
                    color="#6b4423"
                    roughness={0.85}
                    metalness={0.05}
                />
            </mesh>

            {/* Medium sphere - Medium brown */}
            <mesh position={[1.3, -0.6, -0.3]}>
                <sphereGeometry args={[0.65, 64, 64]} />
                <meshStandardMaterial
                    color="#8b6f47"
                    roughness={0.75}
                    metalness={0.1}
                />
            </mesh>

            {/* Small sphere - Rich brown */}
            <mesh position={[0.8, 1.2, 0.2]}>
                <sphereGeometry args={[0.45, 64, 64]} />
                <meshStandardMaterial
                    color="#5c4033"
                    roughness={0.9}
                    metalness={0.05}
                />
            </mesh>

            {/* Small sphere - Golden wood */}
            <mesh position={[-0.9, -1, -0.5]}>
                <sphereGeometry args={[0.4, 64, 64]} />
                <meshStandardMaterial
                    color="#b8956a"
                    roughness={0.7}
                    metalness={0.15}
                />
            </mesh>

            {/* Accent sphere - fresh produce theme */}
            <mesh position={[0.5, -0.3, 1.2]}>
                <sphereGeometry args={[0.5, 64, 64]} />
                <meshStandardMaterial
                    color="#22c55e"
                    emissive="#15803d"
                    emissiveIntensity={0.4}
                    roughness={0.6}
                    metalness={0.2}
                />
            </mesh>

            {/* Tiny accent sphere - Bright green */}
            <mesh position={[-0.5, 0.8, -0.8]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial
                    color="#4ade80"
                    emissive="#22c55e"
                    emissiveIntensity={0.3}
                    roughness={0.5}
                />
            </mesh>

            {/* Additional small wood sphere */}
            <mesh position={[1.5, 0.3, 0.8]}>
                <sphereGeometry args={[0.35, 32, 32]} />
                <meshStandardMaterial
                    color="#9d7a54"
                    roughness={0.8}
                    metalness={0.1}
                />
            </mesh>
        </group>
    );
}

export default function HeroSection() {
    const [text, setText] = useState('');
    const fullText = 'Premium Agro Export Products';
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullTxt = fullText;

            setText(
                isDeleting
                    ? fullTxt.substring(0, text.length - 1)
                    : fullTxt.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && text === fullTxt) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="relative min-h-screen flex items-center pt-24 md:pt-28 overflow-hidden bg-gray-900">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-green-700/20 blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-green-900/20 blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left space-y-8"
                >
                    <div className="relative inline-flex overflow-hidden rounded-full p-[2px] max-w-full">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#15803d_90%,#d4af37_100%)]" />
                        <span className="relative inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 backdrop-blur-3xl">
                            <span className="text-sm font-semibold leading-none bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600">
                                Export-Grade Agro Quality from India
                            </span>
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                        AAYRAEXPORTX <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-yellow-600 min-h-[1.2em] inline-block">
                            {text}
                            <span className="animate-pulse text-green-500">|</span>
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        Wholesale Supplier & Exporter of Agro Commodities
                    </p>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                        Reliable supplier of basmati and non-basmati rice, parboiled rice, cashew nuts (W180-W240), millet rice, fresh ginger, and turmeric.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="https://wa.me/919702160068?text=Hello!%20I%20am%20interested%20in%20bulk%20rice,%20cashew,%20millet,%20ginger,%20and%20turmeric." target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg shadow-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-300 inline-block text-center">
                            Get Bulk Quote
                        </a>
                        <Link href="/contact" className="px-8 py-4 rounded-full bg-gray-800 border-2 border-green-600 text-green-400 font-bold text-lg shadow-lg hover:bg-green-600 hover:text-white hover:scale-105 transition-all duration-300 inline-block text-center">
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                {/* 3D Animation Container */}
                <div className="h-[500px] lg:h-[700px] w-full relative">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={0.4} />
                        <directionalLight position={[10, 10, 5]} intensity={0.8} />
                        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
                        <pointLight position={[0, 0, 3]} intensity={0.5} color="#f5e6d3" />
                        <WoodGrainSpheres />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
