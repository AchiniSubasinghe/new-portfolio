import type { Metadata } from "next";
import Image from "next/image";
import { aboutTabs } from "@/data/about";
import { TabGroup, type Tab } from "@/components/TabGroup";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About Me | Achini Subasinghe",
  description: "Learn more about Achini Subasinghe — education, tools, and technologies",
};

function renderTabContent(content: string[] | { name: string; category?: string }[]) {
  const items = content;

  // Education: array of strings
  if (typeof items[0] === "string") {
    return (
      <ul className="list-disc list-inside space-y-3 text-lg">
        {(items as string[]).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  // Tools / Technologies: array of { name, category }
  const grouped = (items as { name: string; category?: string }[]).reduce(
    (acc, item) => {
      const cat = item.category || "Other";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item.name);
      return acc;
    },
    {} as Record<string, string[]>
  );

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([category, names]) => (
        <div key={category}>
          <h3 className="text-xl text-gray-400 mb-3">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {names.map((name) => (
              <span
                key={name}
                className="border-2 border-white rounded-full px-4 py-1 text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const tabs: Tab[] = aboutTabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    content: (
      <Section>{renderTabContent(tab.content)}</Section>
    ),
  }));

  return (
    <div className="my-20">
      <h1 className="text-3xl md:text-4xl mb-10">About Me</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-3/5">
          <TabGroup tabs={tabs} />
        </div>
        <div className="w-full md:w-2/5 flex justify-center">
          <Image
            src="/images/vice.jpeg"
            alt="Achini Subasinghe"
            width={495}
            height={504}          
          />
        </div>
      </div>
    </div>
  );
}
