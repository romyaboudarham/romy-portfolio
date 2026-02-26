"use client";
import { useState, useEffect, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { projectFilters } from "@/data/projects";

export default function ProjectTagNavBar({ tag, onTagChange }) {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-px" />
      <div
        className={`sticky top-0 z-50 flex flex-wrap justify-center items-center gap-2 md:gap-3 py-2 backdrop-blur-md border-b transition-colors duration-300 ${
          isSticky
            ? "bg-white/30 border-white/40"
            : "bg-transparent border-transparent"
        }`}
      >
        {projectFilters.map((category) => (
          <ProjectTag
            key={category}
            onClick={onTagChange}
            name={category}
            isSelected={tag === category}
          />
        ))}
      </div>
    </>
  );
}
