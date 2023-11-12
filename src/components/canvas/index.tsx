"use client";

import { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Define the shader material
const GradientShaderMaterial = shaderMaterial(
  // Uniforms (variables passed to the shader)
  {
    time: 0,
    colorStart: new THREE.Color("#4D1D2E"),
    colorEnd: new THREE.Color("#193152"),
  },
  // Vertex Shader (manipulates vertex positions)
  `varying vec3 vPosition;

   void main() {
     vPosition = position;
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
   }`,
  // Fragment Shader (pixel coloring)
  `uniform float time;
   uniform vec3 colorStart;
   uniform vec3 colorEnd;
   varying vec3 vPosition;
   
   void main() {
     // Create a horizontal gradient based on the x-coordinate and time
     float mixFactor = sin(time + vPosition.x) * 0.5 + 0.5;
     gl_FragColor = vec4(mix(colorStart, colorEnd, mixFactor), 1.0);
   }`
);

extend({ GradientShaderMaterial });

function Circle() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <mesh position={[0, 0, 0]}>
      <circleGeometry args={[5, 32]} />
      <gradientShaderMaterial ref={ref} />
    </mesh>
  );
}

export function Scene() {
  return (
    <div className="w-full h-screen absolute m-auto left-0 right-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 100 }}>
        <Circle />
      </Canvas>
    </div>
  );
}
