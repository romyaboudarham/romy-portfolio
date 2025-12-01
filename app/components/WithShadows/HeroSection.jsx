import ProjectHero from "@/app/components/ProjectHero";

export default function HeroSection() {
  return (
    <ProjectHero
      title="With Shadows"
      subtitle="An Immersive Virtual Reality Experience about Grieving the Loss of a Loved One"
      description="Utilizing VR to immerse users in the moment to moment reality of someone grieving the loss of a loved one. Designed as a therapeutic tool for learning how to move through grief."
      bgImage="/media/projects/VR-GriefsShadow/WithShadow-SkyboxBG.gif"
      ctas={[
        {
          label: "Watch Demo",
          buttonClassName:
            "bg-transparent text-white hover:bg-[#cd5cc4] hover:text-white border border-[#cd5cc4]",
          action: {
            type: "modal",
            videoSrc:
              "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/griefs-shadow-demo-7R4Uz1Nd8rrLCsUHE5EtXxshGSJSHf.mp4",
          },
        },
        {
          label: "Watch Full",
          buttonClassName:
            "bg-transparent text-white hover:bg-[#cd5cc4] hover:text-white border border-[#cd5cc4]",
          action: {
            type: "link",
            url: "https://www.youtube.com/watch?v=iVC51VEGku4",
          },
        },
      ]}
      theme={{
        overlayClassName:
          "p-3 lg:p-5 text-white bg-[white]/20 backdrop-blur-lg shadow-xl text-center rounded-md",
        titleClassName: "mt-3 lg:mt-5 text-5xl lg:text-6xl text-white",
        subtitleClassName: "text-white mt-3 lg:mt-5 text-lg lg:text-2xl",
        descriptionClassName:
          "text-white mt-3 mb-3 lg:mb-5 lg:mt-5 text-base lg:text-xl opacity-80",
        buttonClassName:
          "px-6 py-3 w-full mt-3 rounded-md transition-colors duration-200",
        videoBorderClassName: "border-[#cd5cc4]",
        downArrowClassName: "text-[#cd5cc4]",
      }}
    />
  );
}
