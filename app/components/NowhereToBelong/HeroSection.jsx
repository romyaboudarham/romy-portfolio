import ProjectHero from "@/app/components/ProjectHero";

export default function HeroSection() {
  return (
    <ProjectHero
      title="Nowhere to Belong"
      subtitle="Finalist at XRCC Hackathon for Immersive Film & Storytelling Category"
      description="An interactive documentary in VR about Elizaveta, a Ukrainian-born artist living in Berlin, where lifting simple objects opens intimate stories of exile, identity, and belonging."
      bgImage="/media/projects/NowhereToBelong/NowhereToBelong.png"
      ctas={[
        {
          label: "Watch Trailer",
          action: {
            type: "link",
            url:
              "https://vimeo.com/1137496932?fl=pl&fe=vl",
          },
        },
        {
          label: "More Info",
          action: {
            type: "link",
            url: "https://xrcc-public-voting.replit.app/project/2ade272b-bf4f-81c6-8834-f9dde8984a20",
          },
        },
      ]}
      theme={{
        buttonClassName:
          "px-6 py-3 w-full bg-[red]/60 text-white backdrop-blur-lg shadow-xl hover:bg-transparent hover:text-black border border-black mt-10 rounded-md transition-colors duration-200",
      }}
    />
  );
}
