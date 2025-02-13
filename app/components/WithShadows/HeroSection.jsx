import { useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";

export default function HeroSection() {
  // Video States
  const [videoUrl, setVideoUrl] = useState(null);
  const [fadeClass, setFadeClass] = useState("opacity-0");

  const handleWatchDemo = () => {
    setVideoUrl(
      "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/griefs-shadow-demo-qxXFnmlF6amyNoLCxo54Y8eR4GvhWu.mp4"
    );
    setFadeClass("opacity-100");
  };

  const handleWatchFull = () => {
    setVideoUrl(
      "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/FinalExperience-1d0HQfB3BhD8Qn3gvc1dtpcynj1iBE.mp4"
    );
    setFadeClass("opacity-100");
  };

  const handleVideoEnd = () => {
    setFadeClass("opacity-0");
    setTimeout(() => {
      setVideoUrl(null);
    }, 500);
  };

  const handleBackClick = () => {
    setFadeClass("opacity-0");
    setTimeout(() => {
      setVideoUrl(null);
    }, 500);
  };

  return (
    <section
      className="h-[100dvh] bg-black relative flex items-center justify-center text-center px-4 lg:px-12 overflow-hidden"
    >
      {videoUrl ? (
        <>
          {/* Back Arrow in Top Left */}
          <div
            onClick={handleBackClick}
            className="absolute top-4 left-4 z-20 text-white cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8" />
          </div>
          <video
            src={videoUrl}
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
            <div className="p-3 lg:p-5 text-white bg-[white]/20 backdrop-blur-lg shadow-xl text-center rounded-md">
              <div className="mt-3 lg:mt-5 text-5xl lg:text-6xl opacity-90" style={{ fontFamily: 'Londrina Outline, cursive' }}>
                With Shadows
              </div>
              <p className="mt-3 lg:mt-5 text-lg lg:text-2xl">
                An Immersive Virtual Reality Experience about Grieving the Loss of a Loved One
              </p>
              <p className="mt-3 mb-3 lg:mb-5 lg:mt-5 text-base lg:text-xl opacity-80">
              Utilizing VR to foster empathy and understanding for those navigating the loss of a loved one by immersing users in the evolving, moment-to-moment experience of grief. 
              Designed as a therapeutic tool for processing and reflection.
              </p>
            </div>
            {/* Button Below */}
            <div className="mt-3 lg:mt-10 flex flex-col justify-center items-center w-[150px] mx-auto">
              <button
                onClick={handleWatchDemo}
                className="px-6 py-3 w-full bg-transparent text-white hover:bg-[#cd5cc4]
                hover:text-white border border-[#cd5cc4] mt-3 rounded-md"
              >
                Watch Demo
              </button>
              <button
                onClick={handleWatchFull}
                className="px-6 py-3 w-full bg-transparent text-white hover:bg-[#cd5cc4]
                hover:text-white border border-[#cd5cc4] mt-3 lg:mt-5 rounded-md"
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
  );
}
