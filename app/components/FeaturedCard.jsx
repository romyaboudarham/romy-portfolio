// FeaturedCard.jsx
import React from "react";

const FeaturedCard = ({ href, tag, imageSrc, imageAlt }) => {
  return (
    <a
      href={href}
      className="group relative aspect-[5/3] rounded-lg overflow-hidden border border-primary/10 shadow-md hover:shadow-xl transition"
    >
      {/* Tag */}
      <div className="absolute top-3 left-3 z-10 bg-primary text-white px-2 py-1 text-xs sm:text-sm rounded-md font-semibold shadow-lg">
        {tag}
      </div>

      {/* Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
      />
    </a>
  );
};

export default FeaturedCard;
