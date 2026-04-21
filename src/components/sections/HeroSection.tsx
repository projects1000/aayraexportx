'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Environment, RoundedBox, ContactShadows, MeshDistortMaterial, Sky, Stars } from '@react-three/drei';

function SmokeParticle({ delay }: { delay: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    
    useFrame((state) => {
        const t = (state.clock.getElapsedTime() + delay) % 4; // 4 second lifecycle
        const factor = t / 4;
        
        meshRef.current.position.y = factor * 2;
        meshRef.current.position.x = Math.sin(t * 2) * 0.1;
        meshRef.current.scale.setScalar(0.5 + factor * 2);
        
        if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
            meshRef.current.material.opacity = 0.4 * (1 - factor);
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#ddd" transparent opacity={0.4} roughness={1} />
        </mesh>
    );
}

function Smoke() {
    return (
        <group position={[0, 0.4, 0]}>
            <SmokeParticle delay={0} />
            <SmokeParticle delay={1} />
            <SmokeParticle delay={2} />
            <SmokeParticle delay={3} />
        </group>
    );
}



function CargoShipModel() {
    return (
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.3}>
            <group scale={1.15} position={[0, -0.1, 0]}>
                {/* 1. HYDRODYNAMIC HULL */}
                <group>
                    {/* Lower Hull (Red Bottom - Antifouling paint) */}
                    <mesh position={[0, -0.8, 0]}>
                        <boxGeometry args={[4.2, 0.4, 1.6]} />
                        <meshStandardMaterial color="#721c24" roughness={0.7} metalness={0.1} />
                    </mesh>
                    {/* Bulbous Bow (Front bottom) */}
                    <mesh position={[2.2, -0.8, 0]}>
                        <sphereGeometry args={[0.3, 32, 32]} />
                        <meshStandardMaterial color="#721c24" />
                    </mesh>
                    
                    {/* Upper Hull (Black/Deep Grey) */}
                    <mesh position={[0, -0.4, 0]}>
                        <boxGeometry args={[4.4, 0.5, 1.8]} />
                        <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.5} />
                    </mesh>
                    {/* Sharpened Bow (Front top) */}
                    <mesh position={[2.3, -0.4, 0]} rotation={[0, 0, -Math.PI / 10]}>
                        <cylinderGeometry args={[0, 1, 1.2, 4, 1, false, Math.PI / 4]} />
                        <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.5} />
                    </mesh>
                    
                    {/* Transom (Rear) */}
                    <mesh position={[-2.2, -0.6, 0]}>
                        <boxGeometry args={[0.1, 0.8, 1.6]} />
                        <meshStandardMaterial color="#0a0a0a" />
                    </mesh>
                </group>

                {/* 2. PROPULSION & STEERING */}
                <group position={[-2.3, -0.9, 0]}>
                    {/* Propeller Hub */}
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.05, 0.05, 0.2]} />
                        <meshStandardMaterial color="#92400e" metalness={1} roughness={0.2} />
                    </mesh>
                    {/* Rudder */}
                    <mesh position={[-0.2, 0.1, 0]}>
                        <boxGeometry args={[0.1, 0.5, 0.4]} />
                        <meshStandardMaterial color="#0a0a0a" />
                    </mesh>
                </group>

                {/* 3. MAIN DECK & EQUIPMENT */}
                <mesh position={[0, -0.15, 0]}>
                    <boxGeometry args={[4.3, 0.1, 1.7]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
                </mesh>

                {/* 4. REFINED BRIDGE / ACCOMMODATION */}
                <group position={[-1.4, 0.6, 0]}>
                    {/* Multi-level structure */}
                    <RoundedBox args={[1.3, 1.2, 1.4]} radius={0.04} position={[0, -0.1, 0]}>
                        <meshStandardMaterial color="#cbd5e1" roughness={0.3} metalness={0.2} />
                    </RoundedBox>
                    <RoundedBox args={[0.9, 0.4, 1.6]} radius={0.02} position={[0.1, 0.6, 0]}>
                        <meshStandardMaterial color="#e2e8f0" roughness={0.2} />
                    </RoundedBox>
                    
                    {/* Navigation Bridge Windows */}
                    <mesh position={[0.45, 0.6, 0]}>
                        <boxGeometry args={[0.1, 0.25, 1.5]} />
                        <meshStandardMaterial color="#0f172a" emissive="#1e293b" roughness={0} />
                    </mesh>
                    
                    {/* Navigation Lights */}
                    <mesh position={[0.4, 0.6, 0.82]}> {/* Starboard - Green */}
                        <sphereGeometry args={[0.03]} />
                        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2} />
                    </mesh>
                    <mesh position={[0.4, 0.6, -0.82]}> {/* Port - Red */}
                        <sphereGeometry args={[0.03]} />
                        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={2} />
                    </mesh>

                    {/* Lifeboats */}
                    <mesh position={[-0.2, 0.2, 0.75]}>
                        <sphereGeometry args={[0.15, 8, 8]} scale={[1.5, 0.5, 0.7]} />
                        <meshStandardMaterial color="#f97316" roughness={0.5} />
                    </mesh>
                    <mesh position={[-0.2, 0.2, -0.75]}>
                        <sphereGeometry args={[0.15, 8, 8]} scale={[1.5, 0.5, 0.7]} />
                        <meshStandardMaterial color="#f97316" roughness={0.5} />
                    </mesh>

                    {/* Funnel & Smoke */}
                    <group position={[-0.4, 0.8, 0]}>
                        <mesh>
                            <cylinderGeometry args={[0.18, 0.22, 1.2, 16]} />
                            <meshStandardMaterial color="#0f172a" metalness={0.6} />
                        </mesh>
                        <mesh position={[0, 0.6, 0]}>
                            <cylinderGeometry args={[0.19, 0.19, 0.1, 16]} />
                            <meshStandardMaterial color="#b91c1c" />
                        </mesh>
                        <Smoke />
                    </group>
                </group>

                {/* 5. CARGO LOAD (Distributed & Rounded) */}
                <group position={[0.4, 0.2, 0]}>
                    {[
                        { pos: [-0.9, 0, 0.45], col: "#065f46" },
                        { pos: [-0.9, 0, -0.45], col: "#1e3a8a" },
                        { pos: [0, 0, 0.45], col: "#7f1d1d" },
                        { pos: [0, 0, -0.45], col: "#334155" },
                        { pos: [0.9, 0, 0.45], col: "#92400e" },
                        { pos: [0.9, 0, -0.45], col: "#065f46" },
                        // Second Layer
                        { pos: [-0.85, 0.52, 0.4], col: "#064e3b" },
                        { pos: [0.05, 0.52, -0.35], col: "#0f172a" },
                        { pos: [0.95, 0.52, 0.1], col: "#7c2d12" },
                    ].map((c, i) => (
                        <RoundedBox key={i} args={[0.8, 0.5, 0.75]} radius={0.03} position={c.pos as any}>
                            <meshStandardMaterial color={c.col} roughness={0.6} metalness={0.3} />
                        </RoundedBox>
                    ))}
                </group>

                {/* 6. GANTRY CRANES (Detailed) */}
                <group position={[1.5, 0, 0]}>
                    <mesh position={[0, 0.5, 0]}>
                        <boxGeometry args={[0.12, 1, 0.12]} />
                        <meshStandardMaterial color="#eab308" metalness={0.5} />
                    </mesh>
                    <mesh position={[0.3, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <boxGeometry args={[0.1, 0.6, 0.1]} />
                        <meshStandardMaterial color="#ca8a04" />
                    </mesh>
                </group>
            </group>
        </Float>
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
                    <Canvas camera={{ position: [5, 4, 10], fov: 35 }} shadows>
                        <color attach="background" args={['#111827']} />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                        <CargoShipModel />
                        
                        <ContactShadows 
                            position={[0, -1.2, 0]} 
                            opacity={0.4} 
                            scale={20} 
                            blur={2} 
                            far={4.5} 
                        />
                        
                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                        <Environment preset="city" />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
