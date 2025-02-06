"use client"; // Ensure this is at the top of the file

import React from "react";
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { useState } from "react";
import WSStoryboardCarousel from "@/app/components/WS-StoryboardCarousel";

const slides = [
  "/media/projects/VR-GriefsShadow/storyboard1.png",
  "/media/projects/VR-GriefsShadow/storyboard2.png",
  "/media/projects/VR-GriefsShadow/storyboard3.png",
];


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
      <section className="bg-black relative flex items-center justify-center min-h-screen text-center px-4 lg:px-12 overflow-hidden">
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
            className={`absolute w-full h-full object-cover border-4 border-[#cd5cc4] transition-opacity duration-500 ${fadeClass}`}
          />
        </>
      ) : (
        <>
          {/* Default Hero Section */}
          <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-70">
            <source
              src="/media/projects/VR-GriefsShadow/skybox.mov"
              type="video/mp4"
            />
          </video>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
            {/* Title & Description Box */}
            <div className="p-3 lg:p-5 text-white bg-[white]/20 backdrop-blur-lg shadow-xl text-center rounded-md">
              <div className="mt-3 lg:mt-5 text-4xl lg:text-6xl font-bold opacity-90">
                With Shadows
              </div>
              <p className="mt-3 lg:mt-5 text-lg lg:text-2xl">
                An Immersive Virtual Reality Experience about Grieving the Loss of a Loved One
              </p>
              <p className="mt-3 mb-3 lg:mb-5 lg:mt-5 text-base lg:text-xl opacity-80">
                We all enter this world with the capacity to carry grief. To love is to lose. Through grieving and processing a personal loss, I created this immersive VR experience for everyone—whether you have yet to face a significant loss or are seeking a mindful space for healing.
                <br /><br />
                By immersing users in an experience that balances the relentless demands of daily life with the inescapable presence of grief, the project encourages users to drop into their body, serving as a therapeutic tool for understanding the grief process.
              </p>
            </div>
            
            {/* Button Below */}
            <div className="mt-3 lg:mt-10 flex justify-center">
              <button
                onClick={handleWatchDemo}
                className="px-6 py-3 rounded-md bg-transparent text-white hover:bg-[#cd5cc4]
                 hover:text-white border border-[#cd5cc4] mt-3"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </>
      )}

      {/* Down Arrow Icon */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-14 h-8 text-[#cd5cc4]" />
      </div>
    </section>

      {/* Project Overview */}
      <section className="my-3 lg:my-5 py-3 lg:py-5 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-semibold">Project Overview</h2>

          {/* Emphasized Assignment */}
          <div className="mt-6 text-2xl font-semibold opacity-90">
            Assignment  
          </div>
          <p className="mt-2 text-lg opacity-80">
            Design and prototype a VR experience using Unity that fosters empathy through the perspective of the individual for whom you're building empathy.
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

      {/* Dividing Line */}
      <div className="my-6 mx-auto max-w-6xl">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Ideation & Storyboard */}
      <section className="my-3 lg:my-5 py-3 lg:py-5 px-6 lg:px-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-center">Ideation & Storyboarding</h2>
          <div className="mb-3 lg:mb-5 px-6 lg:px-20 max-w-6xl mx-auto">
            <WSStoryboardCarousel  >
                  {slides.map((s, i) => (
                <img key={i} src={s} />
              ))}
            </WSStoryboardCarousel>
          </div>
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-auto max-w-6xl">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Key VR Interacitons */}
      <section className="my-3 lg:my-5 py-3 lg:py-5 px-6 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-center">Key VR Interactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 lg:px-32 py-6">
          <div className="flex flex-col items-center">
            <img 
              src="/media/projects/VR-GriefsShadow/interaction1.gif" 
              alt="Interaction 1" 
              className="w-full max-w-sm mx-auto rounded-xl"
            />
            <p className="text-center text-lg mt-2">Grabbing and Inspecting Objects</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="/media/projects/VR-GriefsShadow/interaction2.gif" 
              alt="Interaction 2" 
              className="w-full max-w-sm mx-auto rounded-xl"
            />
            <p className="text-center text-lg mt-2">Teleportation Movement</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="/media/projects/VR-GriefsShadow/interaction3.gif" 
              alt="Interaction 3" 
              className="w-full max-w-sm mx-auto rounded-xl"
            />
            <p className="text-center text-lg mt-2">Button Press to Trigger Events</p>
          </div>
        </div>
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-auto max-w-6xl">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Final Experience */}
      <section className="my-3 lg:my-5 py-3 lg:py-5 px-6 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-center">Final Experience</h2>
        <video className="mt-12 w-full max-w-xl mx-auto rounded-xl shadow-lg border border-gray-300" controls>
          <source src="/media/projects/VR-GriefsShadow/FinalExperience.mp4" type="video/mp4" />
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
