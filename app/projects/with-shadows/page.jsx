"use client"; // Ensure this is at the top of the file

import React from "react";
import Concept from "@/app/components/WithShadows/Concept";
import ReferenceGallery from "@/app/components/WithShadows/ReferenceGallery";
import Storyboard from "@/app/components/WithShadows/Storyboard";
import Breathe from "@/app/components/WithShadows/Breathe"
import HeroSection from "@/app/components/WithShadows/HeroSection"

export default function GriefsShadow() {
    

  return (
    <div className="bg-[#f9f9f9] text-black font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Project Overview */}
      <section className="mx-3 my-6 lg:my-8 lg:mx-[170px]">
        <h2 className="text-center mb-7 lg:mb-16 text-4xl lg:text-5xl font-semibold opacity-90">Project Overview</h2>
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
      <div className="my-6 mx-auto max-w-6xl">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Ideation & Storyboard */}
      {/* We all enter this world with the capacity to carry grief. To love is to lose. Through grieving and processing a personal loss, I created this immersive VR experience for everyone—whether you have yet to face a significant loss or are seeking a mindful space for healing. */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
          <h2 className="mb-7 lg:mb-16 text-4xl lg:text-5xl font-semibold text-center opacity-90">Process</h2>
          <Concept />
          <ReferenceGallery />
          <Storyboard />
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Key VR Interacitons */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
        <h2 className="mb-7 lg:mb-16 text-4xl lg:text-5xl font-semibold text-center">Key VR Interactions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="flex flex-col items-center">
              <img 
                src="/media/projects/VR-GriefsShadow/Interaction-Voicemail-DataChange.gif" 
                alt="Interaction 1" 
                className="mt-2 w-full max-w-md mx-auto "
              />
              <p className="text-center text-md mt-2 text-gray-600">A date counter continuously increases while the outpouring of support diminishes.</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="/media/projects/VR-GriefsShadow/Room-Collision-Timeline.gif" 
                alt="Interaction 2" 
                className="mt-2 w-full max-w-md mx-auto "
              />
              <p className="text-center text-md mt-2 text-gray-600">The alarm sound queues the user to hit the clock, which then directs attention to the photo. Clicking the photo triggers a timeline sequence that introduces the user to the loss in the form of a pink companion.</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="/media/projects/VR-GriefsShadow/Breathe-Collision-Timeline.gif" 
                alt="Interaction 3" 
                className="mt-2 w-full max-w-md mx-auto "
              />
              <p className="text-center text-lg mt-2 text-gray-600">test</p>
            </div>
          </div>
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
          <h2 className="mb-7 lg:mb-16 text-4xl lg:text-5xl font-semibold text-center opacity-90">Impact</h2>
          <Breathe />
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Final Experience */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
        <h2 className="mb-7 lg:mb-16 text-4xl lg:text-5xl font-semibold text-center">Final Experience</h2>
        <div className="w-full max-w-xl mx-auto   border border-gray-300 overflow-hidden">
          <iframe
            className="w-full h-96 lg:h-[600px]"
            src="https://www.youtube.com/embed/iVC51VEGku4"
            title="YouTube Video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>


      {/* Call to Action */}
      <section className="relative flex items-center justify-center py-3 text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <img 
          src="/media/projects/VR-GriefsShadow/WithShadow-SkyboxBG.gif" 
          alt="Skybox" 
          className="absolute w-full h-full object-cover opacity-100"
        />
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-4xl font-bold text-white">Let’s Connect!</h2>
          <p className="text-white mt-6 text-lg opacity-80">Interested in my work? Let’s chat.</p>
          <button className="mt-8 px-6 py-3  text-lg transparent hover:text-white border border-[#cd5cc4] text-white font-semibold  ">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
}
