export interface WorkEntry {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const workEntries: WorkEntry[] = [
  {
    title: "Software Engineering Intern",
    company: "TechCorp Solutions",
    period: "Jan 2025 – Jun 2025",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams in an agile environment, participated in code reviews, and contributed to CI/CD pipeline improvements.",
  },
  {
    title: "Junior Full-Stack Developer",
    company: "StartUp Labs",
    period: "Jul 2024 – Dec 2024",
    description:
      "Built customer-facing features for a SaaS platform using Next.js and TypeScript. Implemented RESTful APIs, integrated third-party services, and wrote unit and integration tests.",
  },
];

export const achievements = {
  description:
    "Throughout my academic and professional journey, I have been fortunate to receive recognition for my dedication to software engineering and community involvement. These achievements reflect my commitment to continuous learning, collaboration, and making a positive impact through technology.",
  images: [
    "/images/",
    "/images/",
    "/images/",
    "/images/",
  ],
};
