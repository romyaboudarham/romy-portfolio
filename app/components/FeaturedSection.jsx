"use client";

import React from "react";
import FeaturedCard from "./FeaturedCard";
import FeaturedButton from "./FeaturedButton";

const cards = [
  {
    href: "https://curiosity-cards-app.vercel.app/",
    tag: "Try it!",
    imageSrc: "/media/try-it-icon.png",
    imageAlt: "Flashcards Design System",
  },
  {
    href: "https://www.figma.com/design/55ZZEpMgA8KUjIGNv4ZcJd/CuriosityCards?node-id=38-186&p=f&t=OSu5QiVIoKBdSbnt-0",
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
  const desktopHeight = 600; // Change this one number to adjust height

  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          .featured-video {
            height: ${desktopHeight}px !important;
          }
          .featured-cards {
            height: ${desktopHeight}px !important;
          }
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-[3.3fr_1fr] gap-6">
        {/* Left Column: YouTube Video */}
        <div className="featured-video w-full shadow-xl border border-primary/10 overflow-hidden relative h-[350px] md:h-[450px]">
          <div className="absolute top-4 left-4 z-10 text-white bg-primary border border-primary px-2 py-1 text-sm md:text-lg font-semibold shadow-lg">
            Featured
          </div>

          <iframe
            src="https://www.youtube.com/embed/enKps2PSPw4?autoplay=0&mute=0"
            title="Featured Project"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Right Column: Mobile buttons / Desktop cards */}
        <div className="featured-cards flex flex-row justify-center gap-3 lg:flex-col lg:gap-4">
          {/* Mobile: Show buttons */}
          {cards.map((card, index) => (
            <div key={index} className="lg:hidden">
              <FeaturedButton href={card.href} text={card.tag} />
            </div>
          ))}

          {/* Desktop: Show full cards */}
          {cards.map((card, index) => (
            <FeaturedCard
              key={`card-${index}`}
              href={card.href}
              tag={card.tag}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              className="hidden lg:block flex-1"
            />
          ))}
        </div>
      </div>
    </>
  );
}
