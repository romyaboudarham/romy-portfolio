export default function Concept() {
    return (
        <section>
          {/* Text Content*/}
          <div>
            <div className="text-2xl font-semibold opacity-90">
              Inspiration & Objective
            </div>
            <p className="mt-2 lg:text-xl text-gray-800">
              When I design experiences with technology, I'm intentional about defining the role technology plays in the experience.
              I want the technology to deepen a user's experience with the story being told. I also strive to write the story to be emotionally moving, promiting positive social change.
              These design objectives are fundamental to my creative process. To demonstrate that, I took a card deck I've personally used to process my emotions
              and experimented with Augmented Reality to deepen my experience with each emotion card.
            </p>
            <img
                src="/media/projects/ARMixedEmotions/mixed-emotions-deck.png"
                alt="Research"
                className="mt-5 mx-auto w-full md:w-[70%] max-w-4xl"
              />
            <p className="mb-2 text-center text-sm lg:text-md text-gray-600">
              Product image from Mixed Emotions
              <br />
              <a href="https://www.mixed-emotions.com/shopus/second-edition" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                www.mixed-emotions.com
              </a>
            </p>
          </div>
      </section>
    );
  }
  