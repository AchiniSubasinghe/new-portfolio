import type { Metadata } from "next";
import { achievementsIntro } from "@/data/achievements";
import { AchievementGrid } from "@/components/AchievementGrid";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Achievements | Achini Subasinghe",
  description: "Achievements and recognition of Achini Subasinghe",
};

export default function AchievementsPage() {
  return (
    <div>
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Recognition
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Achievements
        </h1>
      </header>
      <Section className="mb-10">
        <p className="max-w-prose text-base leading-relaxed text-foreground/90 md:text-lg">
          {achievementsIntro}
        </p>
      </Section>
      <AchievementGrid />
    </div>
  );
}
