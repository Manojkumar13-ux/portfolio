"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Vector3, Mesh } from "three";

const COLORS = ["#f03e3e", "#7c3aed", "#0ea5e9", "#f59e0b"];

interface CodeSymbolProps {
  position: [number, number, number];
  color: string;
  speed: number;
  shape: "box" | "torus" | "icosahedron" | "octahedron";
  scale: number;
}

function CodeSymbol({ position, color, speed, shape, scale }: CodeSymbolProps) {
  const ref = useRef<Mesh>(null);
  const startPos = useMemo(() => new Vector3(...position), [position]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = startPos.x + Math.sin(t * 0.7) * 0.5;
    ref.current.position.y = startPos.y + Math.cos(t * 0.5) * 0.5;
    ref.current.position.z = startPos.z + Math.sin(t * 0.3) * 0.3;
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.01;
  });

  const Geometry = () => {
    switch (shape) {
      case "box": return <boxGeometry args={[scale, scale, scale]} />;
      case "torus": return <torusGeometry args={[scale * 0.6, scale * 0.2, 16, 32]} />;
      case "icosahedron": return <icosahedronGeometry args={[scale * 0.7, 0]} />;
      case "octahedron": return <octahedronGeometry args={[scale * 0.7, 0]} />;
      default: return <boxGeometry args={[scale, scale, scale]} />;
    }
  };

  return (
    <Float speed={0.5} rotationIntensity={0} floatIntensity={0.3}>
      <mesh ref={ref} position={position}>
        <Geometry />
        <MeshDistortMaterial color={color} roughness={0.3} metalness={0.6} distort={0.1} speed={1} transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

function Scene() {
  const symbols = useMemo<CodeSymbolProps[]>(() => {
    const items: CodeSymbolProps[] = [];
    const shapes: CodeSymbolProps["shape"][] = ["box", "torus", "icosahedron", "octahedron"];
    const radius = 4;
    const count = 8;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const yOffset = (i % 3 - 1) * 1.5;
      items.push({
        position: [Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius],
        color: COLORS[i % COLORS.length],
        speed: 0.3 + Math.random() * 0.4,
        shape: shapes[i % shapes.length],
        scale: 0.4 + Math.random() * 0.3,
      });
    }
    return items;
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      {symbols.map((props, i) => <CodeSymbol key={i} {...props} />)}
    </>
  );
}

export function FloatingCode3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ perspective: "1000px" }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
