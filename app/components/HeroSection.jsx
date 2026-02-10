"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const fullText = "Romy Aboudarham";

  useEffect(() => {
    setIsMounted(true); // Add this line back
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index += 1;
      if (index === fullText.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center text-gray-900 pt-16 md:pt-6 pb-16 md:pb-12">
      {/* Header */}
      <div className="flex-shrink-0 px-4 mt-6 md:mt-2">
        <h1
          className="text-5xl text-[#800000] md:text-6xl text-center min-h-[60px] md:min-h-[72px]"
          style={{ fontFamily: "Londrina Outline, cursive" }}
        >
          {isMounted ? displayedText : fullText}
        </h1>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#800000] to-transparent opacity-30" />
          <h3 className="text-l md:text-xl font-light">
            UI/UX Design Engineer
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#800000] to-transparent opacity-30" />
        </div>
      </div>

      {/* Featured Project */}
      {/* <div className="w-full max-w-5xl px-4 mt-10 md:mt-0 md:flex-1 md:flex md:items-center">
        <div className="w-full shadow-xl border border-[#800000]/10 rounded-md overflow-hidden relative [&_.relative]:!h-[280px] md:[&_.relative]:!h-[570px]">
          <div className="absolute top-4 left-4 z-10 border-[#800000] text-white bg-[#800000] px-2 py-1 lg:px-2 lg:py-1 text-sm md:text-lg border rounded-md font-semibold shadow-lg">
            Featured
          </div>

          <ProjectCard
            videoUrl="/videos/CC-short.mp4"
            imgUrl="/images/featured-poster.jpg"
            title="Your Featured Project Title"
            description="A compelling description of your most impressive work that showcases your design and engineering skills."
            techStack="React, Next.js, Tailwind CSS, Framer Motion"
          />
        </div>
      </div> */}

      <div className="w-full max-w-5xl mt-10 md:mt-0 md:flex-1 md:flex md:items-center">
        <div className="w-full shadow-xl border border-[#800000]/10 rounded-md overflow-hidden relative">
          {/* Featured Tag */}
          <div className="absolute top-4 left-4 z-10 border-[#800000] text-white bg-[#800000] px-2 py-1 lg:px-2 lg:py-1 text-sm md:text-lg border rounded-md font-semibold shadow-lg">
            Featured
          </div>

          {/* YouTube Embed */}
          <div className="relative w-full h-[280px] md:h-[575px]">
            <iframe
              src="https://www.youtube.com/embed/enKps2PSPw4?autoplay=0&mute=0"
              title="Featured Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Down Arrow Icon */}
      <div className=" absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-14 h-8 text-[#800000]" />
      </div>
    </section>
  );
};

export default HeroSection;
