"use client";

import { useState, type ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
}

export function TabGroup({ tabs }: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border-2 border-white rounded-full px-6 py-2 text-lg ${
              activeTab === tab.id ? "bg-white text-black" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div>
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
}
