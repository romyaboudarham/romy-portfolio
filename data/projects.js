export const projectsData = [
  {
    id: 1,
    title: "Phone a Friend - Gemini AI Lab Assistant",
    slug: "lab-ai-assistant",
    description:
      "A demo for CCA's Hybrid Lab on integrating AI models and databases into physical prototypes.",
    image: "/media/projects/LabAIAssistant/ezgif.com-video-to-gif-converter.gif",
    tag: ["AI", "Physical Computing"],
    techStack: "Gemini AI, Python, Raspberry Pi",
  },
  {
    id: 2,
    title: "With Shadows - Interactive VR Story About Grief",
    slug: "with-shadows",
    description:
      "Utilizing VR to immerse users in the moment to moment reality of someone grieving the loss of a loved one. Designed as a therapeutic tool for learning how to move through grief.",
    image: "/media/projects/VR-GriefsShadow/VR-GriefsShadow.jpg",
    video:
      "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/with-shadow-card-1RrxgJS4seExij3S2xVDFGOUu4vrB5.mp4",
    tag: ["VR"],
    techStack: "Unity, C#, Oculus, Blender",
  },
  {
    id: 3,
    title: "Ghosts of Irish Hill - Augmented Reality Walking Tour",
    slug: "ar-irish-hill",
    description:
      "Using AR and elements of narrative journalism to tell the forgotten history of Irish Hill, a working class community destroyed for other's growth and capital.",
    image: "/media/projects/ARIrishHill/IrishHill-Card.png",
    video:
      "/videos/IrishHill-Card-Reverse.mp4",
    tag: ["AR"],
    techStack: "Unity, Vuforia AR Plugin, Blender",
  },
  {
    id: 4,
    title: "Mixed Emotions Card Deck - Augmented Reality Feature",
    slug: "ar-mixed-emotions",
    description: "Using AR to deepen the way you engage with your emotions.",
    image:
      "/media/projects/ARMixedEmotions/MEgif-2-ezgif.com-video-to-gif-converter.gif",
    video:
      "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/MixedEmotions-Card-U7qFzdKtJKURDuQQeQR19QMIEpIr1G.mp4",
    tag: ["AR"],
    techStack: "Unity, QuillVR, Vuforia AR Plugin",
  },
  {
    id: 5,
    title: "Redlined Neighborhoods in Alameda County - Metaverse",
    slug: "metaverse-redlining",
    description:
      "Leveraging the metaverse as an immersive educational tool to illustrate the present-day effects of historical redlining in Alameda County.",
    image: "/media/projects/Metaverse-Redlining/Metaverse-Census.png",
    tag: ["Unreal 5"],
    techStack:
      "Unreal Engine 5, Blueprint, GIS Data, Cesium Plugin, R Studio",
  },
  {
    id: 6,
    title: "Finn's Fishbowl - Immersive, Interactive Exhibit",
    slug: "finns-fishbowl",
    description:
      "An immersive, interactive story told using various technological mediums an emotionally compelling story about visiting our inner child and healing childhood trauma.",
    image: "/media/projects/FinnsFishbowl/FinnsFishbowl.jpg",
    tag: ["Physical Computing", "Exhibitions"],
    techStack:
      "A-Frame VR, P5.js, Node.js HTML/CSS/JS, Physical Programming ESP32, Projection Mapping, Blender",
  },
  {
    id: 7,
    title: "Finn's Fishbowl - Chapter 3 in Virtual Reality",
    slug: "finns-fishbowl",
    description: "VR immersive story made with AFrame designed for a public exhibit",
    image: "/media/projects/FinnsFishbowl/VR-Aframe.png",
    video:
      "https://oaxvcculx5bxujie.public.blob.vercel-storage.com/FFCh3VR-slow-CdeQzOC0ZZQDiwpiqDywpEv7iWw3Af.mp4",
    tag: ["VR"],
    techStack: "A-Frame VR, HTML/CSS/JS, Blender",
  },
];

export const projectFilters = [
  "All",
  "AI",
  "VR",
  "AR",
  "Physical Computing",
  "Exhibitions",
];

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug);

