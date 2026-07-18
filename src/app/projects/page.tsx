import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Projects | Achini Subasinghe",
  description:
    "Projects by Achini Subasinghe — Canyon, Uni Life, Enerlytics, and more.",
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  repoUrl: string;
  liveDemoUrl: string;
  techStack: string[];
}

function ProjectCard({
  title,
  description,
  image,
  repoUrl,
  liveDemoUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <Section padded={false} className="group overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5">
          <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-surface-elevated md:h-full md:min-h-[240px] md:border-b-0 md:border-r">
            <Image
              src={image}
              alt={`${title} project screenshot`}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 p-6 md:w-3/5 md:p-8">
          <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
          <p className="max-w-prose text-base leading-relaxed text-muted">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs font-medium tracking-wide text-foreground/85"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-surface inline-flex items-center rounded-full border border-border-strong px-5 py-2 text-sm font-medium hover:border-accent/50 hover:bg-accent-soft hover:text-accent"
            >
              View on GitHub
            </a>
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-surface inline-flex items-center rounded-full border border-accent/40 bg-accent px-5 py-2 text-sm font-medium text-background shadow-[0_0_20px_rgba(196,168,130,0.15)] hover:bg-accent-muted"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function ProjectsPage() {
  return (
    <div>
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Selected work
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">Projects</h1>
      </header>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.repoUrl} {...project} />
        ))}
      </div>
    </div>
  );
}
