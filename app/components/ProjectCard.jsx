import React, { useRef } from 'react';

const ProjectCard = ({ imgUrl, videoUrl, title, description, techStack }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className="overflow-hidden relative group w-full rounded-md">
            {/* Media Section: Video (if available) or Image */}
            <div className="relative h-[400px] md:h-[500px]">
                {videoUrl ? (
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover"
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                ) : (
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${imgUrl})` }}
                    ></div>
                )}
            </div>

            {/* Title and Description for Larger Screens */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full bg-[#181818] bg-opacity-60 text-white px-4 py-3 text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h5 className="text-lg font-semibold mb-1">{title}</h5>
                <p className="text-sm">{description}</p>
                <div className="mt-2 text-sm border-t border-gray-400 pt-2">
                    <strong>Tech Stack:</strong> {techStack}
                </div>
            </div>

            {/* Title and Description for Mobile */}
            <div className="md:hidden mt-3 text-black">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-md">{description}</p>
                <div className="block md:hidden mt-2 text-sm text-gray-600 border-t border-gray-300 pt-2">
                    <strong>Tech Stack:</strong> {techStack}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
