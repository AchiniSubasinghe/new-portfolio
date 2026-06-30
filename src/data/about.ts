export interface TabContent {
  id: string;
  label: string;
  content: string[] | { name: string; category?: string }[];
}

export const aboutTabs: TabContent[] = [
  {
    id: "education",
    label: "Education",
    content: [
      "B.Sc. (Hons) in Software Engineering (current) NSBM Green University",
      "Advanced Full Stack Development Program (Completed) Academy Of Computer Programming & Training",
      "G.C.E. Advanced Level — Sujatha Vidyalaya Nugegoda Stream: Commerce (Economics, IT, Accounting) Year: 2023(2024)",
    ],
  },
  {
    id: "tools",
    label: "Tools I Have Used",
    content: [
      { name: "VS Code", category: "Development" },
      { name: "IntelliJ IDEA", category: "Development" },
      { name: "Android Studio", category: "Development" },
      { name: "Git & GitHub", category: "Version Control" },
      { name: "Docker", category: "Containerization" },
      { name: "Postman", category: "API Testing" },
      { name: "Figma", category: "Design" },
      { name: "Canva", category: "Design" },
      { name: "Jira", category: "Project Management" },
      { name: "Linux / WSL", category: "Environment" },
      { name: "Vercel", category: "Deployment" },
      { name: "Digital Ocean", category: "Deployment" },
      { name: "AWS", category: "Deployment" },
      { name: "Firebase", category: "Backend-as-a-Service" },
      { name: "Superbase", category: "Backend-as-a-Service" },
    ],
  },
  {
    id: "technologies",
    label: "Technologies I Have Worked With",
    content: [
      { name: "TypeScript", category: "Language" },
      { name: "JavaScript", category: "Language" },
      { name: "Python", category: "Language" },
      { name: "Java", category: "Language" },
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "MongoDB", category: "Database" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Tailwind CSS", category: "Styling" },
    ],
  },
];
