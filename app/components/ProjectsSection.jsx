"use client";
import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import Link from "next/link";
import { projectsData, projectFilters } from "@/data/projects";
import FeaturedSection from "./FeaturedSection";

const tagDescriptions = {
  All: "A selection my projects designed and built end-to-end",
  AI: "Projects that integrate large language models via API calls to enable intelligent application features.",
  "AR/VR":
    "Augmented and virtual reality experiences for mobile, Oculus headset, and web",
  Prototyping: "Hardware prototypes and interactive installations",
  Exhibitions: "Projects designed for public exhibition spaces.",
};

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const [isSticky, setIsSticky] = useState(false);
  const tagRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [originalOffset, setOriginalOffset] = useState(0);

  useEffect(() => {
    if (tagRef.current) {
      setOriginalOffset(tagRef.current.offsetTop); // Store original position on mount
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 50) {
        setIsSticky(false); // Force unstick when scrolling above 50px
      } else if (tagRef.current && currentScrollPos >= originalOffset) {
        setIsSticky(true); // Stick when scrolling down past original position
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, originalOffset]);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <div
        style={{
          height: isSticky ? `${tagRef.current?.offsetHeight}px` : "auto",
        }}
      ></div>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-30" />
        <h1 className="text-3xl text-brand md:text-4xl text-center min-h-[60px] md:min-h-[72px]">
          Projects
        </h1>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-30" />
      </div>

      <div
        ref={tagRef}
        className={`flex flex-wrap justify-center items-center gap-2 md:gap-3 py-3 bg-white transition-all duration-300 
            ${isSticky ? "fixed top-0 left-0 w-full shadow-md z-50" : ""}`}
        style={{
          padding: "12px 16px", // Keep padding consistent
          width: "100%", // Ensure it doesn’t shrink
          maxWidth: "100vw", // Prevents overflow issues
          display: "flex",
          flexWrap: "wrap", // Ensures wrapping stays the same
          justifyContent: "center", // Keeps items centered
        }}
      >
        {projectFilters.map((category) => (
          <ProjectTag
            key={category}
            onClick={handleTagChange}
            name={category}
            isSelected={tag === category}
          />
        ))}
      </div>

      {/* Tag Description */}
      {/* <div className="flex flex-wrap justify-center items-center">
        <p className="text-gray-600 text-center mt-2">{tagDescriptions[tag]}</p>
      </div> */}

      <div className="hidden md:block">
        <FeaturedSection />
      </div>

      <div className="mx-auto grid md:grid-cols-2 gap-2 mt-6">
        {(tag === "All"
          ? projectsData
          : projectsData.filter((project) => project.tag.includes(tag))
        )
          .slice()
          .sort((a, b) => b.id - a.id)
          .map((project) => {
            // Determine link
            let href = "";
            if (
              project.title === "Finn's Fishbowl - Chapter 3 in Virtual Reality"
            ) {
              href = "/projects/finns-fishbowl#ch3vr";
            } else if (
              project.title ===
                "Finn's Fishbowl - Immersive, Interactive Exhibit" &&
              tag === "Prototyping"
            ) {
              href = "/projects/finns-fishbowl#esp32";
            } else if (!project.slug && project.url) {
              href = project.url;
            } else {
              href = `/projects/${project.slug}`;
            }

            // Add responsive hidden class if featured
            const featuredClass = project.featured ? "md:hidden" : "";

            return (
              <Link key={project.id} href={href} passHref>
                <div className={`cursor-pointer mb-5 lg:mb-0 ${featuredClass}`}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    techStack={project.techStack}
                    videoUrl={project.video}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
}
