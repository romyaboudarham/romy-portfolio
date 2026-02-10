"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HomeHeroSection = ({ onLoadComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // Add this
  const fullText = "Romy Aboudarham";

  useEffect(() => {
    setIsMounted(true);

    // Show video after line finishes (2 seconds)
    setTimeout(() => {
      setShowVideo(true);
    }, 1300);

    setTimeout(() => {
      setShowContent(true);
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        index += 1;
        if (index === fullText.length) {
          clearInterval(interval);
          if (onLoadComplete) onLoadComplete();
        }
      }, 150);
    }, 1900);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center text-gray-900 pt-16 md:pt-6 pb-16 md:pb-12 overflow-hidden group">
      {/* Background Video with Mask */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Gradient for the line */}
            <linearGradient
              id="waveGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>

            {/* Mask: everything to the right of the wave */}
            <clipPath id="waveMask">
              <path d="M 0 100 Q 20 70, 40 60 T 80 20 T 100 0 L 100 100 Z" />
            </clipPath>
          </defs>

          {/* Video as foreignObject inside SVG - with fade in */}
          <foreignObject
            width="100"
            height="100"
            clipPath="url(#waveMask)"
            className={`transition-opacity duration-1000 ${showVideo ? "opacity-100" : "opacity-0"}`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
              xmlns="http://www.w3.org/1999/xhtml"
            >
              <source src="/videos/FFCh3VR-Card-slow.mp4" type="video/mp4" />
            </video>
          </foreignObject>

          {/* Wave line */}
          <path
            d="M 0 100 Q 20 70, 40 60 T 80 20 T 100 0"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="0.3"
            className="text-primary transition-all duration-[2000ms] ease-out"
            style={{
              strokeDasharray: 150,
              strokeDashoffset: isMounted ? 0 : 150,
            }}
          />
        </svg>

        {/* Wave-side text */}
        <div className="absolute inset-y-0 left-[20vw] md:left-[30vw] z-10 pointer-events-none">
          <div className="flex h-full items-center translate-y-[-5rem] max-w-[40vw]">
            <p
              className={`text-md md:text-xl text-primary/70 leading-relaxed transition-opacity duration-1000 ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              Building thoughtful,
              <br />
              human-centered
              <br />
              digital experiences
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div
        className={`flex-shrink-0 px-4 mt-6 md:mt-2 relative z-10 transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl text-primary md:text-4xl text-center min-h-[40px] md:min-h-[50px]">
          {showContent ? displayedText : ""}
        </h1>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
          <h3 className="text-l md:text-xl font-light">Design Engineer</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
        </div>
      </div>

      {/* Down Arrow Icon */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-14 h-8 text-brand" />
      </div>
    </section>
  );
};

export default HomeHeroSection;
