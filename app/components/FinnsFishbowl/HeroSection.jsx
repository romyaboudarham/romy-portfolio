import ProjectHero from "@/app/components/ProjectHero";

export default function HeroSection() {
  return (
    <ProjectHero
      title="Finn's Fishbowl"
      subtitle="An Immersive, Interactive Exhibit"
      description="Using various technological mediums such as audio, projections, physical computing, and virtual reality to guide a participant through an emotionally compelling story about visiting our inner child and healing childhood trauma."
      bgImage="/media/projects/FinnsFishbowl/hero-bg.jpg"
      ctas={[
        {
          label: "Watch Demo",
          buttonClassName:
            "bg-[white]/20 backdrop-blur-lg shadow-xl text-white hover:bg-transparent hover:text-white border border-[#67ed54]",
          action: {
            type: "modal",
            videoSrc:
              "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/FF-Demo-4vViMCt6Qay7zinwqQkYZHKxBbiYZr.mp4",
          },
        },
        {
          label: "Watch Full",
          buttonClassName:
            "bg-[white]/20 backdrop-blur-lg shadow-xl text-white hover:bg-transparent hover:text-white border border-[#67ed54]",
          action: {
            type: "link",
            url: "https://www.youtube.com/watch?v=Bd18tS8uOhI",
          },
        },
      ]}
      theme={{
        overlayClassName:
          "p-3 lg:p-5 text-white bg-[white]/20 backdrop-blur-lg shadow-xl text-center rounded-md",
        titleClassName:
          "mt-3 lg:mt-5 font-serif font-bold uppercase text-5xl lg:text-6xl text-white",
        subtitleClassName: "text-white mt-3 lg:mt-5 text-lg lg:text-2xl",
        descriptionClassName:
          "text-white mt-3 mb-3 lg:mb-5 lg:mt-5 text-base lg:text-xl opacity-80",
        buttonClassName:
          "px-6 py-3 w-full uppercase mt-3 rounded-md transition-colors duration-200",
        videoBorderClassName: "border-[#67ed54]",
        downArrowClassName: "text-[#67ed54]",
      }}
    />
  );
}
