export default function VideoDemo({ videoUrl }) {
  return (
    <section className="mx-3 my-6 lg:my-8 lg:mx-[180px]">
      <div className="relative w-full aspect-video">
        <iframe
          src={videoUrl}
          title="Demo video"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
