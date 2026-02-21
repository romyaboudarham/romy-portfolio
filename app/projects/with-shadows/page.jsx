"use client"; // Ensure this is at the top of the file

import React from "react";
import Concept from "@/app/components/WithShadows/Concept";
import EnvironmentDesign from "@/app/components/WithShadows/EnvironmentDesign";
import Storyboard from "@/app/components/WithShadows/Storyboard";
import Breathe from "@/app/components/WithShadows/Breathe";
import HeroSection from "@/app/components/WithShadows/HeroSection";
import InteractionDesign from "@/app/components/WithShadows/InteractionDesign";
import Navbar from "@/app/components/Navbar.jsx";
import PageContent from "@/app/components/PageContent";
import FadeIn from "@/app/components/FadeIn";

export default function GriefsShadow() {
  return (
    <div className="bg-[#f9f9f9] text-black font-sans">
      <Navbar textColor="text-white" />
      <HeroSection />

      <PageContent as="div">
        {/* Project Overview */}
        <section className="my-6 lg:my-8">
          <FadeIn>
            <h2 className="text-center mb-7 font-serif font-bold uppercase lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">
              Project Overview
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="mt-6 space-y-2 lg:text-lg text-gray-800">
                  <p>
                    <strong className="text-black opacity-90">Role:</strong>{" "}
                    Creative Technologist, Designer, Developer
                  </p>
                  <p>
                    <strong className="text-black opacity-90">Tools:</strong> Unity,
                    C#, Oculus VR, Storyboarding
                  </p>
                  <p>
                    <strong className="text-black opacity-90">Focus:</strong>{" "}
                    Empathy-Driven Storytelling, VR Design, and Technical
                    Implementation in Unity
                  </p>
                  <p>
                    <strong className="text-black opacity-90">Context:</strong>{" "}
                    Audited CCA Grad class "XR: Immersive Experiences and Scripted
                    Spaces"
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <img
                  src="/media/projects/VR-GriefsShadow/griefs-shadow-logos.png"
                  alt="tools-logos"
                  width={400}
                />
              </div>
            </div>
          </FadeIn>
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Conceptualization */}
        <section className="my-6 lg:my-10">
          <FadeIn>
            <h2 className="mb-7 lg:mb-14 font-serif font-bold uppercase text-3xl lg:text-4xl text-center opacity-90">
              Conceptualization
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Concept />
          </FadeIn>
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Design & Development */}
        <section className="my-6 lg:my-10">
          <FadeIn>
            <h2 className="mb-7 lg:mb-14 font-serif font-bold uppercase text-3xl lg:text-4xl text-center opacity-90">
              Design & Development Process
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Storyboard />
            <EnvironmentDesign />
            <InteractionDesign />
          </FadeIn>
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Final Experience */}
        <section className="my-6">
          <FadeIn>
            <h2 className="mb-7 lg:mb-14 font-serif font-bold uppercase text-3xl lg:text-4xl text-center">
              Final Experience
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="w-full max-w-xl mx-auto border border-gray-300 overflow-hidden">
              <iframe
                className="w-full h-96 lg:h-[600px] rounded-md"
                src="https://www.youtube.com/embed/iVC51VEGku4"
                title="YouTube Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </FadeIn>
        </section>

        <div className="border-t-2 border-gray-300 my-6" />

        {/* Impact */}
        <section className="my-6 lg:my-10">
          <FadeIn>
            <h2 className="mb-7 lg:mb-14 text-3xl font-serif font-bold uppercase lg:text-4xl text-center opacity-90">
              Impact
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Breathe />
          </FadeIn>
        </section>
      </PageContent>
    </div>
  );
}
