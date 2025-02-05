"use client"; // Ensure this is at the top of the file

import React from "react";
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { useState } from "react";

export default function GriefsShadow() {
    // Declare state and functions
    const [isPlaying, setIsPlaying] = useState(false);
    const [fadeClass, setFadeClass] = useState("opacity-0");

    const handleWatchDemo = () => {
      // Start playing: mount video (initially transparent)
      setIsPlaying(true);
      // Slight delay to trigger the transition
      setTimeout(() => {
        setFadeClass("opacity-100");
      }, 50);
    };
  
    const handleVideoEnd = () => {
      // Fade out before unmounting the video
      setFadeClass("opacity-0");
      setTimeout(() => {
        setIsPlaying(false);
      }, 500); // 500ms matches the duration-500 class below
    };
  
    const handleBackClick = () => {
      // Fade out before returning to default view
      setFadeClass("opacity-0");
      setTimeout(() => {
        setIsPlaying(false);
      }, 500);
    };

  return (
    <div className="bg-[#f9f9f9] text-black min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-black relative flex items-center justify-center h-screen text-center px-6 md:px-12">
        {isPlaying ? (
          <>
            {/* Back Arrow in Top Left */}
            <div
              onClick={handleBackClick}
              className="absolute top-4 left-4 z-20 text-white cursor-pointer"
            >
              <ChevronLeft className="w-8 h-8" />
            </div>
            <video
              src="/media/projects/VR-GriefsShadow/griefs-shadow-demo.mp4"
              autoPlay
              controls
              onEnded={handleVideoEnd}
              className={`absolute w-full h-full object-cover border-4 border-[#ff6562] transition-opacity duration-500 ${fadeClass}`}
            />
          </>
        ) : (
          <>
            {/* Default Hero Section */}
            <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-40">
              <source
                src="/media/projects/VR-GriefsShadow/griefs-shadow-demo.mp4"
                type="video/mp4"
              />
            </video>
            <div className="relative z-10 w-full max-w-full sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
              {/* Title & Description Box */}
              <div className="p-6 md:p-12 bg-white/70 backdrop-blur-lg shadow-xl text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                  With Shadows
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-2xl max-w-full opacity-80">
                  We all enter this world with the capacity to carry grief. To love is to lose. Through grieving and processing a personal loss, I created this immersive VR experience for everyone—whether you have yet to face a significant loss or are seeking a mindful space for healing. <br /><br />
                  By immersing users in an experience that balances the relentless demands of daily life with the inescapable presence of grief, the project encourages users to drop into their body and explore their emotions. <br />
                  Ultimately, this experience serves as a therapeutic tool for self-empathy and compassion, inviting all to better understand and process grief.
                </p>
              </div>

              {/* Button Below */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleWatchDemo}
                  className="px-8 py-4 text-lg bg-[#ff6562] hover:bg-[#db5654] text-white shadow-lg rounded-xl"
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Down Arrow Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#ff6562]" />
      </div>

      {/* Project Overview */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#ff6562]">Project Overview</h2>

          {/* Emphasized Assignment */}
          <div className="mt-6 text-2xl font-semibold opacity-90">
            Assignment  
          </div>
          <p className="mt-2 text-lg opacity-80">
            Design and prototype a VR experience using Unity that fosters empathy through the perspective of the individuals for whom you're building empathy.
          </p>

          {/* Additional Details */}
          <div className="mt-6 space-y-2 text-lg opacity-80">
            <p><strong>Duration:</strong> 7 weeks, completed December 2024</p>
            <p><strong>Role:</strong> Creative Technologist, Designer, Developer</p>
            <p><strong>Tools:</strong> Unity, C#, Oculus VR, Storyboarding</p>
            <p><strong>Focus:</strong> Empathy-Driven Storytelling, VR Design, and Technical Implementation in Unity</p>
            <p><strong>Context:</strong> Audited CCA Grad class “XR: Immersive Experiences and Scripted Spaces”</p>
          </div>
        </div>

        {/* Logo Image */}
        <div className="flex justify-center">
          <img 
            src="/media/projects/VR-GriefsShadow/griefs-shadow-logos.png" 
            alt="tools-logos" 
            width={500} 
          />
        </div>
      </section>



      {/* Process & Development */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-[#ff6562]">Process & Development</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300 transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Concept & Ideation</h3>
            <p className="mt-3 opacity-80">Sketches, storyboards, and research on grief & immersive storytelling.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300 transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Technical Breakdown</h3>
            <p className="mt-3 opacity-80">Unity code snippets, interaction mechanics, and performance optimizations.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300 transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Challenges & Iterations</h3>
            <p className="mt-3 opacity-80">Insights into user feedback and refining the VR experience.</p>
          </div>
        </div>
      </section>

      {/* Final Experience */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-[#ff6562]">Final Experience</h2>
        <video className="mt-12 w-full max-w-3xl mx-auto rounded-2xl shadow-lg border border-gray-300" controls>
          <source src="/videos/final-demo.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#ffebe9] text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <h2 className="text-4xl font-bold text-[#ff6562]">Let’s Connect!</h2>
        <p className="mt-6 text-lg opacity-80">Interested in my work? Let’s chat.</p>
        <button className="mt-8 px-8 py-4 text-lg bg-[#ff6562] hover:bg-[#db5654] text-white font-semibold rounded-xl shadow-lg">
          Contact Me
        </button>
      </section>
    </div>
  );
}
