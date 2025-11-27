import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function Milestone({ data, position }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    ref.current.rotation.y += 0.005; 
  });

  return (
    <mesh
      ref={ref}
      position={position}
      scale={hovered ? 1.2 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 0.5, 0.2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      <Html position={[0, 0, 0.15]} center>
        <div style={{ color: 'white', fontSize: '14px', textAlign: 'center' }}>
          <strong>{data.year}</strong>
          <br />
          {data.title}
        </div>
      </Html>
    </mesh>
  );
}

