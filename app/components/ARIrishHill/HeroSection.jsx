import ProjectHero from "@/app/components/ProjectHero";

export default function HeroSection() {
  return (
    <ProjectHero
      title="Ghosts of Irish Hill"
      subtitle="An Augmented Reality Walking Tour in San Francisco."
      description="Using AR and elements of narrative journalism to tell the forgotten history of Irish Hill, a working class community destroyed for other's growth and capital."
      bgImage="/media/projects/ARIrishHill/serpentine-2-bg.jpg"
      ctas={[
        {
          label: "Watch Demo",
          action: {
            type: "modal",
            videoSrc:
              "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/IrishHill-Demo-b4HjNQ3XUBKAhCvxndmPM5AwdLRAPl.mp4",
          },
        },
        {
          label: "Watch Full",
          action: {
            type: "link",
            url: "https://youtu.be/GFocypMe5fA",
          },
        },
      ]}
    />
  );
}
