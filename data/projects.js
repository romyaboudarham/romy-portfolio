export const projectsData = [
  {
    id: 6,
    title: "Phone a Friend",
    slug: "lab-ai-assistant",
    description:
      "Gemini AI Lab Assistant demo for CCA's Prototyping Lab",
    image: "",
    video: "/videos/GeminiPhone.mp4",
    tag: ["AI", "Prototyping"],
    techStack: "Gemini AI, Python, Raspberry Pi",
  },
  {
    id: 7,
    title: "With Shadows",
    slug: "with-shadows",
    description:
      "An interactive, immersive story using virtual reality to bring users into the perspective of someone grieving a tramatic loss.",
    image: "/media/projects/VR-GriefsShadow/VR-GriefsShadow.jpg",
    video: "/videos/WithShadows-Card.mp4",
    tag: ["AR/VR", "Exhibitions"],
    techStack: "Unity, C#, Oculus, Blender",
  },
   {
    id: 5,
    title: "Interactive Wearables Workshop ",
    slug: "",
    url: "https://github.com/romyaboudarham/M5StickCPlus2-Workshop",
    description:
      "Led a hands-on workshop teaching interaction design and human-centered prototyping during SF Design Week.",
    image: "/media/SFDW_Design workshop event_SU25-001 (1).jpg",
    tag: ["Prototyping"],
    techStack: "Arduino, C++, Github",
  },
  {
    id: 4,
    title: "Ghosts of Irish Hill",
    slug: "ar-irish-hill",
    description:
      "An augmented reality walking tour of the forgotten history of Irish Hill",
    image: "/media/projects/ARIrishHill/IrishHill-Card.png",
    video:
      "/videos/IrishHill-Card-Reverse.mp4",
    tag: ["AR/VR"],
    techStack: "Unity, Vuforia AR Plugin, Blender",
  },
  {
    id: 3,
    title: "Mixed Emotions Card Deck",
    slug: "ar-mixed-emotions",
    description: "An augmented reality card deck feature to deepen your engagement with your emotions.",
    image:
      "/media/projects/ARMixedEmotions/MEgif-2-ezgif.com-video-to-gif-converter.gif",
    video: "/videos/MixedEmotions-Card.mp4",
    tag: ["AR/VR"],
    techStack: "Unity, QuillVR, Vuforia AR Plugin",
  },
  {
    id: 2,
    title: "Redlined Neighborhoods in Alameda County",
    slug: "metaverse-redlining",
    description:
      "An immersive, educational tool to explore the present-day effects of historical redlining in neighborhoods.",
    image: "/media/projects/Metaverse-Redlining/Metaverse-Census.png",
    tag: ["Unreal 5"],
    techStack:
      "Unreal Engine 5, Blueprint, GIS Data, Cesium Plugin, R Studio",
  },
  {
    id: 1,
    title: "Finn's Fishbowl",
    slug: "finns-fishbowl",
    description:
      "An immersive, interactive journey guiding gallery visitors through emotional connection and self-reflection.",
    image: "/media/projects/FinnsFishbowl/FinnsFishbowl.jpg",
    tag: ["Prototyping", "Exhibitions"],
    techStack:
      "A-Frame VR, P5.js, Node.js HTML/CSS/JS, Physical Programming ESP32, Projection Mapping, Blender",
  },
  {
    id: 8,
    title: "Nowhere To Belong",
    slug: "nowhere-to-belong",
    description: "XRCC's Winner for Immersive Film & Storytelling, A virtual reality documentary tracing a Ukrainian refugee's relocation to Berlin",
    image: "/media/projects/NowhereToBelong/NowhereToBelong.png",
    video: "/videos/NowhereToBelongTrailer.mp4",
    tag: ["AR/VR"],
    techStack: "Unity, C#, Git, Blender, Figma, After Effects, Audacity, Gaussian Splats, Volumetric Video",
  },
  {
    id: 9,
    title: "AI Flashcards App",
    slug: "",
    url: "https://www.youtube.com/watch?v=enKps2PSPw4",
    description: (
    <>
      Designed and built an{" "} 
      <a
        href="https://curiosity-cards-app.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-70"
      >
        end-to-end web app
      </a>{" "}
      with a custom semantic{" "}
      <a
        href="https://www.figma.com/design/55ZZEpMgA8KUjIGNv4ZcJd/CuriosityCards?node-id=38-186&t=BhQFCwQnlZEMixgn-1"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-70"
      >
        design system
      </a>{" "}
      , reusable React components, and OpenAI API integration to create dynamic, interactive learning experiences. {" "}
       <a
        href="https://github.com/romyaboudarham/curiosity-cards-app"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-70"
      >
        See Github.
      </a>
    </>
  ),
    image: "/media/curiosity-cards-img.png",
    video: "/videos/CC-short.mp4",
    tag: ["AI"],
    techStack: "Figma, Design Systems, React, Typescript, CSS, NextJS OpenAI API",
    featured: true
  },
];

export const projectFilters = [
  "All",
  "AI",
  "AR/VR",
  "Prototyping",
  "Exhibitions",
];

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug);

