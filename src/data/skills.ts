export type SkillGroup = {
  category: string;
  skills: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Angular", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Express", "Python", ".NET Core", "Spring Boot"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud / DevOps",
    skills: ["AWS", "Docker", "Git", "Render"],
  },
  {
    category: "AI",
    skills: ["RAG", "Agentic AI", "Tool Calling Models"],
  },
  {
    category: "Integrations",
    skills: ["Stripe", "DICOM", "HL7", "FHIR", "PayPal", "Massive", "SnapTrade"],
  },
];
