"use client";
import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
  const gltf = useLoader(GLTFLoader, "/media/projects/FinnsFishbowl/GA-Staging.glb"); // Update with your model path
  return <primitive object={gltf.scene} scale={1} rotation={[0, Math.PI / 5, 0]} />;
}

export default function ExhibitLayout() {
  const [isOverlayVisible, setOverlayVisible] = useState(true);

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-semibold opacity-90">3D Exhibit Layout</h2>
      <p className="mt-2 lg:text-xl text-gray-800">Modeled in Blender.</p>
      
      <div 
        className="relative mx-auto w-full h-[600px] lg:h-[700px] bg-black/20 rounded-md overflow-hidden"
        onMouseLeave={() => setOverlayVisible(true)} // 🔹 Bring back overlay when cursor leaves
      >
        {/* Overlay with Image (Only inside 3D section) */}
        {isOverlayVisible && (
          <div 
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10 cursor-pointer"
            onMouseDown={() => setOverlayVisible(false)}  // 🔹 For desktop
            onTouchStart={() => setOverlayVisible(false)} // 🔹 For mobile
          >
            <img 
              src="/media/projects/FinnsFishbowl/rotation.png"
              alt="Press to Enter"
              className="w-1/2 md:w-1/3 lg:w-1/4 opacity-90"
            />
          </div>
        )}
        
        {/* 3D Model */}
        <Canvas camera={{ position: [0, 4, 28] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </section>
  );
}
