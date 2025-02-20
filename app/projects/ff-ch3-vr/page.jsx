"use client"; // Ensure this is at the top of the file

import React from "react";
import FinalExperience from "@/app/components/FFCh3VR/FinalExperience";
import HeroSection from "@/app/components/FFCh3VR/HeroSection"
import InteractionDesign from "@/app/components/FFCh3VR/InteractionDesign"
import Navbar from "@/app/components/Navbar.jsx";

export default function GriefsShadow() {
    
  return (
    <div className="bg-[#f9f9f9] text-black font-sans">
      <Navbar textColor="text-white" />
      {/* Hero Section */}
      <HeroSection />

      {/* Project Overview */}
      <section className="mx-3 my-6 lg:my-8 lg:mx-[180px]">
        <h2 className="text-center mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">Project Overview</h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            {/* Emphasized Assignment */}
            <div className="text-2xl font-semibold opacity-90">
              Assignment  
            </div>
            <p className="mt-2 lg:text-xl text-gray-800">
              Design and prototype a VR experience using Unity that fosters empathy through the perspective of the individual for whom you're building empathy.
            </p>

            {/* Additional Details */}
            <div className="mt-6 space-y-2 lg:text-lg text-gray-800">
              <p><strong className="text-black opacity-90">Duration:</strong> 7 weeks, completed December 2024</p>
              <p><strong className="text-black opacity-90">Role:</strong> Creative Technologist, Designer, Developer</p>
              <p><strong className="text-black opacity-90">Tools:</strong> Unity, C#, Oculus VR, Storyboarding</p>
              <p><strong className="text-black opacity-90">Focus:</strong> Empathy-Driven Storytelling, VR Design, and Technical Implementation in Unity</p>
              <p><strong className="text-black opacity-90">Context:</strong> Audited CCA Grad class “XR: Immersive Experiences and Scripted Spaces”</p>
            </div>
          </div>

          {/* Logo Image */}
          <div className="hidden lg:flex justify-center">
            <img 
              src="/media/projects/VR-GriefsShadow/griefs-shadow-logos.png" 
              alt="tools-logos" 
              width={500} 
            />
          </div>
        </section>
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[180px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Design & Developement */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[180px]">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">Design & Development Process</h2>
          <InteractionDesign />
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[180px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Final Experience */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[180px]">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">Final Experience</h2>
          <FinalExperience />
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[180px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>


      {/* Footer - Let's Connect */}
      <section className="relative flex items-center justify-center py-3 text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <img 
          src="/media/projects/VR-GriefsShadow/WithShadow-SkyboxBG.gif" 
          alt="Skybox" 
          className="absolute w-full h-full object-cover opacity-100"
        />
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Let’s Connect!</h2>
          <p className="text-white mt-6 text-lg opacity-80">Interested in my work? Let’s chat.</p>
          <button className="mt-8 px-6 py-3  text-lg transparent hover:text-white border border-[#cd5cc4] text-white font-semibold  ">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
}
