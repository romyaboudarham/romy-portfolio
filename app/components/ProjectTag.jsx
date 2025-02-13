import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected 
    ? "border-[#ff6562] text-[#ff6562]"
    : "border-gray-300 text-gray-700 hover:bg-[#db5654] hover:text-white"
    return (
        <button className={`${buttonStyles} px-4 py-1 lg:px-6 lg:py-2 text-md lg:text-xl cursor-pointer border rounded-md font-semibold`}
                onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag