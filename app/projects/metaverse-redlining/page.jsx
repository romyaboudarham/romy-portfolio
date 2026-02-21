"use client"; // Ensure this is at the top of the file

import React from "react";
import Concept from "@/app/components/Metaverse/Concept";
import GISData from "@/app/components/Metaverse/GISData";
import Unreal from "@/app/components/Metaverse/Unreal";
import HeroSection from "@/app/components/Metaverse/HeroSection";
import Navbar from "@/app/components/Navbar.jsx";
import PageContent from "@/app/components/PageContent";

export default function Metaverse() {
  return (
    <div className="bg-[rgb(249,249,249)] text-black font-sans">
      <Navbar textColor="text-white" />
      <HeroSection />

      <PageContent as="div">
        {/* Project Overview */}
        <section className="my-6 lg:my-8">
          <h2 className="text-center mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">Project Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-2xl font-semibold opacity-90">Assignment</div>
              <p className="mt-2 lg:text-xl text-gray-800">
                How might we use the metaverse to advocate for tolerance and empathy, bringing a sense of peace to global communities?
              </p>
              <div className="mt-6 space-y-2 lg:text-lg text-gray-800">
                <p><strong className="text-black opacity-90">Duration:</strong> 7 weeks, completed December 2023</p>
                <p><strong className="text-black opacity-90">Role:</strong> Creative Technologist, Designer, Developer</p>
                <p><strong className="text-black opacity-90">Tools:</strong> Unreal Engine 5, UE5 Blueprints, Blender, R Studio, Cesium</p>
                <p><strong className="text-black opacity-90">Focus:</strong> Empathy-Driven Storytelling, VR Design, and Technical Implementation in Unity</p>
                <p><strong className="text-black opacity-90">Featured: </strong>
                  <a href="https://apuzinio.medium.com/empathy-and-coexistence-in-the-metaverse-2f2b27303232" target="_blank" rel="noopener noreferrer" className="text-decoration-line: underline hover:underline">
                    Audited CCA IxD Class "Advanced Studio: Design for Metaverse"
                  </a>
                </p>
                <p><strong className="text-black opacity-90">Featured: </strong>
                  <a href="https://apuzinio.medium.com/empathy-and-coexistence-in-the-metaverse-2f2b27303232" target="_blank" rel="noopener noreferrer" className="text-decoration-line: underline hover:underline">
                    Empathy and Coexistence in the Metaverse
                  </a>
                </p>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/media/projects/Metaverse-Redlining/metaverse-tools.png"
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
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">Data, Design, & Development Process</h2>
          <GISData />
          <Unreal />
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Final Experience */}
        <section className="my-6 lg:my-10">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center">Final Experience</h2>
          <div className="w-full max-w-xl mx-auto border border-gray-300 overflow-hidden">
            <iframe
              className="w-full h-96 lg:h-[600px] rounded-md"
              src="https://www.youtube.com/embed/rM7UQ2ZR7Vs"
              title="YouTube Video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <img
            src="/media/projects/Metaverse-Redlining/presentation.jpeg"
            alt="presentation"
            className="mt-5 mx-auto w-full max-w-md md:max-w-lg lg:max-w-2xl rounded-md"
          />
          <p className="mb-2 text-center text-md lg:text-lg text-gray-600">
            Me presenting my research, data, and demo for the class and guests. 2023
          </p>
        </section>
      </PageContent>

      {/* Footer - Let's Connect */}
      <section className="relative flex items-center justify-center py-3 text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <img
          src="/media/projects/Metaverse-Redlining/metaverse-bg.png"
          alt="Skybox"
          className="absolute w-full h-full object-cover opacity-100"
        />
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Let's Connect!</h2>
          <p className="text-white mt-6 text-lg opacity-80">Interested in my work? Let's chat.</p>
          <a href="mailto:romyaboudarham@gmail.com">
            <button className="mt-8 px-6 py-3 text-lg bg-[black]/70 backdrop-blur-lg text-white hover:bg-[white]/40 hover:text-black border border-black rounded-md">
              Contact Me
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
