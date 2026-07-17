import type { LinkKey } from "./links";

export type OpenSourceItem = {
  name: string;
  description: string;
  stack: string[];
  linkKey: LinkKey;
};

export const OPEN_SOURCE: OpenSourceItem[] = [
  {
    name: "NestJS API Boilerplate",
    description:
      "Starter template with auth, validation, and clean architecture. A reusable base for NestJS APIs.",
    stack: ["NestJS", "TypeScript", "Passport", "Stripe", "PostgreSQL"],
    linkKey: "nestjsBoilerplate",
  },
  {
    name: "Saucy Dark VSCode Theme",
    description:
      "A dark theme for VSCode that incorporates cyberpunk vibes.",
    stack: ["VSCode", "Theme", "JSON"],
    linkKey: "themeLink",
  },
  {
    name: "Highlight Unused CSS",
    description:
      "Highlight unused CSS Global Classes in your files or project.",
    stack: ["VSCode", "Extension", "TypeScript"],
    linkKey: "highlightUnusedCss",
  },
];
