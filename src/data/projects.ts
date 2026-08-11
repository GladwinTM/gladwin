export type Project = {
  title: string;
  category: string;
  description: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Orbit",
    category: "Product platform",
    description: "A calm, focused workspace for teams shaping ambitious products.",
    accent: "from-[#2d2d2d] to-[#818181]",
  },
  {
    title: "Common Ground",
    category: "Brand experience",
    description: "A flexible digital identity designed for a community with momentum.",
    accent: "from-[#938a7c] to-[#d6d1c9]",
  },
  {
    title: "Relay",
    category: "AI tooling",
    description: "An intelligent dashboard that brings complex operations into view.",
    accent: "from-[#48555c] to-[#9dabb1]",
  },
];
