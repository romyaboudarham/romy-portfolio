export default function Concept() {
    return (
        <section>
          {/* Text Content*/}
          <div>
            <div className="flex justify-center gap-1 w-full mx-auto lg:gap-2">
              <img
                src="/media/projects/ARMixedEmotions/MEgif-1-ezgif.com-video-to-gif-converter.gif"
                alt="MixedEmotions Model"
                className="h-80 w-1/3 min-w-0 object-cover lg:h-[28rem] rounded-md"
              />
              <img
                src="/media/projects/ARMixedEmotions/MEgif-2-ezgif.com-video-to-gif-converter.gif"
                alt="Comforted Model"
                className="h-80 w-1/3 min-w-0 object-cover lg:h-[28rem] rounded-md"
              />
              <img
                src="/media/projects/ARMixedEmotions/MEgif-3-ezgif.com-video-to-gif-converter.gif"
                alt="Fulfilled Model"
                className="h-80 w-1/3 min-w-0 object-cover lg:h-[28rem] rounded-md"
              />
          </div>
          <p className="mt-5 lg:text-xl text-gray-800">
            Users can create an abstract art piece with each of their emotions- scanning a card and then removing it to place the 3D art anywhere in 3D space.
          </p>
          <img
              src="/media/projects/ARMixedEmotions/MEgif-4-ezgif.com-video-to-gif-converter.gif"
              alt="3DArt"
              className="mt-5 mx-auto w-full md:w-[80%] max-w-4xl"
            />
          <p className="mt-5 lg:text-xl text-gray-800">
            When done, users scan the "Breathe" card to sit with all of their emotions and acknowledge the prescence and importance of each one existing together.
          </p>
          <img
            src="/media/projects/ARMixedEmotions/MEgif-5-ezgif.com-video-to-gif-converter.gif"
            alt="Breathe"
            className="mt-5 mx-auto w-full md:w-[80%] max-w-4xl"
          />
          <div className="mt-5 w-full max-w-xl mx-auto   border border-gray-300 overflow-hidden">
            <iframe
              className="w-full h-96 lg:h-[600px] rounded-md"
              src="https://www.youtube.com/embed/-vAeIj_-vVw"
              title="YouTube Video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  