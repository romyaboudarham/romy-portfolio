"use client";
import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Link from "next/link";

const projectsData = [
    {
        id: 1,
        title: "With Shadows - Interactive VR Story About Grief",
        slug: "with-shadows",
        description: "Utilizing VR to immerse users in the moment to moment reality of someone grieving the loss of a loved one. Designed as a therapeutic tool for learning how to move through grief.",
        image: "/media/projects/VR-GriefsShadow/ProjectSection-WithShadow.gif",
        video: "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/with-shadows-project-card-9OsgVvaujPI2DcflfwtpjW4f16C7q1.mp4",
        tag: ["All", "VR"],
        techStack: "Unity, C#, Oculus, Blender"
    },
    {
        id: 2,
        title: "Ghosts of Irish Hill - AR Narrative Journalism",
        slug: "ar-irish-hill",
        description: "Using AR to tell another side of history of a physical site in SF through an AR walking tour.",
        image: "/media/projects/ARIrishHill/irish-hill-photo.jpg",
        tag: ["All", "AR"],
        techStack: "Unity, Vuforia AR Plugin, Blender"
    },
    {
        id: 3,
        title: "AR Mixed Emotions Card Deck",
        slug: "ar-mixed-emotions",
        description: "Using AR as a tool to aid in identifying emotions in the body.",
        image: "/media/projects/ARMixedEmotions/AR-MixedEmotions.jpg",
        tag: ["All", "AR"],
        techStack: "Unity, QuillVR, Vuforia AR Plugin"
    },
    {
        id: 4,
        title: "Metaverse - Modern Day Impact of Historical Redlining",
        slug: "metaverse-redlining",
        description: "",
        image: "/media/projects/Metaverse-Redlining/Metaverse-Census.png",
        tag: ["All", "Unreal 5"],
        techStack: "Unreal Engine 5, Blueprint, GIS Data, Cesium Plugin, R Studio"
    },
    {
        id: 5,
        title: "Exhibition - Finn's Fishbowl",
        slug: "finns-fishbowl",
        description: "An immersive, interactive story told using various technological mediums an emotionally compelling story about visiting our inner child and healing childhood trauma.",
        video: "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/FF-Demo-WoL1pqcFx4acnfukak2ptvN7LrQbW1.mp4",
        tag: ["All", "Physical Prototyping", "Exhibitions"],
        techStack: "A-Frame VR, HTML/CSS/JS, Physical Programming ESP32, Projection Mapping, Blender"
    },
    {
        id: 6,
        title: "Finn's Fishbowl - Chapter 3 in VR",
        slug: "finns-fishbowl",
        description: "VR experience made with AFrame designed for an installation",
        video: "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/FFCh3VR-slow-L4lC7GsHiaWzQX5BNCiQ4ueh5Gafx1.mp4",
        tag: ["All", "VR"],
        techStack: "A-Frame VR, HTML/CSS/JS, Blender"
    },
    {
        id: 7,
        title: "Embedded Systems Examples & Tutorials",
        slug: "arduino-examples",
        description: "Designed and executed an Arduino example display for students.",
        image: "/media/projects/Arduino-Examples/Arduino-Examples.jpeg",
        tag: ["All", "Physical Prototyping"],
        techStack: "Embedded Systems, C++, Sensor Data"
    },
];

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

            if (tagRef.current) {
                if (currentScrollPos > prevScrollPos && currentScrollPos >= originalOffset) {
                    setIsSticky(true);  // Stick when scrolling down past original position
                } else if (currentScrollPos < prevScrollPos && currentScrollPos <= originalOffset) {
                    setIsSticky(false); // Unstick and snap back when scrolling up above original position
                }
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
            <div 
                ref={tagRef} 
                className={`flex flex-wrap justify-center items-center gap-2 py-3 bg-white transition-all duration-300 
                ${isSticky ? "fixed top-0 left-0 w-full shadow-md z-50" : ""}`}
                style={isSticky ? { position: "fixed", top: "0", left: "0", width: "100%", zIndex: 50 } : {}}
            >
                {["All", "VR", "AR", "Physical Prototyping", "Exhibitions"].map((category) => (
                    <ProjectTag 
                        key={category}
                        onClick={handleTagChange} 
                        name={category} 
                        isSelected={tag === category} 
                    />
                ))}
            </div>

            <div className="mx-auto grid md:grid-cols-2 gap-5 mt-6">
                {projectsData
                    .filter((project) => project.tag.includes(tag))
                    .map((project) => (
                        <Link 
                            key={project.id} 
                            href={project.id === 6 ? "/projects/finns-fishbowl#ch3vr" : `/projects/${project.slug}`} 
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