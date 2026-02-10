export default function Concept() {
  return (
    <section>
      {/* Text Content*/}
      <div>
        {/* <div className="text-2xl font-semibold opacity-90">
              Inspiration
            </div>
            <p className="mt-2 lg:text-xl text-gray-800">
            When this project was assigned, I was 6 months into grieving the sudden death of my brother. 
            As more and more time passed, I wrestled with how to share my life with people who never experienced a close, personal loss of this magnitude. 
            </p> */}
        <div className="mt-8 lg:mt-10 text-2xl font-semibold opacity-90">
          Objective
        </div>
        <p className="mt-2 lg:text-xl text-gray-800">
          Design and prototype a human-centered VR experience in Unity that uses
          immersive interaction to explore emotional realities and foster
          empathy.
        </p>
        <div className="mt-8 lg:mt-10 text-2xl font-semibold opacity-90">
          Research
        </div>
        <p className="mt-2 lg:text-xl text-gray-800">
          Researched existing empathy-driven, virtual reality experiences to
          understand different approaches to point of view perspectives and
          engagement.
        </p>
        <img
          src="/media/projects/VR-GriefsShadow/Process/research-inspiration.png"
          alt="Research"
          className="mt-5 mx-auto w-full"
        />
      </div>
    </section>
  );
}
