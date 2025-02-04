import React from "react";
import { ChevronDown } from 'lucide-react';

export default function GriefsShadow() {
  return (
    <div className="bg-[#f9f9f9] text-black min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-black relative flex flex-col items-center justify-center h-screen text-center px-6 md:px-12">
        <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-40">
          <source src="/videos/vr-demo.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 p-6 bg-white/80 rounded-2xl backdrop-blur-lg shadow-xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Through Shadows: A VR Journey of Grief
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto opacity-80">
            An immersive experience exploring the weight of loss and healing through VR interactions.
          </p>
          <button className="mt-6 px-8 py-4 text-lg bg-[#ff6562] hover:bg-[#db5654] text-white shadow-lg rounded-xl">
            Watch Demo
          </button>
        </div>
      </section>

       {/* Down Arrow Icon */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#ff6562]" />
        </div>

      {/* Project Overview */}
      <section className="py-24 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#ff6562]">Project Overview</h2>
          <p className="mt-6 text-lg opacity-80">
            Through Shadows is a VR project that embodies the struggle of unaddressed grief through interactive obstacles and an evolving virtual environment.
          </p>
          <p className="mt-4"><strong>Role:</strong> Creative Technologist, Designer, Developer</p>
          <p><strong>Tools:</strong> Unity, C#, Oculus VR, Storyboarding</p>
        </div>
        <div>
          <img src="/images/storyboard.jpg" alt="Storyboard" className="rounded-2xl shadow-2xl border border-gray-300" />
        </div>
      </section>

      {/* Process & Development */}
      <section className="py-24 px-6 md:px-20">
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
      <section className="py-24 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-[#ff6562]">Final Experience</h2>
        <video className="mt-12 w-full max-w-3xl mx-auto rounded-2xl shadow-lg border border-gray-300" controls>
          <source src="/videos/final-demo.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#ffebe9] text-center px-6 md:px-20 rounded-t-2xl shadow-inner">
        <h2 className="text-4xl font-bold text-[#ff6562]">Let’s Connect!</h2>
        <p className="mt-6 text-lg opacity-80">Interested in my work? Let’s chat.</p>
        <button className="mt-8 px-8 py-4 text-lg bg-[#ff6562] hover:bg-[#db5654] text-white font-semibold rounded-xl shadow-lg">
          Contact Me
        </button>
      </section>
    </div>
  );
}
