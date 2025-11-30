// src/components/Timeline.js
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import Milestone from './Milestone';
import milestones from '../data/milestones';
import { useThree } from '@react-three/fiber';


export default function Timeline() {
 /*
  function ResponsiveGroup({ children, count }) {
  const { viewport } = useThree();

  const spacing = Math.min(2, viewport.width / count * 1.5);
  const width = count * spacing;

  return (
    <group scale={[viewport.width / width, 1, 1]}>
      {children}
    </group>
  );
}
  */

  return (
    <Canvas style={{ height: '500px', background: '#111' }}>
      <ambientLight intensity={0.3} />
<directionalLight position={[5, 5, 5]} intensity={1.2} />
<pointLight position={[-5, -5, 5]} intensity={0.5} color="#ff00ff" />

      <pointLight position={[10, 10, 10]} />
      <OrbitControls
  enableZoom={false}
  enablePan={false}
  rotateSpeed={0.5}
  minPolarAngle={Math.PI / 2.2}
  maxPolarAngle={Math.PI / 2.2}
/>

      
      {/* Timeline backbone */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[milestones.length * 10, 0.05, 0.05]} />
        <meshStandardMaterial emissive="#00ffff" emissiveIntensity={0.6} />

      </mesh>

      {/* Render milestones */}
      {milestones.map((m, i) => (
        <Milestone key={i} data={m} position={[-(milestones.length - 1) + i * 2, 0, 0]} />
      ))}
    </Canvas>
  );
}
