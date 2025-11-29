// src/components/Timeline.js
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import Milestone from './Milestone';

// milestone data
const milestones = [
  { year: 2006, title: "Born", description: "Batumi, Georgia" },
  {year: 2009, title: "Preschool", description: "Started preschool education."},
  {year: 2012, title: "started school", description: "First day of primary school."},
  {year: 2014, title: "First competition", description: "Participated in first math competition."},
  { year: 2015, title: "Won award", description: "Won first place in regional math coontest."},
  {year: 2018, title: "Science fair", description: "Presented project at school science fair."},
  {year: 2019, title: "Basketball tournament", description: "2nd place in inter-school basketball tournament."},
  { year: 2020, title: "Online learning", description: "Adapted to remote learning during pandemic." },
  { year: 2022, title: "First hakathon", description: "Participated in local coding hakathon."},
  { year: 2023, title: "NASA acceleration program", description: "Sent project to NASA's program with my team."},
  { year: 2024, title: "Started coding", description: "Learning JS & React" },
  { year: 2024, title: "Graduatuation", description: "Graduated from high-school." },
  {year: 2024, title: "mentor Assitant", description: "Became a mentor assistant at IT school."},
  
];


export default function Timeline() {
  return (
    <Canvas style={{ height: '500px', background: '#111' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false}/>
      
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
