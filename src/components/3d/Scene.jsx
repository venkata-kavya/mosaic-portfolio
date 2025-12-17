import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  Float,
  Environment,
  Lightformer,
} from "@react-three/drei";

const GlassShard = () => {
  const mesh = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t / 4);
    mesh.current.rotation.y = Math.sin(t / 2);
    mesh.current.position.y = Math.sin(t / 1.5) * 0.1;
  });

  // Scale Logic: Previous logic * 0.6
  const scale = viewport.width > 7 ? 1.5 : 0.9;

  return (
    <Float>
      <mesh ref={mesh} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
          roughness={0}
          transmission={1}
          ior={1.5}
          chromaticAberration={1}
          anisotropy={20}
          color="#CCFF00"
          resolution={1024}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <GlassShard />
      <Environment preset="night">
        <Lightformer
          intensity={4}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[10, 2, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[10, 2, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[20, 2, 1]}
        />
      </Environment>
    </>
  );
};

export default Scene;
