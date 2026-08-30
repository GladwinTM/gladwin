export type Project = {
  title: string;
  category: string;
  description: string;
  accent: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    title: "RIYA OILS",
    category: "E-commerce platform",
    description:
      "A production-ready e-commerce platform built for real-world products, orders, and customer workflows.",
    accent: "from-[#2d2d2d] to-[#818181]",
    liveUrl: "https://riyaoils.netlify.app/",
  },

  {
    title: "COURSEREV",
    category: "Professional work · AI / Voice",
    description:
      "AI-powered booking platform featuring voice-agent workflows, booking automation, and complex business logic.",
    accent: "from-[#938a7c] to-[#d6d1c9]",
    liveUrl: "https://courserev.ai/voice-concierge",
  },

  {
    title: "OTHER GITHUB PROJECTS",
    category: "GITHUB",
    description:
      "A collection of other projects and repositories that showcase my work and contributions on GitHub.",
    accent: "from-[#48555c] to-[#9dabb1]",
    liveUrl: "https://github.com/GladwinTM",
  },
];