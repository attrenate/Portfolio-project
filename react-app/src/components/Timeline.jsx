// src/components/Timeline.js
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import Milestone from './Milestone';

// milestone data
const milestones = [
  { year: 2006, title: "Born", description: "Batumi, Georgia" },
  { year: 2024, title: "Started coding", description: "Learning JS & React" },
  { year: 2024, title: "Graduatuation", description: "Graduated from high-school." },
];


export default function Timeline() {
  return (
    <Canvas style={{ height: '500px', background: '#111' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      
      {/* Timeline backbone */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[milestones.length * 2, 0.05, 0.05]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Render milestones */}
      {milestones.map((m, i) => (
        <Milestone key={i} data={m} position={[-(milestones.length - 1) + i * 2, 0, 0]} />
      ))}
    </Canvas>
  );
}
