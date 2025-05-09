import { useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";

export default function HeroSection() {
  // Video States
  const [videoUrl, setVideoUrl] = useState(null);
  const [fadeClass, setFadeClass] = useState("opacity-0");

  const handleWatchDemo = () => {
    setVideoUrl(
      "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/FF-Demo-4vViMCt6Qay7zinwqQkYZHKxBbiYZr.mp4",
      //"https://ucarecdn.com/401e64ee-b566-4d7e-8517-3bda4957475c/",
    );
    setFadeClass("opacity-100");
  };

  const handleWatchFull = () => {
    window.open("https://www.youtube.com/watch?v=Bd18tS8uOhI", "_blank");
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
        <div className="absolute inset-0 z-[70] flex items-center justify-center bg-black">
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
            className={`absolute w-full h-full object-cover border-4 border-[#67ed54] transition-opacity duration-500 ${fadeClass}`}
          />
        </div>
      ) : (
        <>
          {/* Default Hero Section */}
          <img
            src="/media/projects/FinnsFishbowl/hero-bg.jpg"
            alt="Skybox"
            className="absolute w-full h-full object-cover"
          />
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
            {/* Title & Description Box */}
            <div className="p-3 lg:p-5 text-white bg-[white]/20 backdrop-blur-lg shadow-xl text-center rounded-md">
              <div className="mt-3 lg:mt-5 text-5xl lg:text-6xl" style={{ fontFamily: 'Londrina Outline, cursive' }}>
                Finn's Fishbowl
              </div>
              <p className="mt-3 lg:mt-5 text-lg lg:text-2xl">
                An Immersive, Interactive Exhibit
              </p>
              <p className="mt-3 mb-3 lg:mb-5 lg:mt-5 text-base lg:text-xl opacity-80">
              Using various technological mediums such as audio, projections, physical computing, and virtual reality to guide a participant through an emotionally compelling story about visiting our inner child and healing childhood trauma.
              </p>
            </div>
            {/* Button Below */}
            <div className="mt-3 lg:mt-10 flex flex-col justify-center items-center w-[150px] mx-auto">
              <button
                onClick={handleWatchDemo}
                className="px-6 py-3 w-full bg-[white]/20 backdrop-blur-lg shadow-xl text-white
                hover:bg-transparent hover:text-white border border-[#67ed54] mt-3 rounded-md"
              >
                Watch Demo
              </button>
              <button
                onClick={handleWatchFull}
                className="px-6 py-3 w-full bg-[white]/20 backdrop-blur-lg shadow-xl text-white hover:bg-transparent
                hover:text-white border border-[#67ed54] mt-3 lg:mt-5 rounded-md"
              >
                Watch Full
              </button>
            </div>
          </div>
        </>
      )}
      {/* Down Arrow Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-14 h-8 text-[#67ed54]" />
      </div>
    </section>
  );
}
