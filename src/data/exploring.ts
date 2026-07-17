export type ExploringItem = {
  title: string;
  description: string;
  icon: "Brain" | "FileCode";
  linkKey?: "httpQueryRfc";
};

export const EXPLORING: ExploringItem[] = [
  {
    title: "RAG Systems",
    description:
      "Production-grade retrieval pipelines and context-aware AI features, aligned with stock-trading and knowledge workloads at VinnCorp.",
    icon: "Brain",
  },
  {
    title: "OWASP Secure Coding Practices",
    description:
      "Exploring the OWASP Secure Coding Practices and its implications for secure coding practices.",
    icon: "FileCode",
  },
];
