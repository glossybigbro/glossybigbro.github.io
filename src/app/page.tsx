"use client";

import { HeaderSection } from "@/components/sections/HeaderSection";
import { IntroduceSection } from "@/components/sections/IntroduceSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { WritingSection } from "@/components/sections/WritingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <div className="container mx-auto px-6 pb-20 max-w-6xl">
        <HeaderSection />
        <IntroduceSection />
        <ExperienceSection />
        <ProjectSection />
        <SkillSection />
        <WritingSection />
      </div>
    </main>
  );
}

