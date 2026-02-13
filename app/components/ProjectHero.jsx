"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";

const defaultTheme = {
  sectionClassName:
    "h-[100dvh] bg-black relative flex items-center justify-center text-center px-4 lg:px-12 overflow-hidden",
  overlayClassName:
    "p-3 lg:p-5 bg-[black]/70 backdrop-blur-lg shadow-xl text-center rounded-md text-white",
  titleClassName:
    "mt-3 font-serif font-bold uppercase lg:mt-5 text-5xl lg:text-6xl text-white",
  subtitleClassName: "text-white mt-3 lg:mt-5 text-lg lg:text-2xl opacity-80",
  descriptionClassName:
    "text-white mt-3 mb-3 lg:mb-5 lg:mt-5 text-base lg:text-xl opacity-80",
  buttonWrapperClassName:
    "mt-3 lg:mt-10 flex flex-col justify-center items-center w-[150px] mx-auto",
  buttonClassName:
    "px-6 py-3 w-full bg-[black]/70 backdrop-blur-lg text-white uppercase hover:bg-[white]/40 hover:text-black border border-black mt-3 rounded-md transition-colors duration-200",
  downArrowClassName: "",
  videoBorderClassName: "border-[#6e8e76]",
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

  const handleModalClose = () => {
    setFadeClass("opacity-0");
    setTimeout(() => {
      setVideoUrl(null);
    }, 500);
  };

  const handleCtaClick = (cta) => {
    if (cta?.action?.type === "modal" && cta.action.videoSrc) {
      setVideoUrl(cta.action.videoSrc);
      setFadeClass("opacity-100");
      return;
    }

    if (cta?.action?.type === "link" && cta.action.url) {
      window.open(cta.action.url, cta.action.target ?? "_blank");
      return;
    }

    if (typeof cta?.onClick === "function") {
      cta.onClick();
    }
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
              <div className={mergedTheme.titleClassName}>{title}</div>
              {subtitle && (
                <p className={mergedTheme.subtitleClassName}>{subtitle}</p>
              )}
              {description && (
                <p className={mergedTheme.descriptionClassName}>
                  {description}
                </p>
              )}
            </div>
            {ctas.length > 0 && (
              <div className={mergedTheme.buttonWrapperClassName}>
                {ctas.map((cta) => (
                  <button
                    key={cta.label}
                    onClick={() => handleCtaClick(cta)}
                    className={`${mergedTheme.buttonClassName} ${
                      cta.buttonClassName ?? ""
                    }`}
                  >
                    {cta.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ChevronDown className={`w-14 h-8 ${mergedTheme.downArrowClassName}`} />
      </div>
    </section>
  );
}
