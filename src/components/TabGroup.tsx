"use client";

import { useState, type ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export function TabGroup({ tabs, activeTab: controlledTab, onTabChange }: TabGroupProps) {
  const [internalTab, setInternalTab] = useState(tabs[0].id);
  const activeTab = controlledTab ?? internalTab;

  function handleTabClick(tabId: string) {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalTab(tabId);
    }
  }

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="About sections"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleTabClick(tab.id)}
              className={[
                "interactive-surface rounded-full px-5 py-2 text-sm font-medium tracking-wide",
                isActive
                  ? "border border-accent/40 bg-accent text-background shadow-[0_0_20px_rgba(196,168,130,0.18)]"
                  : "border border-border-strong bg-transparent text-muted hover:border-accent/40 hover:bg-accent-soft hover:text-accent",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel">{tabs.find((t) => t.id === activeTab)?.content}</div>
    </div>
  );
}
