import ProjectHero from "@/app/components/ProjectHero";

export default function HeroSection() {
  return (
    <ProjectHero
      title="AR Mixed Emotions Card Deck"
      subtitle="Using Augmented Reality to deepen the way you engage with your emotions."
      description="This is an AR feature added to the Mixed Emotions card deck created by Petra Martin illustrated by Kris Wiltse."
      bgImage="/media/projects/ARMixedEmotions/hero-bg.jpg"
      ctas={[
        {
          label: "Watch Demo",
          action: {
            type: "link",
            url: "https://www.youtube.com/watch?v=-vAeIj_-vVw",
          },
        },
      ]}
      theme={{
        buttonClassName:
          "px-6 py-3 w-full bg-[black]/70 text-white border hover:bg-transparent hover:text-black border-black mt-10 rounded-md transition-colors duration-200",
        videoBorderClassName: "border-[#ff7f02]",
      }}
    />
  );
}
