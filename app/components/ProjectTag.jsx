import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "border-[#800000] text-white bg-[#800000] opacity-"
    : "border-gray-300 text-gray-700 group relative overflow-hidden";

  return (
    <button
      className={`${buttonStyles} px-4 py-1 lg:px-6 lg:py-2 text-md lg:text-xl cursor-pointer border rounded-md font-light transition-colors`}
      onClick={() => onClick(name)}
    >
      {!isSelected && (
        <>
          {/* Top and Left borders with gradient */}
          <span
            className="absolute top-0 left-0 w-0 h-0 overflow-hidden
                        group-hover:w-full group-hover:h-full
                        transition-all duration-500 ease-out"
          >
            <span className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#800000] via-[#800000] to-transparent" />
            <span className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-[#800000] via-[#800000] to-transparent" />
          </span>

          {/* Bottom and Right borders with gradient */}
          <span
            className="absolute bottom-0 right-0 w-0 h-0 overflow-hidden
                        group-hover:w-full group-hover:h-full
                        transition-all duration-500 ease-out"
          >
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-l from-[#800000] via-[#800000] to-transparent" />
            <span className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-t from-[#800000] via-[#800000] to-transparent" />
          </span>
        </>
      )}
      <span className="relative z-10">{name}</span>
    </button>
  );
};

export default ProjectTag;
