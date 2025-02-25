export default function InteractionDesign() {
    return (
      <section className="mt-8 lg:mt-10">
        <h2 className="text-2xl font-semibold opacity-90 mb-6">
          Coding & Interaction Design for Key VR Interactions
        </h2>
  
        <div className="space-y-6 lg:space-y-2">
  
          {/* Row 1: Image + GitHub (Left) | Paragraph (Right) */}
          <div className="flex flex-col md:flex-row gap-2 lg:gap-6 items-center">
            {/* Image + GitHub */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                src="/media/projects/VR-GriefsShadow/Interaction-Voicemail-DataChange.gif"
                alt="Interaction 1"
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl rounded-md"
              />
              <h2 className="text-xl opacity-90 mt-2">Day Counter</h2>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2">
              <p className="text-md lg:text-lg text-gray-600">
                A date counter continuously increases from Day 1 to Month 5. As time passes, the amount of support via texts, calls, gifts, dimishes.
                The purpose of this scene is to place a user in a point of time (5 months after loss) and to introduce an atmosphere of loneliness and disconnect with the world they once knew.
                <br /><br />
                I wrote a script that increments a "count" variable, with conditions that update the words "day" to "month", speed up after x days, and blink effect on day change to draw attention.
              </p>
              <a
                href="https://github.com/romyaboudarham/with-shadows-unity-scripts/blob/main/DayCounter.cs"
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
                The scene begins with an alarm ringing, triggering the instinctive urge to hit snooze. I implemented the snooze interaction using rigid bodies on both the clock and hand, with a box collider on the clock as the trigger. 
                I wrote a script detects the collision between the clock and hand, shutting off the alarm with haptic and audio feedback while prompting the user to click the photo. 
                I wrote another script that fades out part of the photo to introduce loss.
              </p>
              <a
                href="https://github.com/romyaboudarham/with-shadows-unity-scripts/blob/main/HandsCollisionStopAlarm.cs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center text-blue-600 hover:underline"
              >
                <img src="/media/github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" />
                C# Script for On Collision State Change
              </a>
              <a
                href="https://github.com/romyaboudarham/with-shadows-unity-scripts/blob/main/PhotoFadeOut.cs"
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
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl rounded-md"
              />
              <h2 className="text-xl opacity-90 mt-2">OnCollision State Change & OnClick Object Fade Out</h2>
            </div>
          </div>

          {/* Row 3: Image + GitHub (Left) | Paragraph (Right) */}
          <div className="flex flex-col md:flex-row gap-2 lg:gap-6 items-center">
            {/* Image + GitHub */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                src="/media/projects/VR-GriefsShadow/PP-FadeIn.gif"
                alt="Interaction 1"
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl rounded-md"
              />
              <h2 className="text-xl opacity-90 mt-2">Post Processing Effect Fade In</h2>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2">
              <p className="text-md lg:text-lg text-gray-600">
                Gradually increase the intensity of the post processing effect over time to introduce a dissociated, overwhelmed emotional state.
                <br /><br />
                I wrote a script that smoothly transitions the post-processing weight from a starting value to an ending value over time.
              </p>
              <a
                href="https://github.com/romyaboudarham/with-shadows-unity-scripts/blob/main/PostProcessingFadeIn.cs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center text-blue-600 hover:underline"
              >
                <img src="/media/github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" />
                C# Script for Post Processing Fade In
              </a>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  