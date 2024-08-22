import React from 'react';
import { Text } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface InteractiveBoxProps {
  position: [number, number, number];
  color: string;
  onClick: () => void;
  label: string;
  textureUrl?: string;
}

const InteractiveBox: React.FC<InteractiveBoxProps> = ({ position, color, onClick, label, textureUrl }) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl || '');
  
  return (
    <mesh position={position} onClick={onClick}>
      <planeGeometry  args={[1, 1]} />
      <meshStandardMaterial 
      // color={color} 
      map={texture}
      />
      <Text position={[0, 1.2, 0]} fontSize={0.3} color="orange" anchorX="center" anchorY="middle">
        {label}
      </Text>
    </mesh>
  );
};

export default InteractiveBox;
