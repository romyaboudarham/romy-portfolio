"use client"; // Ensure this is at the top of the file

import React from "react";
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { useState } from "react";
import Carousel from "@/app/components/Carousel";

const slides = [
  { image: "/media/projects/VR-GriefsShadow/storyboard1.png", caption: "This is the first slide" },
  { image: "/media/projects/VR-GriefsShadow/storyboard2.png", caption: "This is the second slide" },
  { image: "/media/projects/VR-GriefsShadow/storyboard3.png", caption: "This is the third slide" },
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
          <img 
              src="/media/projects/VR-GriefsShadow/WithShadow-SkyboxBG.gif" 
              alt="Skybox" 
              className="absolute w-full h-full object-cover opacity-70"
            />
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
                This project encourages users to drop into their body by experiencing the relentless demands of daily life with the inescapable presence of grief, serving as a therapeutic tool for understanding the grief process.
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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
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
        <div className="hidden lg:flex justify-center">
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

      {/* We all enter this world with the capacity to carry grief. To love is to lose. Through grieving and processing a personal loss, I created this immersive VR experience for everyone—whether you have yet to face a significant loss or are seeking a mindful space for healing. */}
      <section className="my-3 lg:my-5 py-3 lg:py-5 px-6 lg:px-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-center">Ideation & Storyboarding</h2>
          <div className="mb-3 lg:mb-5 lg:px-20 max-w-6xl mx-auto">
          <Carousel slides={slides} />
            
          </div>
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-auto max-w-6xl">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Key VR Interacitons */}
      <section className="my-3 lg:my-5 py-3 lg:py-5 px-6 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-center">Key VR Interactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="flex flex-col items-center">
            <div className="mt-6 text-2xl font-semibold opacity-90">
              Dynamic Date Progression
            </div>
            <img 
              src="/media/projects/VR-GriefsShadow/Interaction-Voicemail-DataChange.gif" 
              alt="Interaction 1" 
              className="mt-2 w-full max-w-md mx-auto rounded-md"
            />
            <p className="text-center text-lg mt-2">A date counter continuously increases while the outpouring of support diminishes.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-6 text-2xl font-semibold opacity-90">
              Upon wake up, Collision Memory Trigger
            </div>
            <img 
              src="/media/projects/VR-GriefsShadow/Room-Collision-Timeline.gif" 
              alt="Interaction 2" 
              className="mt-2 w-full max-w-md mx-auto rounded-md"
            />
            <p className="text-center text-lg mt-2"> Colliding with an alarm clock and clicking a photo activates a timeline sequence, allowing users to interact with key memory points.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-6 text-2xl font-semibold opacity-90">
              Dissociated state via Tunnel Vision Effect
            </div>
            <img 
              src="/media/projects/VR-GriefsShadow/Breathe-Collision-Timeline.gif" 
              alt="Interaction 3" 
              className="mt-2 w-full max-w-md mx-auto rounded-md"
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
        <div className="mt-12 w-full max-w-xl mx-auto rounded-md shadow-lg border border-gray-300 overflow-hidden">
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
          <button className="mt-8 px-6 py-3  text-lg transparent hover:text-white border border-[#cd5cc4] text-white font-semibold rounded-md shadow-lg">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
}
