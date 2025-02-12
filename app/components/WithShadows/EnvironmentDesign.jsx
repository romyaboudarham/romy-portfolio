"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function EnvironmentDesign() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="mt-8 lg:mt-10">
      <h2 className="text-2xl font-semibold opacity-90">Environment Design</h2>
      <p className="mt-2 lg:text-xl text-gray-800">
        These VR environments were designed based on real-life references to enhance the emotional depth of the experience. Each scene was carefully crafted to reflect themes of grief and memory, ensuring an immersive and meaningful connection for users.
        Referenced my real-life bedside table with a framed photo of my brother and messy room, recreated in VR to capture the presence of grief first thing when you wake up while.
        Referenced my real-life messy room, used as inspiration for the VR scene to reflect the struggle of daily tasks.
      </p>
      
      {/* 2x2 Grid Layout */}
      <div className="mt-5 grid grid-cols-2 gap-2 lg:gap-5">
        {/* Column Titles */}
        <p className="text-lg lg:text-xl font-medium opacity-90 text-center">Reference</p>
        <p className="text-lg lg:text-xl font-medium opacity-90 text-center">Final Render</p>
        
        {/* Bedside Table with Photo */}
        <div className="flex flex-col items-center">
          <div className="relative cursor-pointer w-full aspect-square">
            <Image
              src="/media/projects/VR-GriefsShadow/Process/bedside-reference.jpg"
              alt="Reference - Bedside Table with Photo"
              fill
              className="object-cover"
              onClick={() => setSelectedImage("/media/projects/VR-GriefsShadow/Process/bedside-reference.jpg")}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative cursor-pointer w-full aspect-square">
            <Image
              src="/media/projects/VR-GriefsShadow/Process/unity-bedside-unlit.png"
              alt="Render - Bedside Table with Photo"
              fill
              className="object-cover"
              onClick={() => setSelectedImage("/media/projects/VR-GriefsShadow/Process/unity-bedside-unlit.png")}
            />
          </div>
        </div>
        
        {/* Messy Room */}
        <div className="flex flex-col items-center">
          <div className="relative cursor-pointer w-full aspect-square">
            <Image
              src="/media/projects/VR-GriefsShadow/Process/room-reference.jpg"
              alt="Reference - Messy Room"
              fill
              className="object-cover"
              onClick={() => setSelectedImage("/media/projects/VR-GriefsShadow/Process/room-reference.jpg")}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative cursor-pointer w-full aspect-square">
            <Image
              src="/media/projects/VR-GriefsShadow/Process/unity-room-unlit.png"
              alt="Render - Messy Room"
              fill
              className="object-cover"
              onClick={() => setSelectedImage("/media/projects/VR-GriefsShadow/Process/unity-room-unlit.png")}
            />
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged" className="max-w-[90%] max-h-[90%]" />
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setSelectedImage(null)}>×</button>
        </div>
      )}
    </section>
  );
}
