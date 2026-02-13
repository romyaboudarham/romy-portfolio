import ProjectHero from "@/app/components/ProjectHero";

export default function HeroSection() {
  return (
    <ProjectHero
      title="Redlined Neighborhoods in Alameda County"
      description="Leveraging the metaverse as an immersive educational tool to illustrate the present-day effects of historical redlining in Alameda County."
      bgImage="/media/projects/Metaverse-Redlining/metaverse-bg.png"
      ctas={[
        {
          label: "Watch Demo",
          action: {
            type: "link",
            url: "https://www.youtube.com/watch?v=rM7UQ2ZR7Vs",
          },
        },
      ]}
      theme={{
        buttonClassName:
          "px-6 py-3 w-full uppercase bg-[black]/70 backdrop-blur-lg text-white hover:bg-[white]/40 hover:text-black border border-black mt-10 rounded-md transition-colors duration-200",
        videoBorderClassName: "border-[#cd5cc4]",
      }}
    />
  );
}
