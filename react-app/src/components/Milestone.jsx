// src/components/Milestone.jsx
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function Milestone({ data, position, onSelect }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (hovered) ref.current.rotation.y += 0.02;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      scale={hovered ? 1.2 : 1}
      onClick={() => onSelect(data.year)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
    >
      <boxGeometry args={[1, 0.5, 0.2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />

      <Html position={[0, 0, 0.25]} center>
        <div style={{
          color: 'white',
          fontSize: '13px',
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }}>
          <strong>{data.year}</strong>
          <br />
          {data.title}
        </div>
      </Html>
    </mesh>
  );
}
