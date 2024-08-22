import React from 'react';
import { Text } from '@react-three/drei';
// import { useThree } from '@react-three/fiber';
// import { CanvasTexture } from 'three';
// import ReactDOMServer from 'react-dom/server';

interface InteractiveBoxProps {
  position: [number, number, number];
  color: string;
  onClick: () => void;
  label: string;
  svg?: React.ReactElement;
}

const InteractiveBox: React.FC<InteractiveBoxProps> = ({ position, color, onClick, label, svg }) => {
  // const { gl } = useThree();

  // const texture = useMemo(() => {
  //   if (svg) {
  //     const svgString = ReactDOMServer.renderToString(svg);
  //     const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  //     const url = URL.createObjectURL(svgBlob);

  //     const img = new Image();
  //     img.src = url;

  //     const canvas = document.createElement('canvas');
  //     const context = canvas.getContext('2d');

  //     img.onload = () => {
  //       canvas.width = img.width;
  //       canvas.height = img.height;
  //       if (context) {
  //         context.drawImage(img, 0, 0);
  //       }
  //     };

  //     return new CanvasTexture(canvas);
  //   }
  //   return null;
  // }, [svg]);
  
  return (
    <mesh position={position} onClick={onClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} 
      // map={texture}
      />
      <Text position={[0, 1.2, 0]} fontSize={0.3} color="orange" anchorX="center" anchorY="middle">
        {label}
      </Text>
    </mesh>
  );
};

export default InteractiveBox;
