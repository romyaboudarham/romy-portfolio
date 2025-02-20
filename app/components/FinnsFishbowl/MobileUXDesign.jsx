export default function MobileUXDesign() {
  return (
    <section className="mt-8 lg:mt-10">
      {/* Text Content */}
      <div className="text-2xl font-semibold opacity-90">
        Mobile UX Implementation
      </div>
      <p className="mt-2 lg:text-xl text-gray-800">
        Participants open this website on their phone to begin the experience. 
        < br />
        Try for yourself!
      </p>

      {/* Embedded iframe */}
      <div className="mt-6 relative mx-auto border border-black rounded-md overflow-hidden md:w-[70%] max-w-2xl">
        <iframe
          src="https://romyaboudarham.github.io/finn-s-fishbowl/"
          className="w-full h-[650px]"
          allowFullScreen
        />
      </div>

      {/* Centered GitHub Link */}
      <div className="mt-4 flex justify-center items-center">
        <img src="/media/github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" />
        <a
          href="https://github.com/romyaboudarham/finn-s-fishbowl"
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
