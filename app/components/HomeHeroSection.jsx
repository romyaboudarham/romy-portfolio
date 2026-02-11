"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HomeHeroSection = ({ onLoadComplete }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 1300);

    // Fade in hero text
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1900);

    // Fade in nav AFTER text
    const navTimer = setTimeout(() => {
      onLoadComplete?.();
    }, 1900 + 400); // ← adjust this gap (ms)

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(textTimer);
      clearTimeout(navTimer);
    };
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

            <clipPath id="waveMask">
              <path d="M 0 100 Q 20 70, 40 60 T 80 20 T 100 0 L 100 100 Z" />
            </clipPath>
          </defs>

          {/* Video */}
          <foreignObject
            width="100"
            height="100"
            clipPath="url(#waveMask)"
            className={`transition-opacity duration-1000 ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/media/About-EverydayStrange.jpg" // ← replace with your image path
              alt="Hero Background"
              className="w-full h-full object-cover opacity-80 transition-opacity duration-1000"
              style={{
                // optional: maintain the same fade-in timing as the video
                opacity: showVideo ? 0.8 : 0,
              }}
            />
            {/* <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
              xmlns="http://www.w3.org/1999/xhtml"
            >
              <source src="/videos/FFCh3VR-Card-slow.mp4" type="video/mp4" />
            </video> */}
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

        {/* Wave-side grouped text */}
        <div className="absolute inset-y-0 left-[4vw] z-10 pointer-events-none">
          <div className="flex h-full items-center translate-y-[-9rem] max-w-[50vw] md:max-w-[40vw]">
            <div
              className={`flex flex-col items-start gap-4 transition-opacity duration-1000 ${
                showText ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-3xl md:text-4xl text-primary text-left">
                Romy Aboudarham
              </h1>

              <p className="text-sm md:text-xl text-primary/70 leading-relaxed text-left">
                I work at the intersection of design and engineering to
                prototype and build interactive products. With experience as a
                full-stack engineer and as a design technologist teaching
                advanced prototyping using robotics, immersive, and AI-driven
                tools, my practice focuses on helping teams adopt emerging
                technologies while reducing friction between design intent and
                implementation.
              </p>
            </div>
          </div>
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
