"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";

const defaultTheme = {
  sectionClassName:
    "h-[100dvh] bg-black relative flex items-center justify-center text-center px-4 lg:px-12 overflow-hidden",
  overlayClassName:
    "p-3 lg:p-5 bg-[black]/70 backdrop-blur-lg shadow-xl text-center rounded-md text-white",
  titleClassName: "mt-3 lg:mt-5 text-5xl lg:text-6xl text-white",
  subtitleClassName: "text-white mt-3 lg:mt-5 text-lg lg:text-2xl opacity-80",
  descriptionClassName:
    "text-white mt-3 mb-3 lg:mb-5 lg:mt-5 text-base lg:text-xl opacity-80",
  downArrowClassName: "",
};

export default function ProjectHero({
  title,
  subtitle,
  description,
  bgImage,
  bgAlt = "Project hero background",
  ctas = [],
  theme = {},
}) {
  const [videoUrl, setVideoUrl] = useState(null);
  const [fadeClass, setFadeClass] = useState("opacity-0");

  const mergedTheme = {
    ...defaultTheme,
    ...theme,
  };

  return (
    <section className={mergedTheme.sectionClassName}>
      {videoUrl ? (
        <div className="absolute inset-0 z-[70] flex items-center justify-center bg-black">
          <div
            onClick={handleModalClose}
            className="absolute top-4 left-4 z-[75] text-white cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8" />
          </div>
          <video
            src={videoUrl}
            autoPlay
            controls
            onEnded={handleModalClose}
            className={`absolute w-full h-full object-cover border-4 transition-opacity duration-500 ${mergedTheme.videoBorderClassName} ${fadeClass}`}
          />
        </div>
      ) : (
        <>
          <img
            src={bgImage}
            alt={bgAlt}
            className="absolute w-full h-full object-cover"
          />
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
            <div className={mergedTheme.overlayClassName}>
              <div
                className={mergedTheme.titleClassName}
                style={{ fontFamily: "Londrina Outline, cursive" }}
              >
                {title}
              </div>
              {subtitle && (
                <p className={mergedTheme.subtitleClassName}>{subtitle}</p>
              )}
              {description && (
                <p className={mergedTheme.descriptionClassName}>
                  {description}
                </p>
              )}
            </div>
          </div>
        </>
      )}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ChevronDown className={`w-14 h-8 ${mergedTheme.downArrowClassName}`} />
      </div>
    </section>
  );
}
