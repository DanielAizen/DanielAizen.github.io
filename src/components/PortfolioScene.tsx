import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import InteractiveBox from "./InteractiveBox";
import { Text } from "@react-three/drei";
// import { CV } from "./../assests/CV";
// import { Email } from "./../assests/Email";
// import { Github } from "./../assests/Github";
// import { Linkedin } from "./../assests/Linkedin";

const PortfolioScene: React.FC = () => {
  return (
    <Canvas>
      <Sky distance={450000} sunPosition={[1, 1, 0]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />

      <Text
        position={[1, 2.3, 0]} // Position of the text in the scene
        fontSize={1} // Size of the text
        color="black" // Color of the text
        anchorX="center" // Horizontal anchor point
        anchorY="middle" // Vertical anchor point
      >
        Welcome to My Portfolio
      </Text>
      {/* Email Box */}
      <InteractiveBox
        position={[-2.2, 0, 0]}
        color="red"
        label="Email"
        onClick={() => window.open("mailto:aiz.dani@gmail.com", "_blank")}
        // svg={<Email />}
      />

      {/* LinkedIn Box */}
      <InteractiveBox
        position={[-0.2, 0, 0]}
        color="blue"
        label="LinkedIn"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/daniel-aizenband-8117391b9/",
            "_blank"
          )
        }
        // svg={<Linkedin />}
      />

      {/* GitHub Box */}
      <InteractiveBox
        position={[1.8, 0, 0]}
        color="black"
        label="GitHub"
        onClick={() => window.open("https://github.com/DanielAizen", "_blank")}
        // svg={<Github />}
      />

      {/* CV Box */}
      <InteractiveBox
        position={[3.8, 0, 0]}
        color="lightgreen"
        label="CV"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1D6WmPFNKBAdJsS7tdMv2AnvCTTVlx4yJ/view?usp=sharing",
            "_blank"
          )
        }
        // svg={<CV />}
      />
    </Canvas>
  );
};

export default PortfolioScene;
