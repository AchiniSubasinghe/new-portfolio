import type { Metadata } from "next";
import Image from "next/image";
import { volunteeringExperiences } from "@/data/volunteering";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Volunteering | Achini Subasinghe",
  description: "Volunteering experiences of Achini Subasinghe",
};

export default function VolunteeringPage() {
  return (
    <div>
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Community
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Volunteering
        </h1>
      </header>
      <div className="flex flex-col gap-8">
        {volunteeringExperiences.map((exp, index) => (
          <Section key={exp.title}>
            <div
              className={[
                "flex flex-col gap-8",
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row",
              ].join(" ")}
            >
              <div className="flex w-full flex-col gap-3 md:w-1/2">
                <h2 className="text-2xl font-medium tracking-tight">{exp.title.trim()}</h2>
                <p className="text-base font-medium text-accent-muted">
                  {exp.organization}
                </p>
                <p className="text-sm tabular-nums text-muted">{exp.period}</p>
                <p className="mt-2 max-w-prose text-base leading-relaxed text-foreground/90">
                  {exp.description}
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-3 md:w-1/2">
                <div className="aspect-square overflow-hidden rounded-lg border border-border">
                  <Image
                    src={exp.image1}
                    alt={`${exp.title.trim()} — photo 1`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg border border-border">
                  <Image
                    src={exp.image2}
                    alt={`${exp.title.trim()} — photo 2`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}
