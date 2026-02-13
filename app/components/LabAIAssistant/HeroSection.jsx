import ProjectHero from "@/app/components/ProjectHero";

export default function HeroSection() {
  return (
    <ProjectHero
      title="Phone a Friend"
      subtitle="Gemini AI Lab Assistant"
      description="A demo for CCA's Hybrid Lab on integrating AI models and databases into physical prototypes."
      bgImage="/media/projects/LabAIAssistant/bg.jpeg"
      ctas={[
        {
          label: "Watch Demo",
          action: {
            type: "link",
            url: "https://youtu.be/U70IRBNUpqw",
          },
        },
      ]}
      theme={{
        buttonClassName:
          "px-6 py-3 w-full uppercase bg-[black]/70 text-white border hover:bg-transparent hover:text-black border-black mt-10 rounded-md transition-colors duration-200",
      }}
    />
  );
}
