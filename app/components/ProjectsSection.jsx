"use client"; 
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Link from "next/link";

const projectsData = [
    {
        id: 1,
        title: "Grief's Shadow",
        slug: "griefs-shadow",
        description: "Using VR to build empathy for people processing the loss of someone close to them, experiencing someone's moment-to-moment relationship with grief and how it manifests over time.",
        image: "/media/projects/VR-GriefsShadow/VR-GriefsShadow2.jpg",
        video: "/media/projects/VR-GriefsShadow/GriefsShadow-Room.mp4",
        tag: ["All", "VR"],
    },
    {
        id: 2,
        title: "Ghosts of Irish Hill",
        slug: "ghosts-of-irish-hill",
        description: "Using AR to tell another side of history of a physical site in SF through an AR walking tour.",
        image: "/media/projects/AR-Monument-IrishHill/",
        tag: ["All", "AR"],
    },
    {
        id: 3,
        title: "AR Mixed Emotions Card Deck",
        slug: "ar-mixed-emotions",
        description: "Using AR as a tool to aid in identifying emotions in the body.",
        image: "/media/projects/AR-MixedEmotions/AR-MixedEmotions.jpg",
        tag: ["All", "AR"],
    },
    {
        id: 4,
        title: "Metaverse - Modern Day Impact of Historical Redlining",
        slug: "griefs-shadow",
        description: "",
        image: "/media/projects/Metaverse-Redlining/Metaverse-Census.png",
        tag: ["All", "Unreal 5"],
    },
    {
        id: 5,
        title: "Exhibition - Finn's Fishbowl",
        slug: "griefs-shadow",
        description: "",
        image: "/media/projects/InteractiveStory-FinnsFishbowl/Installation-FinnsFishbowl.jpg",
        tag: ["All", "Exhibitions"],
    },
    {
        id: 6,
        title: "Finn's Fishbowl - Chapter 3",
        slug: "griefs-shadow",
        description: "VR experience made with AFrame designed for an installation",
        image: "/media/projects/VR-AFrame/VR-Aframe.png",
        tag: ["All", "VR"],
    },
    {
        id: 7,
        title: "Arduino Examples & Tutorials",
        slug: "griefs-shadow",
        description: "Designed and executed an Arduino example display for student",
        image: "/media/projects/Arduino-Examples/Arduino-Examples.jpeg",
        tag: ["All", "Arduino"],
    },
    {
        id: 8,
        title: "Handmaid Memorial Plaque",
        slug: "griefs-shadow",
        description: "",
        image: "/media/projects/Memorial-Plaque/Memorial-Plaque.jpg",
        tag: ["All", "Other"],
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
            <h2 className="text-center text-4xl font-bold mt-4 mb-4 md:mb-6">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 py-6">
                {["All", "VR", "AR", "Arduino", "Exhibitions", "Other"].map((category) => (
                    <ProjectTag 
                        key={category}
                        onClick={handleTagChange} 
                        name={category} 
                        isSelected={tag === category} 
                    />
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                {filteredProjects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.slug}`} passHref>
                        <div className="cursor-pointer">
                            <ProjectCard 
                                title={project.title} 
                                description={project.description} 
                                imgUrl={project.image} 
                                videoUrl={project.video}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ProjectsSection;
