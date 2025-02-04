import React from 'react';

const ProjectCard = ({ imgUrl, videoUrl, title, description }) => {
    return (
        <div className="overflow-hidden relative group w-100">
            {/* Media Section (Video as Default) */}
            <div className="relative h-[400px] md:h-[500px]">
                {videoUrl ? (
                    /* Video Section */
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ) : (
                    /* Image Section */
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${imgUrl})`,
                        }}
                    ></div>
                )}
            </div>

            {/* Combined Title and Description Banner */}
            <div 
                className="absolute bottom-0 left-0 w-full bg-[#181818] bg-opacity-60 text-white px-4 py-3 text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
                {/* Title Section */}
                <h5 className="text-lg font-semibold mb-1">{title}</h5>
                {/* Description Section */}
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
