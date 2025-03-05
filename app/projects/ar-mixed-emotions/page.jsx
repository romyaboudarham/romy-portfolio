"use client"; // Ensure this is at the top of the file

import React from "react";
import Concept from "@/app/components/ARMixedEmotions/Concept";
import ObjectDesign from "@/app/components/ARMixedEmotions/ObjectDesign";
import Storyboard from "@/app/components/ARMixedEmotions/Storyboard";
import Breathe from "@/app/components/ARMixedEmotions/Breathe"
import HeroSection from "@/app/components/ARMixedEmotions/HeroSection"
import InteractionDesign from "@/app/components/ARMixedEmotions/InteractionDesign"
import Navbar from "@/app/components/Navbar.jsx";

export default function GriefsShadow() {
    
  return (
    <div className="bg-white text-black font-sans">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      {/* Project Overview */}
      <section className="mx-3 my-6 lg:my-8 lg:mx-[170px]">
        <h2 className="text-center mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">Project Overview</h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            {/* Emphasized Assignment */}
            <div className="text-2xl font-semibold opacity-90">
              Assignment  
            </div>
            <p className="mt-2 lg:text-xl text-gray-800">
              Use AR to reveal an aspect of what is particularly meaningful and/or essential to you in
              terms of design/creativity/expression.
            </p>

            {/* Additional Details */}
            <div className="mt-6 space-y-2 lg:text-lg text-gray-800">
              <p><strong className="text-black opacity-90">Duration:</strong> 2 weeks, completed September 2024</p>
              <p><strong className="text-black opacity-90">Role:</strong> Creative Technologist, Designer, Developer</p>
              <p><strong className="text-black opacity-90">Tools:</strong> Unity, C#, Quill VR, Storyboarding</p>
              <p><strong className="text-black opacity-90">Focus:</strong> Mindfulness Storytelling, AR Design, and Technical Implementation in Unity</p>
              <p><strong className="text-black opacity-90">Context:</strong> Audited CCA Grad class “XR: Immersive Experiences and Scripted Spaces”</p>
            </div>
          </div>

          {/* Logo Image */}
          <div className="hidden lg:flex justify-center">
            <img 
              src="/media/projects/ARMixedEmotions/MixedEmotions-tech.png" 
              alt="tools-logos" 
              width={500} 
            />
          </div>
        </section>
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-auto max-w-6xl">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Conceptualization */}
      {/* We all enter this world with the capacity to carry grief. To love is to lose. Through grieving and processing a personal loss, I created this immersive VR experience for everyone—whether you have yet to face a significant loss or are seeking a mindful space for healing. */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">Conceptualization</h2>
          <Concept />
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Design & Developement */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">Design & Development Process</h2>
          <Storyboard />
          <ObjectDesign />
          {/* <InteractionDesign /> */}
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      Still under construction
      {/* Final Experience */}
      {/* <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
        <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center">Final Experience</h2>
        <div className="w-full max-w-xl mx-auto   border border-gray-300 overflow-hidden">
          <iframe
            className="w-full h-96 lg:h-[600px] rounded-md"
            src="https://www.youtube.com/embed/iVC51VEGku4"
            title="YouTube Video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}


      {/* Footer - Let's Connect */}
      <section className="relative flex items-center justify-center py-3 text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <img 
          src="/media/projects/ARMixedEmotions/hero-bg.jpg"
          alt="Skybox" 
          className="absolute w-full h-full object-cover opacity-100"
        />
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold opacity-80">Let’s Connect!</h2>
          <p className="mt-6 text-lg opacity-70">Interested in my work? Let’s chat.</p>
          <a href="mailto:romyaboudarham@gmail.com">
            <button className="rounded-md mt-8 px-6 py-3 text-lg bg-[black]/70 text-white border hover:bg-transparent hover:text-black border-black">
              Contact Me
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
