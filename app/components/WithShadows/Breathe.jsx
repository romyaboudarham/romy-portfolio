import { useEffect, useState } from "react";

export default function PortfolioGrid() {
  const [loadedGifs, setLoadedGifs] = useState({});
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    const gifs = [...Array(9)].map((_, index) => `/media/projects/VR-GriefsShadow/Breathe/gif${index + 1}.gif`);
    let loaded = {};
    let count = 0;

    gifs.forEach((gif, index) => {
      const img = new Image();
      img.src = gif;
      img.onload = () => {
        loaded[index] = gif;
        count++;

        if (count === gifs.length) {
          setLoadedGifs(loaded);
          setAllLoaded(true);
        }
      };
    });
  }, []);

  return (
    <section>
      {/* Text Content */}
      <div>
        <p className="mt-2 lg:text-xl text-gray-800">
          This grid captures a profound moment—users, immersed in the VR world, responding to a simple yet powerful prompt: to take a breath.
          In that pause, technology goes beyond simple simulation, guiding real human emotions and bodily awareness.
          This moment reflects my approach to creative technology: crafting empathy-driven experiences that resonate deeply, inviting users not just to engage but to feel, reflect, and heal.
          Through VR, I design spaces where digital and emotional realities intertwine, fostering genuine connection and presence.
        </p>
      </div>

      {/* Grid Content */}
      <div className="mt-8 flex justify-center">
        {!allLoaded ? (
          <p>Loading GIFs...</p> // Temporary loading indicator
        ) : (
          <div className="grid grid-cols-3 gap-1 lg:gap-3 lg:w-[90vw] lg:max-w-[900px]">
            {Object.keys(loadedGifs).map((index) => (
              <div key={index} className="bg-gray-100 overflow-hidden aspect-[9/10]">
                {/* Appends a timestamp to force GIFs to restart and stay in sync */}
                <img
                  src={`${loadedGifs[index]}?t=${Date.now()}`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
