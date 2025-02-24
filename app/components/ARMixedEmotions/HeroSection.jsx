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
    <section className="h-[100dvh] bg-black relative flex items-center justify-center text-center px-4 lg:px-12 overflow-hidden">
      {videoUrl ? (
        <div className="absolute inset-0 z-[70] flex items-center justify-center">
          {/* Back Arrow in Top Left */}
          <div
            onClick={handleBackClick}
            className="absolute top-4 left-4 z-[75] text-white cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8" />
          </div>
          {/* Video */}
          <video
            src={videoUrl}
            autoPlay
            controls
            onEnded={handleVideoEnd}
            className={`absolute w-full h-full object-cover border-4 border-[#ff7f02] transition-opacity duration-500 ${fadeClass}`}
          />
        </div>
      ) : (
        <>
          {/* Default Hero Section */}
          <img
            src="/media/projects/ARMixedEmotions/hero-bg.jpg"
            alt="Skybox"
            className="absolute w-full h-full object-cover"
          />
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
            {/* Title & Description Box */}
            <div className="p-3 lg:p-5 bg-[black]/70 backdrop-blur-lg shadow-xl text-center rounded-md">
              <div className="text-white mt-3 lg:mt-5 text-5xl lg:text-6xl" style={{ fontFamily: 'Londrina Outline, cursive' }}>
                AR Mixed Emotions Card Deck
              </div>
              <p className="text-white mt-3 opacity-80 lg:mt-5 text-lg lg:text-2xl">
                Using Augmented Reality to deepen the way you engage with your emotions.
              </p>
              <p className="text-white mt-3 mb-3 lg:mb-5 lg:mt-5 text-base lg:text-xl opacity-80">
                This is an AR feature added to the Mixed Emotions card deck created by Petra Martin illustrated by Kris Wiltse.
              </p>
            </div>
            {/* Button Below */}
            <div className="mt-3 lg:mt-10 flex flex-col justify-center items-center w-[150px] mx-auto">
              <button
                onClick={handleWatchDemo}
                className="px-6 py-3 w-full bg-[black]/70 
                text-white border hover:bg-transparent hover:text-black border-black mt-10 rounded-md"
              >
                Watch Demo
              </button>

            </div>
          </div>
        </>
      )}
      {/* Down Arrow Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-14 h-8" />
      </div>
    </section>
  );
}
