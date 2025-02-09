import { useRef, useState } from "react"
import { ChevronDown, ChevronLeft } from 'lucide-react';

export default function HeroSection() {
    // Track touch positions
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    // Handle touch events
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (!isPlaying) return; // Ignore swipe if the video is not playing
    
        const deltaX = touchStartX.current - touchEndX.current;
        if (deltaX > 100) handleBackClick();
    };

    // Video Functions
    // Declare state and functions
    const [isPlaying, setIsPlaying] = useState(false);
    const [fadeClass, setFadeClass] = useState("opacity-0");

    const handleWatchDemo = () => {
      // Start playing: mount video (initially transparent)
      setIsPlaying(true);
      // Slight delay to trigger the transition
      setTimeout(() => {
        setFadeClass("opacity-100");
      }, 50);
    };
  
    const handleVideoEnd = () => {
      // Fade out before unmounting the video
      setFadeClass("opacity-0");
      setTimeout(() => {
        setIsPlaying(false);
      }, 500); // 500ms matches the duration-500 class below
    };
  
    const handleBackClick = () => {
      // Fade out before returning to default view
      setFadeClass("opacity-0");
      setTimeout(() => {
        setIsPlaying(false);
      }, 500);
    };
    return (
        <section
        className="h-[100dvh] bg-black relative flex items-center justify-center text-center px-4 lg:px-12 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
        {isPlaying ? (
            <>
            {/* Back Arrow in Top Left */}
            <div
                onClick={handleBackClick}
                className="absolute top-4 left-4 z-20 text-white cursor-pointer"
            >
                <ChevronLeft className="w-8 h-8" />
            </div>
            <video
                src="/media/projects/VR-GriefsShadow/griefs-shadow-demo.mp4"
                autoPlay
                controls
                onEnded={handleVideoEnd}
                className={`absolute w-full h-full object-cover border-4 border-[#cd5cc4] transition-opacity duration-500 ${fadeClass}`}
            />
            </>
        ) : (
            <>
            {/* Default Hero Section */}
            <img 
                src="/media/projects/VR-GriefsShadow/WithShadow-SkyboxBG.gif" 
                alt="Skybox" 
                className="absolute w-full h-full object-cover"
            />
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
                {/* Title & Description Box */}
                <div className="p-3 lg:p-5 text-white bg-[white]/20 backdrop-blur-lg shadow-xl text-center">
                <div className="mt-3 lg:mt-5 text-4xl lg:text-6xl font-bold opacity-90">
                    With Shadows
                </div>
                <p className="mt-3 lg:mt-5 text-lg lg:text-2xl">
                    An Immersive Virtual Reality Experience about Grieving the Loss of a Loved One
                </p>
                <p className="mt-3 mb-3 lg:mb-5 lg:mt-5 text-base lg:text-xl opacity-80">
                    Using VR to build empathy for people processing the loss of someone close to them by experiencing someone's moment-to-moment relationship with grief over time. Serves as a therapeutic tool for processing.
                </p>
                </div>
                 {/* Button Below */}
                <div className="mt-3 lg:mt-10 flex flex-col justify-center items-center w-[150px] mx-auto">
                <button
                    onClick={handleWatchDemo}
                    className="px-6 py-3 w-full bg-transparent text-white hover:bg-[#cd5cc4]
                    hover:text-white border border-[#cd5cc4] mt-3"
                >
                    Watch Demo
                </button>
                <button
                    onClick={handleWatchDemo}
                    className="px-6 py-3 w-full bg-transparent text-white hover:bg-[#cd5cc4]
                    hover:text-white border border-[#cd5cc4] mt-3 lg:mt-5"
                >
                    Watch Full
                </button>
                </div>
            </div>
            </> 
        )}
        {/* Down Arrow Icon */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-14 h-8 text-[#cd5cc4]" />
            </div>
        </section>
    )
}
