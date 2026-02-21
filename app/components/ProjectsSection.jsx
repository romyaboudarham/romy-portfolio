"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import FeaturedSection from "./FeaturedSection";
import FadeIn from "./FadeIn";
import ProjectTagNavBar from "./ProjectTagNavBar";

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");

  return (
    <FadeIn>
      <section id="projects">
        <div className="flex items-center gap-3 mb-3 md:mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-30" />
          <h1 className="text-3xl font-serif font-bold uppercase text-brand md:text-4xl text-center">
            Projects
          </h1>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-30" />
        </div>

        <ProjectTagNavBar tag={tag} onTagChange={setTag} />

        {(tag === "All" || tag === "AI") && (
          <div className="mt-3 hidden md:block">
            <FeaturedSection />
          </div>
        )}

        <div className="mx-auto grid md:grid-cols-2 gap-2 mt-6">
          {(tag === "All"
            ? projectsData
            : projectsData.filter((project) => project.tag.includes(tag))
          )
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((project) => {
              if (project.featured) {
                return (
                  <div key={project.id} className="md:hidden">
                    <ProjectLink project={project} />
                  </div>
                );
              }
              return <ProjectLink key={project.id} project={project} />;
            })}
        </div>
      </section>
    </FadeIn>
  );
}

function ProjectLink({ project }) {
  let href = "";
  if (project.title === "Finn's Fishbowl - Immersive, Interactive Exhibit") {
    href = "/projects/finns-fishbowl#esp32";
  } else if (!project.slug && project.url) {
    href = project.url;
  } else {
    href = `/projects/${project.slug}`;
  }

  return (
    <>
      <Link href={href} className="hidden md:block">
        <div className="cursor-pointer mb-5 lg:mb-0">
          <ProjectCard
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            techStack={project.techStack}
            videoUrl={project.video}
            url={href}
          />
        </div>
      </Link>

      <div className="md:hidden mb-5">
        <ProjectCard
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          techStack={project.techStack}
          videoUrl={project.video}
          url={href}
        />
      </div>
    </>
  );
}
