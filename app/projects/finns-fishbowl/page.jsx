"use client"; // Ensure this is at the top of the file

import React from "react";
import Concept from "@/app/components/FinnsFishbowl/Concept";
import MobileUXDesign from "@/app/components/FinnsFishbowl/MobileUXDesign";
import ExhibitLayout from "@/app/components/FinnsFishbowl/ExhibitLayout";
import ESP32 from "@/app/components/FinnsFishbowl/ESP32";
import HeroSection from "@/app/components/FinnsFishbowl/HeroSection";
import Navbar from "@/app/components/Navbar.jsx";
import Ch3VR from "@/app/components/FinnsFishbowl/Ch3VR";
import PageContent from "@/app/components/PageContent";

export default function FinnsFishbowl() {
  return (
    <div className="bg-white text-black font-sans">
      <Navbar textColor="text-white" />
      <HeroSection />

      <PageContent as="div">
        {/* Project Overview */}
        <section className="my-6 lg:my-8">
          <h2 className="text-center mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">Project Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="space-y-2 lg:text-lg text-gray-800">
                <p><strong className="text-black opacity-90">Duration:</strong> 4 weeks, completed January 2023</p>
                <p><strong className="text-black opacity-90">Tools:</strong> A-Frame VR, HTML/CSS/JS, P5.js, Projection Mapping, Physical Computing, Blender</p>
                <p><strong className="text-black opacity-90">Focus:</strong> Empathy-Driven Storytelling, Exhibition Design, and Technical Implementation in various mediums</p>
                <p><strong className="text-black opacity-90">Context: </strong> Final project from
                  <a href="https://grayarea.org/course/creative-code-intensive/" target="_blank" rel="noopener noreferrer" className="text-decoration-line: underline hover:underline">
                    Gray Area's Creative Code Intensive education program
                  </a>
                </p>
                <p><strong className="text-black opacity-90">Featured: </strong>
                  <a href="https://grayarea.org/event/gray-area-artist-showcase-winter-2023/" target="_blank" rel="noopener noreferrer" className="text-decoration-line: underline hover:underline">
                    Gray Area Artist Showcase Winter 2023
                  </a>
                </p>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/media/projects/FinnsFishbowl/FF-Tools.png"
                alt="tools-logos"
                width={500}
              />
            </div>
          </div>
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Conceptualization */}
        <section className="my-6 lg:my-10">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">Conceptualization</h2>
          <Concept />
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Design & Development */}
        <section className="my-6 lg:my-10">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">Design & Development Process</h2>
          <ExhibitLayout />
          <MobileUXDesign />
          <ESP32 id="esp32" />
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Chapter 3 in VR */}
        <section id="ch3vr" className="my-6 lg:my-10">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">Chapter 3 in Virtual Reality</h2>
          <Ch3VR />
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Final Experience */}
        <section className="my-6">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center">Final Experience</h2>
          <div className="w-full max-w-xl mx-auto border border-gray-300 overflow-hidden">
            <iframe
              className="w-full h-96 lg:h-[600px] rounded-md"
              src="https://www.youtube.com/embed/Bd18tS8uOhI"
              title="YouTube Video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </PageContent>

      {/* Footer - Let's Connect */}
      <section className="relative flex items-center justify-center py-3 text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <img
          src="/media/projects/FinnsFishbowl/hero-footer.jpg"
          alt="Skybox"
          className="absolute w-full h-full object-cover opacity-100"
        />
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Let's Connect!</h2>
          <p className="text-white mt-6 text-lg opacity-80">Interested in my work? Let's chat.</p>
          <a href="mailto:romyaboudarham@gmail.com">
            <button className="mt-8 px-6 py-3 rounded-md text-lg transparent hover:text-white border border-[#67ed54] text-white font-semibold">
              Contact Me
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
