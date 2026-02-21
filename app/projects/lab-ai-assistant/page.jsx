"use client"; // Ensure this is at the top of the file

import React from "react";
import Implementation from "@/app/components/LabAIAssistant/Implementation";
import HeroSection from "@/app/components/LabAIAssistant/HeroSection";
import Navbar from "@/app/components/Navbar.jsx";
import PageContent from "@/app/components/PageContent";

export default function GriefsShadow() {
  return (
    <div className="bg-[rgb(249,249,249)] text-black font-sans">
      <Navbar textColor="text-white" />
      <HeroSection />

      <PageContent as="div">
        {/* Project Overview */}
        <section className="my-6 lg:my-8">
          <h2 className="text-center mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">
            Project Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
              <div className="mt-6 space-y-2 lg:text-lg text-gray-800">
                <p>
                  <strong className="text-black opacity-90">Tools:</strong> Gemini
                  AI, Python, Raspberry Pi, Physical Computing
                </p>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/media/projects/LabAIAssistant/logos.png"
                alt="tools-logos"
                width={500}
              />
            </div>
          </div>
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Implementation */}
        <section className="my-6 lg:my-10">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center opacity-90">
            Implementation
          </h2>
          <Implementation />
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Final Experience */}
        <section className="my-6">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center">
            Final Experience
          </h2>
          <div className="w-full max-w-xl mx-auto border border-gray-300 overflow-hidden">
            <iframe
              className="w-full h-96 lg:h-[600px] rounded-md"
              src="https://www.youtube.com/embed/U70IRBNUpqw"
              title="YouTube Video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </PageContent>
    </div>
  );
}
