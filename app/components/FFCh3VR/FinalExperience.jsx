export default function FinalExperience() {
  return (
      <section>
        {/* Text Content*/}
        <div>
          <div className="text-2xl font-semibold opacity-90">
            Try it yourself!
          </div>
          <p className="mt-2 lg:text-xl text-gray-800">
            Click and drag the mouse to look around.
          </p>
        </div>
        
        {/* iFrame Embedding */}
        <div className="mt-4 w-full h-[600px]">
          <iframe 
            src="https://romyaboudarham.github.io/finn-s-fishbowl/chapter-3/" 
            className="w-full h-full rounded-md border-none"
            allowFullScreen
          ></iframe>
        </div>
      </section>
  );
}
