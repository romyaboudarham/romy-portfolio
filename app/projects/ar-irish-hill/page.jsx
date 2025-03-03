"use client"; // Ensure this is at the top of the file

import React from "react";
import Concept from "@/app/components/ARIrishHill/Concept";
import ARDesign from "@/app/components/ARIrishHill/ARDesign";
import Storyboard from "@/app/components/ARIrishHill/Storyboard";
import Research from "@/app/components/ARIrishHill/Research";
import NextSteps from "@/app/components/ARIrishHill/NextSteps"
import HeroSection from "@/app/components/ARIrishHill/HeroSection"
import Navbar from "@/app/components/Navbar.jsx";

export default function GriefsShadow() {
    
  return (
    <div className="bg-[rgb(249,249,249)] text-black font-sans">
       <Navbar textColor="text-white" />
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
            Select a hidden or lost incident, movement, or person as the focus of an AR monument. 
            Using tenets of narrative journalism, express a point of view (POV) about the subject, through well-researched information expressed through a creative lens.
            </p>

            {/* Additional Details */}
            <div className="mt-6 space-y-2 lg:text-lg text-gray-800">
              <p><strong className="text-black opacity-90">Duration:</strong> 6 weeks, completed October 2024</p>
              <p><strong className="text-black opacity-90">Role:</strong> Creative Technologist, Designer, Developer</p>
              <p><strong className="text-black opacity-90">Tools:</strong> Unity, C#, Storyboarding, Vuforia, Blender</p>
              <p><strong className="text-black opacity-90">Focus:</strong> Immersive Storytelling, Narrative Journalism, AR Design, Technical Implementation in Unity</p>
              <p><strong className="text-black opacity-90">Context:</strong> Audited CCA Grad class “XR: Immersive Experiences and Scripted Spaces”</p>
            </div>
          </div>

          {/* Logo Image */}
          <div className="hidden lg:flex justify-center">
            <img 
              src="/media/projects/ARIrishHill/irishhill-tools.png" 
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
          <Research />
          <Storyboard />
          <ARDesign />
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Final Experience */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
        <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center">Final Experience</h2>
        <div className="w-full max-w-xl mx-auto   border border-gray-300 overflow-hidden">
          <iframe
            className="w-full h-96 lg:h-[600px] rounded-md"
            src="https://www.youtube.com/embed/GFocypMe5fA"
            title="YouTube Video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Impact */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">Next Steps</h2>
          <NextSteps />
      </section>
      


      {/* Footer - Let's Connect */}
      <section className="relative flex items-center justify-center py-3 text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <img 
          src="/media/projects/ARIrishHill/serpentine-2-bg.jpg" 
          alt="Skybox" 
          className="absolute w-full h-full object-cover opacity-100"
        />
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Let’s Connect!</h2>
          <p className="text-white mt-6 text-lg opacity-80">Interested in my work? Let’s chat.</p>
          <a href="mailto:romyaboudarham@gmail.com">
            <button className="mt-8 px-6 py-3  text-lg bg-[black]/70 backdrop-blur-lg text-white hover:bg-[white]/40
                hover:text-black border border-black rounded-md">
              Contact Me
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
