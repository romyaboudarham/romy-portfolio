"use client";

import React from "react";
import FeaturedCard from "./FeaturedCard";

const cards = [
  {
    href: "https://curiosity-cards-app.vercel.app/",
    tag: "Try it!",
    imageSrc: "/media/try-it-icon.png",
    imageAlt: "Flashcards Design System",
  },
  {
    href: "/projects/flashcards-components",
    tag: "Design System",
    imageSrc: "/media/design-system.png",
    imageAlt: "Reusable React Components",
  },
  {
    href: "https://github.com/romyaboudarham/curiosity-cards-app",
    tag: "Github Repo",
    imageSrc: "/media/github-repo-icon.png",
    imageAlt: "OpenAI API Integration",
  },
];

export default function FeaturedSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3.3fr_1fr] gap-6">
      {/* Left Column: YouTube Video (takes 2/3 of space) */}
      <div className="w-full shadow-xl border border-primary/10 rounded-md overflow-hidden relative">
        {/* Featured Tag */}
        <div className="absolute top-4 left-4 z-10 text-white bg-primary border border-primary px-2 py-1 text-sm md:text-lg rounded-md font-semibold shadow-lg">
          Featured
        </div>

        {/* YouTube Embed */}
        <div className="relative w-full h-[280px] md:h-[503px] lg:h-full lg:min-h-[503px]">
          <iframe
            src="https://www.youtube.com/embed/enKps2PSPw4?autoplay=0&mute=0"
            title="Featured Project"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      {/* Right Column: Vertical Stack of Cards (takes 1/3 of space) */}
      <div className="flex flex-col gap-3">
        {cards.map((card, index) => (
          <FeaturedCard
            key={index}
            href={card.href}
            tag={card.tag}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
