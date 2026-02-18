// FeaturedCard.jsx
import React from "react";

const FeaturedCard = ({ href, tag, imageSrc, imageAlt, className = "" }) => {
  return (
    <a
      href={href}
      className={`group relative aspect-[5/3] overflow-hidden border border-primary/10 shadow-md hover:shadow-xl transition ${className}`}
    >
      {/* Tag */}
      <div className="uppercase  absolute top-3 left-3 z-10 bg-primary text-white px-2 py-1 text-xs sm:text-sm font-semibold shadow-lg">
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
