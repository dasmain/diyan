export type EducationItem = {
  institution: string;
  credential: string;
  period: string;
  detail?: string;
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "Bahria University Karachi",
    credential: "B.S. Software Engineering",
    period: "2020 – 2024",
    detail: "3.81 CGPA · Merit Scholarship (3rd–7th semester)",
  },
  {
    institution: "Bahria College Karsaz",
    credential: "HSSC Pre-Engineering",
    period: "2018 – 2020",
  },
];
