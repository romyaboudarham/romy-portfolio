"use client"; // Ensure this is at the top of the file

import React from "react";
import Concept from "@/app/components/NowhereToBelong/Concept";
import HeroSection from "@/app/components/NowhereToBelong/HeroSection"
import Navbar from "@/app/components/Navbar.jsx";

export default function NowhereToBelong() {
    
  return (
    <div className="bg-white text-black font-sans">
      <Navbar textColor="" />
      {/* Hero Section */}
      <HeroSection />

      {/* Project Overview */}
      <section className="mx-3 my-6 lg:my-8 lg:mx-[180px]">
        <h2 className="text-center mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">Project Overview</h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            {/* Additional Details */}
            <div className="space-y-2 lg:text-lg text-gray-800">
              <p><strong className="text-black opacity-90">Duration:</strong> 2 weeks, November 2025</p>
              <p><strong className="text-black opacity-90">Role:</strong> Game Designer & Developer</p>
              <p><strong className="text-black opacity-90">Collaborators: </strong> Lorenzo Carley (Director & Project Lead), Kinjal Kanzariya (Game Designer & Developer), Magnus Reichel (Sound Designer), Bernard Masika (3D Artist)</p>
              <p><strong className="text-black opacity-90">Context: </strong> Finalist at{" "}
                <a href="https://www.xrcc.events/" target="_blank" rel="noopener noreferrer" className="text-decoration-line: underline hover:underline">
                  XR Creator Con 2025 Hackathon for Immersive Film & Storytelling Category
                </a>
              </p>
              <p><strong className="text-black opacity-90">Tools:</strong> Unity, C#, Git, Blender, Figma, After Effects, Audacity, Scaniverse, ITHACA, Premiere Pro, Meta Quest 3</p>
            </div>
          </div>

          {/* Logo Image */}
          <div className="hidden lg:flex justify-center">
            <img 
              src="/media/projects/FinnsFishbowl/FF-Tools.png" 
              alt="tools-logos" 
              width={500} 
            />
          </div>
        </section>
      </section>

      {/* Dividing Line */}
      <div className="my-6 lg:mx-[180px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Conceptualization */}
      {/* We all enter this world with the capacity to carry grief. To love is to lose. Through grieving and processing a personal loss, I created this immersive VR experience for everyone—whether you have yet to face a significant loss or are seeking a mindful space for healing. */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[180px]">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">COMING SOON</h2>
          {/* <Concept /> */}
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[180px]">
        <div className="border-t-2 border-gray-300"></div> {/* The dividing line */}
      </div>

      {/* Footer - Let's Connect */}
      {/* <section className="relative flex items-center justify-center py-3 text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <img 
          src="/media/projects/NowhereToBelong/map.png" 
          alt="map" 
          className="absolute w-full h-full object-cover opacity-100"
        />
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold ">Let’s Connect!</h2>
          <p className="text-white mt-6 text-lg opacity-80">Interested in my work? Let’s chat.</p>
          <a href="mailto:romyaboudarham@gmail.com">
            <button className="mt-8 px-6 py-3 rounded-md text-lg transparent hover:text-white border border-[#67ed54] text-white font-semibold  ">
              Contact Me
            </button>
          </a>
        </div>
      </section> */}
    </div>
  );
}
