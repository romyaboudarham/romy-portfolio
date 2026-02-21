"use client"; // Ensure this is at the top of the file

import React from "react";
import Concept from "@/app/components/ARMixedEmotions/Concept";
import ObjectDesign from "@/app/components/ARMixedEmotions/ObjectDesign";
import Storyboard from "@/app/components/ARMixedEmotions/Storyboard";
import HeroSection from "@/app/components/ARMixedEmotions/HeroSection";
import UnityARDev from "@/app/components/ARMixedEmotions/UnityARDev";
import Final from "@/app/components/ARMixedEmotions/Final";
import Navbar from "@/app/components/Navbar.jsx";
import PageContent from "@/app/components/PageContent";

export default function GriefsShadow() {
  return (
    <div className="bg-white text-black font-sans">
      <Navbar />
      <HeroSection />

      <PageContent as="div">
        {/* Project Overview */}
        <section className="my-6 lg:my-8">
          <h2 className="text-center mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">Project Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-2xl font-semibold opacity-90">Assignment</div>
              <p className="mt-2 lg:text-xl text-gray-800">
                Use AR to reveal an aspect of what is particularly meaningful and/or essential to you in
                terms of design/creativity/expression.
              </p>
              <div className="mt-6 space-y-2 lg:text-lg text-gray-800">
                <p><strong className="text-black opacity-90">Duration:</strong> 2 weeks, completed September 2024</p>
                <p><strong className="text-black opacity-90">Role:</strong> Creative Technologist, Designer, Developer</p>
                <p><strong className="text-black opacity-90">Tools:</strong> Unity, C#, Quill VR, Storyboarding</p>
                <p><strong className="text-black opacity-90">Focus:</strong> Mindfulness Storytelling, AR Design, and Technical Implementation in Unity</p>
                <p><strong className="text-black opacity-90">Context:</strong> Audited CCA Grad class "XR: Immersive Experiences and Scripted Spaces"</p>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/media/projects/ARMixedEmotions/MixedEmotions-tech.png"
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
          <Storyboard />
          <ObjectDesign />
          <UnityARDev />
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Final Experience */}
        <section className="my-6 lg:my-10">
          <h2 className="mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold text-center">Final Experience</h2>
          <Final />
        </section>
      </PageContent>

      {/* Footer - Let's Connect */}
      <section className="relative flex items-center justify-center py-3 text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <img
          src="/media/projects/ARMixedEmotions/hero-bg.jpg"
          alt="Skybox"
          className="absolute w-full h-full object-cover opacity-100"
        />
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold opacity-80">Let's Connect!</h2>
          <p className="mt-6 text-lg opacity-70">Interested in my work? Let's chat.</p>
          <a href="mailto:romyaboudarham@gmail.com">
            <button className="rounded-md mt-8 px-6 py-3 text-lg bg-[black]/70 text-white border hover:bg-transparent hover:text-black border-black">
              Contact Me
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
