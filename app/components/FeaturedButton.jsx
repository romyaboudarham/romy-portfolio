import React from "react";

const FeaturedButton = ({ href, text }) => {
  return (
    <a
      href={href}
      className="group relative px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors"
    >
      {text}
    </a>
  );
};

export default FeaturedButton;
