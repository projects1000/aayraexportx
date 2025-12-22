'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, ContactShadows, Environment, RoundedBox, Torus, Cylinder, Box, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Laptop({ position }: { position: [number, number, number] }) {
    return (
        <group position={position}>
            {/* Base */}
            <RoundedBox args={[4.5, 0.2, 3.2]} radius={0.1} smoothness={4}>
                <meshStandardMaterial color="#f1f5f9" />
            </RoundedBox>
            {/* Screen Hinge */}
            <RoundedBox position={[0, 0.1, -1.5]} args={[4.5, 0.2, 0.2]} radius={0.05} smoothness={4}>
                <meshStandardMaterial color="#cbd5e1" />
            </RoundedBox>
            {/* Screen */}
            <group position={[0, 1.6, -1.6]} rotation={[0.1, 0, 0]}>
                <RoundedBox args={[4.5, 3.2, 0.1]} radius={0.1} smoothness={4}>
                    <meshStandardMaterial color="#f1f5f9" />
                </RoundedBox>
                {/* Display */}
                <mesh position={[0, 0, 0.06]}>
                    <planeGeometry args={[4.2, 2.9]} />
                    <meshStandardMaterial color="#eff6ff" />
                </mesh>
                {/* Screen Content - Abstract Security UI */}
                <group position={[0, 0, 0.07]}>
                    {/* Lock Icon on Screen */}
                    <mesh position={[0, 0.5, 0]}>
                        <ringGeometry args={[0.3, 0.4, 32]} />
                        <meshStandardMaterial color="#cbd5e1" />
                    </mesh>
                    <mesh position={[0, 0.2, 0]}>
                        <planeGeometry args={[0.5, 0.4]} />
                        <meshStandardMaterial color="#cbd5e1" />
                    </mesh>
                    {/* Code Lines */}
                    <mesh position={[-1.2, -0.5, 0]}>
                        <planeGeometry args={[1, 0.1]} />
                        <meshStandardMaterial color="#bfdbfe" />
                    </mesh>
                    <mesh position={[-1.2, -0.8, 0]}>
                        <planeGeometry args={[0.8, 0.1]} />
                        <meshStandardMaterial color="#bfdbfe" />
                    </mesh>
                    <mesh position={[1.2, -0.5, 0]}>
                        <planeGeometry args={[1, 0.1]} />
                        <meshStandardMaterial color="#bfdbfe" />
                    </mesh>
                    <mesh position={[1.2, -0.8, 0]}>
                        <planeGeometry args={[0.8, 0.1]} />
                        <meshStandardMaterial color="#bfdbfe" />
                    </mesh>
                </group>
            </group>
            {/* Keyboard Area */}
            <mesh position={[0, 0.11, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[4, 1.8]} />
                <meshStandardMaterial color="#e2e8f0" />
            </mesh>
            {/* Trackpad */}
            <mesh position={[0, 0.11, 1.2]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[1.2, 0.8]} />
                <meshStandardMaterial color="#cbd5e1" />
            </mesh>
        </group>
    );
}

function Character({ position }: { position: [number, number, number] }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05;
        }
    });

    return (
        <group ref={groupRef} position={position}>
            {/* Head */}
            <Sphere args={[0.25, 32, 32]} position={[0, 1.6, 0]}>
                <meshStandardMaterial color="#fcd34d" />
            </Sphere>
            {/* Hair */}
            <Sphere args={[0.26, 32, 32]} position={[0, 1.65, -0.05]} scale={[1, 0.8, 1]}>
                <meshStandardMaterial color="#1e293b" />
            </Sphere>
            {/* Body */}
            <RoundedBox args={[0.4, 0.6, 0.2]} radius={0.1} position={[0, 1.1, 0]}>
                <meshStandardMaterial color="#6366f1" />
            </RoundedBox>
            {/* Legs */}
            <Cylinder args={[0.08, 0.08, 0.6]} position={[-0.12, 0.5, 0]}>
                <meshStandardMaterial color="#1e293b" />
            </Cylinder>
            <Cylinder args={[0.08, 0.08, 0.6]} position={[0.12, 0.5, 0]}>
                <meshStandardMaterial color="#1e293b" />
            </Cylinder>
            {/* Arms holding key */}
            <RoundedBox args={[0.1, 0.4, 0.1]} position={[-0.25, 1.1, 0.2]} rotation={[0.5, 0, -0.2]}>
                <meshStandardMaterial color="#6366f1" />
            </RoundedBox>
            <RoundedBox args={[0.1, 0.4, 0.1]} position={[0.25, 1.1, 0.2]} rotation={[0.5, 0, 0.2]}>
                <meshStandardMaterial color="#6366f1" />
            </RoundedBox>
        </group>
    );
}

function GiantKey({ position }: { position: [number, number, number] }) {
    return (
        <group position={position} rotation={[0, 0, -Math.PI / 4]}>
            <Torus args={[0.2, 0.06, 16, 32]} position={[-0.6, 0, 0]}>
                <meshStandardMaterial color="#f59e0b" metalness={0.6} roughness={0.2} />
            </Torus>
            <Cylinder args={[0.06, 0.06, 1]} rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#f59e0b" metalness={0.6} roughness={0.2} />
            </Cylinder>
            <Box args={[0.1, 0.15, 0.04]} position={[0.3, -0.08, 0]}>
                <meshStandardMaterial color="#f59e0b" metalness={0.6} roughness={0.2} />
            </Box>
            <Box args={[0.1, 0.1, 0.04]} position={[0.15, -0.06, 0]}>
                <meshStandardMaterial color="#f59e0b" metalness={0.6} roughness={0.2} />
            </Box>
        </group>
    );
}

function Shield({ position }: { position: [number, number, number] }) {
    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group position={position} rotation={[0, 0.3, 0]}>
                {/* Shield Shape */}
                <mesh>
                    <extrudeGeometry
                        args={[
                            new THREE.Shape()
                                .moveTo(0, -1)
                                .quadraticCurveTo(0.8, -0.5, 0.8, 0.5)
                                .lineTo(0, 0.8)
                                .lineTo(-0.8, 0.5)
                                .quadraticCurveTo(-0.8, -0.5, 0, -1),
                            { depth: 0.1, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 4 }
                        ]}
                    />
                    <meshStandardMaterial color="#e0e7ff" metalness={0.1} roughness={0.1} transparent opacity={0.9} />
                </mesh>
                {/* Inner Detail */}
                <mesh position={[0, 0, 0.06]}>
                    <extrudeGeometry
                        args={[
                            new THREE.Shape()
                                .moveTo(0, -0.8)
                                .quadraticCurveTo(0.6, -0.4, 0.6, 0.4)
                                .lineTo(0, 0.6)
                                .lineTo(-0.6, 0.4)
                                .quadraticCurveTo(-0.6, -0.4, 0, -0.8),
                            { depth: 0.05, bevelEnabled: false }
                        ]}
                    />
                    <meshStandardMaterial color="#a5b4fc" />
                </mesh>
            </group>
        </Float>
    );
}

function FloatingCube({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <RoundedBox args={[0.4 * scale, 0.4 * scale, 0.4 * scale]} radius={0.05} smoothness={4} position={position}>
                <meshStandardMaterial color={color} />
            </RoundedBox>
        </Float>
    );
}

function Coin({ position }: { position: [number, number, number] }) {
    return (
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={position} rotation={[Math.PI / 2, 0, 0]}>
                <Cylinder args={[0.4, 0.4, 0.1, 32]}>
                    <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
                </Cylinder>
                <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[0.25, 0.3, 32]} />
                    <meshStandardMaterial color="#fbbf24" />
                </mesh>
            </group>
        </Float>
    );
}

export default function AboutScene() {
    return (
        <div className="w-full h-[500px] relative">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[6, 4, 6]} fov={40} />
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
                <pointLight position={[-5, 5, 5]} color="#6366f1" intensity={1.5} />

                <group position={[0, -1.5, 0]} rotation={[0, -Math.PI / 3, 0]}>
                    <Laptop position={[0, 0, 0]} />

                    {/* Character standing on laptop */}
                    <Character position={[0, 0.2, 0.5]} />
                    <GiantKey position={[0.4, 1.2, 0.8]} />

                    {/* Shield */}
                    <Shield position={[-2.2, 1.5, -0.5]} />

                    {/* Floating Elements */}
                    <FloatingCube position={[2.5, 0.5, 1]} color="#6366f1" />
                    <FloatingCube position={[2.8, 1.2, 0.5]} color="#a855f7" scale={0.8} />
                    <FloatingCube position={[2.2, 2, 1.2]} color="#3b82f6" scale={0.6} />

                    <FloatingCube position={[-2, 2.5, 1]} color="#6366f1" scale={0.5} />
                    <FloatingCube position={[-2.5, 0.8, 1.5]} color="#3b82f6" scale={0.7} />

                    <Coin position={[1.5, 0.2, 2.5]} />

                    {/* Small Keys */}
                    <group position={[-1.5, 0.2, 2.5]} rotation={[0, Math.PI / 3, 0]}>
                        <GiantKey position={[0, 0, 0]} />
                    </group>
                </group>

                <ContactShadows position={[0, -0.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
