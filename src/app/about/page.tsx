import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | Achini Subasinghe",
  description:
    "Education, tools, and technologies — Achini Subasinghe, software engineer at NSBM Green University.",
};

export default function AboutPage() {
  return (
    <div>
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Who I am
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">About me</h1>
      </header>
      <AboutContent />
    </div>
  );
}
