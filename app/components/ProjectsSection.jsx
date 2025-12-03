"use client";
import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Link from "next/link";
import { projectsData, projectFilters } from "@/data/projects";

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
                setIsSticky(false);  // Force unstick when scrolling above 50px
            } else if (tagRef.current && currentScrollPos >= originalOffset) {
                setIsSticky(true);   // Stick when scrolling down past original position
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
        <section>
            <div style={{ height: isSticky ? `${tagRef.current?.offsetHeight}px` : "auto" }}></div>

        <div 
            ref={tagRef} 
            className={`flex flex-wrap justify-center items-center gap-2 py-3 bg-white transition-all duration-300 
            ${isSticky ? "fixed top-0 left-0 w-full shadow-md z-50" : ""}`}
            style={{
                padding: "12px 16px", // Keep padding consistent
                width: "100%",        // Ensure it doesn’t shrink
                maxWidth: "100vw",    // Prevents overflow issues
                display: "flex",
                flexWrap: "wrap",     // Ensures wrapping stays the same
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

        <div className="mx-auto grid md:grid-cols-2 gap-5 mt-6">
            {(tag === "All" ? projectsData : projectsData.filter((project) => project.tag.includes(tag)))
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((project) => (
                    <Link 
                        key={project.id} 
                        href={project.id === 7 
                            ? "/projects/finns-fishbowl#ch3vr" 
                            : (project.id === 5 && (tag === "Physical Computing"))
                            ? "/projects/finns-fishbowl#esp32"  // Scroll to #esp32 if id is 4 and tag is "Physical Computing"
                            : `/projects/${project.slug}`}
                        passHref
                        >
                        <div className="cursor-pointer mb-5 lg:mb-0">
                            <ProjectCard 
                                title={project.title} 
                                description={project.description} 
                                imgUrl={project.image} 
                                techStack={project.techStack}
                                videoUrl={project.video}
                            />
                        </div>
                    </Link>
                ))}
        </div>
        </section>
    );
};