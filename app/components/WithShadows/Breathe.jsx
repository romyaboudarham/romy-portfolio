export default function PortfolioGrid() {
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
          <div className="grid grid-cols-3 gap-1 lg:gap-3 lg:w-[90vw] lg:max-w-[900px]">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="bg-gray-100 overflow-hidden aspect-[9/10]">
                <img
                  src={`/media/projects/VR-GriefsShadow/Breathe/gif${index + 1}.gif`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>




      </section>
    );
  }
  