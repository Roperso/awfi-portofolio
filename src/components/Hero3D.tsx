import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

function Shape() {
  const mesh = useRef<THREE.Mesh>(null);

  // Putar pelan + ikuti arah mouse
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.25;
    const { x, y } = state.pointer;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, y * 0.5, 0.05);
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, -x * 0.4, 0.05);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1, 0.34, 256, 48, 2, 3]} />
        <meshPhysicalMaterial
          color="#0d0b12"
          metalness={1}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.1}
          iridescence={1}
          iridescenceIOR={1.6}
          iridescenceThicknessRange={[200, 600]}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D({ fallbackSrc }: { fallbackSrc: string }) {
  return (
    <Suspense
      fallback={
        <img src={fallbackSrc} alt="Abstract 3D sculptural design object" className="w-full h-full object-contain rounded-3xl" />
      }
    >
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', touchAction: 'pan-y' }}
      >
        <ambientLight intensity={0.15} />
        <Shape />
        {/* Environment lokal (tanpa download HDR) supaya ada pantulan ungu di permukaan */}
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={4} color="#ffffff" position={[0, 5, -2]} scale={[10, 2, 1]} />
          <Lightformer form="rect" intensity={6} color="#a855f7" position={[-5, 1, 2]} scale={[2, 6, 1]} />
          <Lightformer form="rect" intensity={4} color="#7c3aed" position={[5, -1, 3]} scale={[2, 6, 1]} />
          <Lightformer form="ring" intensity={2} color="#c4b5fd" position={[0, 0, 6]} scale={4} />
        </Environment>
      </Canvas>
    </Suspense>
  );
}
