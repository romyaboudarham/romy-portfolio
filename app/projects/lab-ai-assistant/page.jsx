"use client"; // Ensure this is at the top of the file

import React from "react";
import Implementation from "@/app/components/LabAIAssistant/Implementation";
import HeroSection from "@/app/components/LabAIAssistant/HeroSection";
import Navbar from "@/app/components/Navbar.jsx";

export default function GriefsShadow() {
  return (
    <div className="bg-[rgb(249,249,249)] text-black font-sans">
      <Navbar textColor="text-white" />
      {/* Hero Section */}
      <HeroSection />

      {/* Project Overview */}
      <section className="mx-3 my-6 lg:my-8 lg:mx-[170px]">
        <h2 className="text-center mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">
          Project Overview
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="lg:text-xl text-gray-800">
              As the lab manager of CCA's interactive electronic art makerspace,
              I explore new technology and created a demo to teach students AI
              integration with Gemini and ChatGPT in physical prototypes.
              <br />
              <br />
              Inspired by CCA student Colin Chan's project using ChatGPT with an
              old phone, I repurposed the device, adding new Gemini logic for
              the Raspberry Pi 5. Now, I'm integrating our lab's information so
              AI can assist with student resource questions.
            </p>

            {/* Additional Details */}
            <div className="mt-6 space-y-2 lg:text-lg text-gray-800">
              <p>
                <strong className="text-black opacity-90">Tools:</strong> Gemini
                AI, Python, Raspberry Pi, Physical Computing
              </p>
            </div>
          </div>

          {/* Logo Image */}
          <div className="hidden lg:flex justify-center">
            <img
              src="/media/projects/LabAIAssistant/logos.png"
              alt="tools-logos"
              width={500}
            />
          </div>
        </section>
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div>{" "}
        {/* The dividing line */}
      </div>

      {/* Design & Developement */}
      <section className="mx-3 my-6 lg:my-10 lg:mx-[170px]">
        <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">
          Implementation
        </h2>
        <Implementation />
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div>{" "}
        {/* The dividing line */}
      </div>

      {/* Final Experience */}
      <section className="mx-3 my-6 lg:mx-[180px]">
        <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center">
          Final Experience
        </h2>
        <div className="w-full max-w-xl mx-auto   border border-gray-300 overflow-hidden">
          <iframe
            className="w-full h-96 lg:h-[600px] rounded-md"
            src="https://www.youtube.com/embed/U70IRBNUpqw"
            title="YouTube Video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Dividing Line */}
      <div className="my-6 mx-3 lg:mx-[170px]">
        <div className="border-t-2 border-gray-300"></div>{" "}
        {/* The dividing line */}
      </div>

      {/* Footer - Let's Connect */}
      {/* <section className="relative flex items-center justify-center py-3 text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <img 
          src="/media/projects/LabAIAssistant/bg.jpeg" 
          alt="Skybox" 
          className="absolute w-full h-full object-cover opacity-100"
        />
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">Let’s Connect!</h2>
          <p className="text-black mt-6 text-lg opacity-80">Interested in my work? Let’s chat.</p>
          <a href="mailto:romyaboudarham@gmail.com">
            <button className="mt-8 px-6 py-3  text-lg bg-[black]/70 backdrop-blur-lg text-white hover:bg-[white]/40
                hover:text-black border border-black rounded-md">
              Contact Me
            </button>
          </a>
        </div>
      </section> */}
    </div>
  );
}
