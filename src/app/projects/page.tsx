import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Projects | Achini Subasinghe",
  description: "Projects by Achini Subasinghe — Project Approval System, Uni Life Reborn, Enerlytics",
};

interface ProjectCardProps {
  title: string;
  description: string;
  repoUrl: string;
  techStack: string[];
}

function ProjectCard({ title, description, repoUrl, techStack }: ProjectCardProps) {
  return (
    <Section>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left — placeholder image */}
        <div className="w-full md:w-2/5">
          <div className="border-2 border-white rounded-2xl bg-surface h-48 md:h-full flex items-center justify-center">
            <span className="text-4xl text-gray-400">{title.charAt(0)}</span>
          </div>
        </div>

        {/* Right — project details */}
        <div className="w-full md:w-3/5 flex flex-col gap-4">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="border-2 border-white rounded-full px-3 py-0.5 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-white rounded-full px-6 py-2 text-lg w-fit"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="my-20">
      <h1 className="text-3xl md:text-4xl mb-10">Projects</h1>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.repoUrl} {...project} />
        ))}
      </div>
    </div>
  );
}
