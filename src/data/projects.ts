export type ProjectItem = {
  name: string;
  description: string;
  stack: string[];
  highlight?: string;
};

export const PROJECTS: ProjectItem[] = [
  {
    name: "Clue By Candlelight",
    description:
      "Interactive narrative game built on a MERN backend with live event features.",
    stack: ["MERN"],
    highlight: "Event-ready gameplay",
  },
  {
    name: "AI Trading Platform",
    description: "AI-powered trading and analysis platform for US stocks and option contracts.",
    stack: [
      "React.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Massive",
      "SnapTrade",
      "Docker",
    ],
    highlight: "AI-powered trading",
  },
  {
    name: "DICOM Viewer",
    description:
      "Medical imaging viewer with cornerstone tooling for radiologist-grade review workflows.",
    stack: ["React", "cornerstoneTools"],
    highlight: "Clinical imaging UX",
  },
  {
    name: "Telehealth Platform",
    description:
      "Real-time teleconsultations with video sessions, patient flows, and persistent records.",
    stack: ["MERN", "Jitsi", "PostgreSQL"],
    highlight: "Live clinical video calling",
  },
  {
    name: "Radiologist Workflow Platform",
    description:
      "End-to-end radiologist platform for case routing, reading, and reporting.",
    stack: ["Next.js", ".NET Core"],
    highlight: "Imaging ops at scale",
  },
  {
    name: "BeFit",
    description:
      "Smart fitness app spanning mobile and web for workout tracking and check-ins.",
    stack: ["Python", "Node.js", "React", "Flutter"],
    highlight: "Fitness simplified",
  },
];
