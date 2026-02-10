// ProjectGrid.jsx
import React from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedGrid = ({ projects, className = "" }) => {
  return (
    <div
      className={`w-full max-w-5xl mx-auto mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {projects.map((project, index) => (
        <FeaturedCard
          key={index}
          href={project.href}
          tag={project.tag}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
        />
      ))}
    </div>
  );
};

export default FeaturedGrid;
