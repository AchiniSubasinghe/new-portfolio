export interface Project {
  title: string;
  description: string;
  repoUrl: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Project Approval System",
    description:
      "A web-based project approval management system that streamlines the workflow of submitting, reviewing, and approving academic or organizational projects. Features role-based access, status tracking, and notification support.",
    repoUrl: "https://github.com/AchiniSubasinghe/project-approval-system.git",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Uni Life Reborn",
    description:
      "A university life management platform designed to help students organize their academic schedules, track assignments, and collaborate with peers. Built with a focus on intuitive UX and real-time updates.",
    repoUrl: "https://github.com/AchiniSubasinghe/uni-life-reborn.git",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Enerlytics",
    description:
      "An energy analytics dashboard that visualises consumption patterns, forecasts usage trends, and provides actionable insights for optimising energy efficiency in residential and commercial settings.",
    repoUrl: "https://github.com/AchiniSubasinghe/enerlytics.git",
    techStack: ["Python", "Flask", "React", "PostgreSQL"],
  },
];
