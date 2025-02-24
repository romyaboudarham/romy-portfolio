import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected 
    ? "border-[#800000] text-[#800000]"
    : "border-gray-300 text-gray-700 hover:bg-[#800000] hover:text-white"
    return (
        <button className={`${buttonStyles} px-4 py-1 lg:px-6 lg:py-2 text-md lg:text-xl cursor-pointer border rounded-md font-semibold`}
                onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag