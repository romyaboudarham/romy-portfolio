"use client";

import { useState, useEffect } from "react";
import HomeHeroSection from "./components/HomeHeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Divider from "./components/Divider"

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
      <Navbar show={heroLoaded} />
      <HomeHeroSection onLoadComplete={() => setHeroLoaded(true)} />
      
      <div className="px-2">
        <div className="w-full max-w-8xl mx-auto md:px-6 lg:px-8 py-12">
          <ProjectsSection />
          <Divider />
        </div>

      {/* Footer - Let's Connect */}
      <section className="relative flex items-center justify-center pb-3 text-center px-6 md:px-20 rounded-t-2xl">
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-4xl lg:text-5xl text-black"
              style={{ fontFamily: "Londrina Outline, cursive" }}>
                Let’s Connect!
          </h2>
          <p className="mt-6 text-lg text-black opacity-80">Interested in my work? Let’s chat.</p>
          <a href="mailto:romyaboudarham@gmail.com">
            <button className="mt-8 px-6 py-3 rounded-md text-lg hover:bg-primary hover:text-white border border-[#800000] text-[#800000] font-semibold  ">
              Contact Me
            </button>
          </a>
        </div>
      </section>
      </div>
    </main>
  );
}
