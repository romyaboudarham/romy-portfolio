"use client";
import React, { useState } from "react";
import Image from "next/image";

const references = [
  {
    title: "Bedside Table with Photo",
    description: "Referenced my real-life bedside table with a framed photo of my brother, recreated in VR to capture the presence of grief first thing when you wake up.",
    referenceImage: "/media/projects/VR-GriefsShadow/Process/bedside-reference.jpg", // Update with actual paths
    renderImage: "/media/projects/VR-GriefsShadow/Process/unity-bedside-unlit.png",
  },
  {
    title: "Messy Room",
    description: "Referenced my real-life messy room, used as inspiration for the VR scene to reflect the struggle of daily tasks.",
    referenceImage: "/media/projects/VR-GriefsShadow/Process/room-reference.jpg",
    renderImage: "/media/projects/VR-GriefsShadow/Process/unity-room-unlit.png",
  },
];

export default function ReferenceGallery () {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="mt-8 lg:mt-10">
      <h2 className="text-2xl font-semibold opacity-90">Inspiration & References</h2>
        {references.map((item, index) => (
          <div key={index} className="mt-2 grid md:grid-cols-2 gap-5 items-center">
            {/* Description */}
            <p className="md:col-span-2 lg:text-xl text-gray-800">{item.description}</p>
            {/* Reference Image - Forced Square */}
            <div className="flex flex-col items-center">
              <div className="relative cursor-pointer w-full aspect-square">
                <Image
                  src={item.referenceImage}
                  alt={`Reference - ${item.title}`}
                  fill
                  className="object-cover"
                  onClick={() => setSelectedImage(item.referenceImage)}
                />
              </div>
              <p className="text-center mt-2 text-md text-gray-600">Reference</p>
            </div>
  

            {/* Final Render Image - Forced Square */}
            <div className="flex flex-col items-center">
              <div className="relative cursor-pointer w-full aspect-square">
                <Image
                  src={item.renderImage}
                  alt={`Render - ${item.title}`}
                  fill
                  className="object-cover"
                  onClick={() => setSelectedImage(item.renderImage)}
                />
              </div>
              <p className="text-center mt-2 text-md text-gray-600">Final Render</p>
            </div>
    

            
          </div>
        ))}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged" className="max-w-[90%] max-h-[90%]" />
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setSelectedImage(null)}>×</button>
        </div>
      )}
    </section>
  );
};