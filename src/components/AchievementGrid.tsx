import Image from "next/image";
import { achievements } from "@/data/workExperience";
import { Section } from "@/components/Section";

export function AchievementGrid() {
  return (
    <Section>
      <p className="text-lg leading-relaxed mb-8">{achievements.description}</p>
      <div className="grid grid-cols-2 gap-4">
        {achievements.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Achievement ${i + 1}`}
            width={300}
            height={300}
            className="rounded-2xl border-2 border-white w-full h-auto"
          />
        ))}
      </div>
    </Section>
  );
}
