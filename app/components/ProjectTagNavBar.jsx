"use client";
import { useState, useEffect, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { projectFilters } from "@/data/projects";

export default function ProjectTagNavBar({ tag, onTagChange }) {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const originalOffset = useRef(null);

  useEffect(() => {
    if (navRef.current && originalOffset.current === null) {
      originalOffset.current =
        navRef.current.getBoundingClientRect().top + window.scrollY;
    }

    const handleScroll = () => {
      if (originalOffset.current === null) return;
      setIsSticky(window.scrollY >= originalOffset.current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ height: isSticky ? `${navRef.current?.offsetHeight}px` : 0 }} />
      <div
        ref={navRef}
        className={`flex flex-wrap justify-center items-center gap-2 md:mb-5 md:gap-3 py-3 bg-white transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 w-full shadow-md z-50" : ""
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
