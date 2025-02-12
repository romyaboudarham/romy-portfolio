export default function InteractionDesign() {
    return (
      <section className="mt-8 lg:mt-10">
        <h2 className="text-2xl font-semibold opacity-90 mb-6">
          Interaction Design & Technical Implementation
        </h2>
  
        <div className="space-y-6 lg:space-y-2">
  
          {/* Row 1: Image + GitHub (Left) | Paragraph (Right) */}
          <div className="flex flex-col md:flex-row gap-2 lg:gap-6 items-center">
            {/* Image + GitHub */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                src="/media/projects/VR-GriefsShadow/Interaction-Voicemail-DataChange.gif"
                alt="Interaction 1"
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl"
              />
              <h2 className="text-xl opacity-90 mt-2">Day Counter</h2>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2">
              <p className="text-md lg:text-lg text-gray-600">
                A date counter continuously increases while the outpouring of support diminishes.
                <br /><br />
                Using collision and trigger button logic in Unity, I played a timeline triggering audio, post-processing effects, 
                object translation, and a script that faded part of the photo out.
              </p>
              <a
                href="https://github.com/yourusername/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center text-blue-600 hover:underline"
              >
                <img src="/media/github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" />
                C# Script for Day Counter
              </a>
            </div>
          </div>
  
          {/* Row 2: Paragraph (Left) | Image + GitHub (Right) */}
          <div className="flex flex-col-reverse md:flex-row gap-2 lg:gap-6 items-center">
            {/* Text */}
            <div className="w-full md:w-1/2">
              <p className="text-md lg:text-lg text-gray-600">
                I needed to introduce who the shadow character is and get users to experience how grief can hit hardest in the morning.
                I achieved this with a photo on the bedside table that fades out when the alarm clock is snoozed.
                <br /><br />
                Using collision and trigger button logic in Unity, I played a timeline triggering audio, post-processing effects, 
                object translation, and a script that faded part of the photo out.
              </p>
              <a
                href="https://github.com/yourusername/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center text-blue-600 hover:underline"
              >
                <img src="/media/github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" />
                C# Script for Photo Fade Out
              </a>
            </div>
            {/* Image + GitHub */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                src="/media/projects/VR-GriefsShadow/Room-Collision-Timeline.gif"
                alt="Interaction 2"
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl"
              />
              <h2 className="text-xl opacity-90 mt-2">Collision Timeline Trigger</h2>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  