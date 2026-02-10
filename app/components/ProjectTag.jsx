import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-lg lg:text-2xl border-primary font-medium"
    : "text-md lg:text-xl text-gray-700 group relative overflow-hidden";

  return (
    <button
      className={`${buttonStyles} px-2 mx-1 py-1 lg:px-1 lg:py-1 cursor-pointer rounded-md font-light transition-colors`}
      onClick={() => onClick(name)}
    >
      {!isSelected && (
        <>
          <span
            className="absolute bottom-0 left-0 w-0 h-0 overflow-hidden
                        group-hover:w-full group-hover:h-full
                        transition-all duration-500 ease-out"
          >
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-primary to-transparent" />
          </span>
        </>
      )}
      <span className="relative z-10">{name}</span>
    </button>
  );
};

export default ProjectTag;

{
  /* <span
            className="absolute top-0 left-0 w-0 h-0 overflow-hidden
                        group-hover:w-full group-hover:h-full
                        transition-all duration-500 ease-out"
          >
            <span className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-primary to-transparent" />
            <span className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-primary to-transparent" />
          </span>

          <span
            className="absolute bottom-0 right-0 w-0 h-0 overflow-hidden
                        group-hover:w-full group-hover:h-full
                        transition-all duration-500 ease-out"
          >
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-l from-primary via-primary to-transparent" />
            <span className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-t from-primary via-primaryto-transparent" />
          </span> */
}
