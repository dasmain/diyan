export type AchievementItem = {
  label: string;
  detail: string;
  icon: "Award" | "GraduationCap" | "Star";
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    label: "Web Development Certification",
    detail: "Professional certification in web development",
    icon: "Award",
  },
  {
    label: "Merit Scholarship",
    detail: "Bahria University, 3rd through 7th semester",
    icon: "GraduationCap",
  },
  {
    label: "3.81 CGPA",
    detail: "B.S. Software Engineering academic distinction",
    icon: "Star",
  },
];
