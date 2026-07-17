export const LINKS = {
  github: "https://github.com/dasmain",
  githubRepos: "https://github.com/dasmain?tab=repositories",
  linkedin: "https://www.linkedin.com/in/diyan-alishaikh-8ba62a1b4",
  email: "mailto:shaikhdiyanali01@gmail.com",
  oldPortfolio: "https://diyan-portfolio-sepia.vercel.app/",
  nestjsBoilerplate: "https://github.com/dasmain/nestjs-saas-starter-kit",
  themeLink: "https://github.com/dasmain/saucy-dark-vscode-theme",
  highlightUnusedCss: "https://github.com/dasmain/highlight-unused-css",
  resume: "",
  twitter: "",
  calendly: "",
} as const;

export type LinkKey = keyof typeof LINKS;
