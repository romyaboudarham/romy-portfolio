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
        <div className="w-full max-w-[90rem] mx-auto md:px-6 lg:px-8 my-5">
          <ProjectsSection />
          <Divider />
        </div>
      </div>
    </main>
  );
}
