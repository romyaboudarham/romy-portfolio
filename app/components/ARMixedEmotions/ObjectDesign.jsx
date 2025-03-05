export default function Concept() {
  return (
    <section className="mt-8 lg:mt-10">
      {/* Text Content */}
      <div className="text-2xl font-semibold opacity-90">3D Model Design</div>
      <p className="mt-2 lg:text-xl text-gray-800">
        Using Quill VR by Smoothstep, I drew and animated in 3D space and then
        imported the models into Unity. The results were an extension of the
        original card.
      </p>

      {/* Image Row */}
      <div className="mt-5 flex gap-4 overflow-x-auto">
        <img
          src="/media/projects/VR-GriefsShadow/Process/mixedemotions-model.png"
          alt="MixedEmotions Model"
          className="w-1/3 flex-shrink-0"
        />
        <img
          src="/media/projects/VR-GriefsShadow/Process/comforted-model.png"
          alt="Comdorted Model"
          className="w-1/3 flex-shrink-0"
        />
        <img
          src="/media/projects/VR-GriefsShadow/Process/fulfilled-model.png"
          alt="Fulfilled Model"
          className="w-1/3 flex-shrink-0"
        />
      </div>
    </section>
  );
}
