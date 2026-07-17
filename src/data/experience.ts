export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  companyUrl?: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "VinnCorp",
    role: "Software Engineer",
    period: "Apr 2026 – Present",
    location: "Karachi, Pakistan",
    highlights: [
      "Designing and Architecting software at scale.",
      "Building AI-powered stock trading experiences with retrieval-augmented generation for context-aware decisions.",
      "Shipping full-stack features with React and NestJS across low-latency product surfaces.",
      "Collaborating on agentic AI workflows and tool-calling models for production use.",
    ],
  },
  {
    company: "Nixaam LLC",
    role: "Full Stack Developer",
    period: "Jul 2024 – Apr 2026",
    location: "Hybrid",
    highlights: [
      "Delivered a DICOM viewer and radiologist workflow platform for medical imaging review.",
      "Built a telehealth stack with MERN and Jitsi for real-time clinical consultations.",
      "Implemented medical records storage on AWS S3 and LIS integrations using HL7/FHIR.",
      "Contributed to hospital inventory flows with RFID-backed tracking.",
    ],
  },
  {
    company: "Dijinx",
    role: "MERN Stack Developer",
    period: "Sep 2023 – Jul 2024",
    location: "Remote",
    highlights: [
      "Developed Clue By Candlelight, an interactive game experience on the MERN stack.",
      "Built and maintained the Scavenger Hunt Server powering live event gameplay.",
    ],
  },
  {
    company: "SoftFit Technologies",
    role: "ASP.NET Intern",
    period: "Jul 2023 – Sep 2023",
    location: "On Site",
    highlights: [
      "Contributed to an HR Management System using ASP.NET and related .NET tooling.",
      "Supported feature delivery and bug fixes in a production-oriented internship cadence.",
    ],
  },
];
