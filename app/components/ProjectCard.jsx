"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProjectCard = ({
  imgUrl,
  videoUrl,
  title,
  description,
  techStack,
  url,
}) => {
  const router = useRouter();
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    // Restart playback when the video source changes
    videoRef.current.load();
    videoRef.current.play().catch(() => {
      /* autoplay might be blocked; ignore */
    });
  }, [videoUrl]);

  const handleMouseEnter = () => {
    if (videoRef.current && videoUrl) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && videoUrl) {
      videoRef.current.play().catch(() => {
        /* autoplay might be blocked; ignore */
      });
    }
  };

  const handleImageClick = () => {
    if (!url) return;

    // Check if it's an external URL
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      // Internal route - use Next.js router
      router.push(url);
    }
  };

  return (
    <div
      className="overflow-hidden relative group w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative h-[300px] md:h-[400px] cursor-pointer"
        onClick={handleImageClick}
      >
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={imgUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
          />
        ) : (
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      <div className="hidden md:flex absolute inset-0 bg-[#181818] bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center px-6">
        <div className="items-start max-w-md">
          <h5 className="text-xl font-serif font-bold uppercase mb-1">
            {title}
          </h5>
          <p className="text-md [&_a]:underline [&_a]:hover:opacity-70">
            {description}
          </p>
          <div className="mt-2 text-md border-t border-gray-400 pt-2">
            <strong>Tech Stack:</strong> {techStack}
          </div>
        </div>
      </div>

      <div className="md:hidden mt-3 text-black">
        <h5 className="text-xl font-serif font-bold uppercase mb-2">{title}</h5>
        <p className="text-md [&_a]:underline [&_a]:hover:opacity-70">
          {description}
        </p>
        <div className="block md:hidden mt-2 text-sm text-gray-600 border-t border-gray-300 pt-2">
          <strong>Tech Stack:</strong> {techStack}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
