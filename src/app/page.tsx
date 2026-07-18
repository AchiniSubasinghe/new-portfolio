import Image from "next/image";
import { personal } from "@/data/personal";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function Home() {
  const shortName = "Achini Subasinghe";

  return (
    <div className="flex min-h-[min(70dvh,720px)] flex-col items-center gap-12 md:flex-row md:items-center md:gap-14">
      {/* Portrait */}
      <div className="animate-fade-up flex w-full justify-center md:w-2/5">
        <div className="relative">
          <div
            className="absolute -inset-3 rounded-2xl bg-accent/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <Image
              src="/images/achini.jpeg"
              alt={personal.name}
              width={425}
              height={588}
              priority
              className="h-auto w-full max-w-[280px] object-cover sm:max-w-[320px] md:max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Intro copy */}
      <div className="flex w-full flex-col gap-6 md:w-3/5">
        <div className="animate-fade-up-delay-1 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Portfolio
          </p>
          <h1 className="max-w-[14ch] text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {shortName}
          </h1>
          <p className="font-handwritten text-2xl text-accent-muted md:text-3xl">
            {personal.role}
          </p>
        </div>

        <div className="animate-fade-up-delay-2 flex flex-wrap gap-3">
          <Button as="a" href={personal.cvPath} download="Achini-CV.pdf" variant="primary">
            Download CV
          </Button>
          <Button as="a" href="/projects" variant="secondary">
            View projects
          </Button>
        </div>

        <Section className="animate-fade-up-delay-3">
          <p className="max-w-prose text-base leading-relaxed text-foreground/90 md:text-lg">
            {personal.intro}
          </p>
        </Section>
      </div>
    </div>
  );
}
