"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Link from "next/link";

const projectsData = [
    {
        id: 1,
        title: "With Shadows",
        slug: "with-shadows",
        description: "Utilizing VR to foster empathy and understanding for those navigating the loss of a loved one by immersing users in the evolving, moment-to-moment experience of grief. Designed as a therapeutic tool for processing and reflection.",
        image: "/media/projects/VR-GriefsShadow/ProjectSection-WithShadow.gif",
        tag: ["All", "VR"],
        techStack: "Unity, C#, Blender"
    },
    {
        id: 2,
        title: "Ghosts of Irish Hill",
        slug: "ghosts-of-irish-hill",
        description: "Using AR to tell another side of history of a physical site in SF through an AR walking tour.",
        image: "/media/projects/AR-Monument-IrishHill/",
        tag: ["All", "AR"],
        techStack: "Unity, Vuforia Plugin, Blender"
    },
    {
        id: 3,
        title: "AR Mixed Emotions Card Deck",
        slug: "ar-mixed-emotions",
        description: "Using AR as a tool to aid in identifying emotions in the body.",
        image: "/media/projects/AR-MixedEmotions/AR-MixedEmotions.jpg",
        tag: ["All", "AR"],
        techStack: "Unity, QuillVR"
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
        slug: "exhibition-finns-fishbowl",
        description: "",
        image: "/media/projects/InteractiveStory-FinnsFishbowl/Installation-FinnsFishbowl.jpg",
        tag: ["All", "Exhibitions"],
        techStack: "A-Frame VR, HTML/CSS/JS, Physical Programming ESP32, Projection Mapping, Blender"
    },
    {
        id: 6,
        title: "Finn's Fishbowl - Chapter 3",
        slug: "finns-fishbowl-ch3",
        description: "VR experience made with AFrame designed for an installation",
        image: "/media/projects/VR-AFrame/VR-Aframe.png",
        tag: ["All", "VR"],
        techStack: "A-Frame VR, HTML/CSS/JS, Blender"
    },
    {
        id: 7,
        title: "Embedded Systems Examples & Tutorials",
        slug: "arduino-examples",
        description: "Designed and executed an Arduino example display for students.",
        image: "/media/projects/Arduino-Examples/Arduino-Examples.jpeg",
        tag: ["All", "Arduino"],
        techStack: "Embedded Systems, C++, Sensor Data"
    },
    {
        id: 8,
        title: "Handmaid Memorial Plaque",
        slug: "handmaid-memorial",
        description: "",
        image: "/media/projects/Memorial-Plaque/Memorial-Plaque.jpg",
        tag: ["All", "Other"],
        techStack: "Metalwork, CNC, Physical Fabrication"
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className="text-black text-center text-4xl font-bold mt-4 mb-4 md:mb-6">
                My Projects
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-2 py-6">
                {["All", "VR", "AR", "Arduino", "Exhibitions", "Other"].map((category) => (
                    <ProjectTag 
                        key={category}
                        onClick={handleTagChange} 
                        name={category} 
                        isSelected={tag === category} 
                    />
                ))}
            </div>
            <div className="mx-auto grid md:grid-cols-2 gap-5">
                {filteredProjects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.slug}`} passHref>
                        <div className="cursor-pointer mb-8 md:mb-0 lg:mb-0">
                            <ProjectCard 
                                title={project.title} 
                                description={project.description} 
                                imgUrl={project.image} 
                                videoUrl={project.video}
                                techStack={project.techStack}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ProjectsSection;
