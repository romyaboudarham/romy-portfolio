import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected 
    ? "border-[#ff6562] text-[#ff6562]"
    : "border-gray-300 text-gray-700 hover:bg-[#db5654] hover:text-white"
    return (
        <button className={`${buttonStyles} px-6 py-2 text-xl cursor-pointer border rounded-md font-semibold`}
                onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag