export interface Project {
  title: string;
  description: string;
  image: string;
  repoUrl: string;
  liveDemoUrl: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Canyon",
    description:
      "A web-based platform for managing projects and tasks with natural language, streamlining workflows for submitting, reviewing, and approving academic or organizational projects. Features role-based access, status tracking, and notification support.",
    image: "/images/canyon.png",
    repoUrl: "https://github.com/achinisubasinghe/canyon.git",
    liveDemoUrl: "https://canyon.achini.space", 
    techStack: ["Next.js", "Node.js", "Express", "MariaDB", "Bun"],
  },
  {
    title: "Uni Life ",
    description:
      "A university life management platform designed to help students organize their academic schedules, track assignments, and collaborate with peers. Built with a focus on intuitive UX and real-time updates.",
    image: "/images/uni-life.png",
    repoUrl: "https://github.com/achinisubasinghe/uni-life-reborn.git",
    liveDemoUrl: "https://uni-life.achini.space",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Enerlytics",
    description:
      "An energy analytics dashboard that visualises consumption patterns, forecasts usage trends, and provides actionable insights for optimising energy efficiency in residential and commercial settings.",
    image: "/images/enerlytics.png",
    repoUrl: "https://github.com/achinisubasinghe/enerlytics.git",
    liveDemoUrl: "https://enerlytics.achini.space",
    techStack: ["Next.js", "React", "MariaDB", "Chart.js"],
  },
];
