import React, { useRef, useEffect } from "react";

import Divider from "./Divider";

const ProjectCard = ({ imgUrl, videoUrl, title, description, techStack }) => {
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

  return (
    <div
      className="overflow-hidden relative group w-full rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[300px] md:h-[400px]">
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
          <img
            src={imgUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      <div className="hidden md:block absolute bottom-0 left-0 w-full bg-[#181818] bg-opacity-80 text-white px-4 py-3 text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <h5 className="text-lg font-semibold mb-1">{title}</h5>
        <p className="text-sm [&_a]:underline [&_a]:hover:opacity-70">
          {description}
        </p>
        <div className="mt-2 text-sm border-t border-gray-400 pt-2">
          <strong>Tech Stack:</strong> {techStack}
        </div>
      </div>

      <div className="md:hidden mt-3 text-black">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-md">{description}</p>
        <div className="block md:hidden mt-2 text-sm text-gray-600 border-t border-gray-300 pt-2">
          <strong>Tech Stack:</strong> {techStack}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
