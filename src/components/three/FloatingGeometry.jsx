import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Icosahedron() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0025;
      meshRef.current.rotation.x += 0.0015;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.32} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.1, 12, 12]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#8b5cf6" intensity={0.5} />
      <Icosahedron />
    </>
  );
}

export default function FloatingGeometry() {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: "transparent" }}
        dpr={[1, 1]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
