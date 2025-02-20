export default function Ch3VR() {
  const vrUrl = "https://romyaboudarham.github.io/finn-s-fishbowl/chapter-3/";

  const handleOpenVR = () => {
    window.open(vrUrl, "_blank");
  };

  return (
    <section>
      <div>
        <div className="text-2xl font-semibold opacity-90">Try it yourself!</div>
        <p className="mt-2 lg:text-xl text-gray-800">
          Click and drag the mouse to look around.
        </p>
      </div>

      {/* VR iFrame with Fullscreen Button */}
      <div className="mt-4 w-full h-[600px] relative">
        <iframe
          src={vrUrl}
          className="w-full h-full rounded-md border-none"
          allowFullScreen
        ></iframe>

        {/* Fullscreen Button */}
        <button
          onClick={handleOpenVR}
          className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-sm rounded-md transition hover:bg-gray-800"
        >
          Open in New Tab
        </button>
      </div>

      {/* GitHub Link */}
      <div className="mt-4 flex justify-center items-center">
        <img src="/media/github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" />
        <a
          href="https://github.com/romyaboudarham/finn-s-fishbowl/tree/main/chapter-3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Explore the code on GitHub
        </a>
      </div>
    </section>
  );
}