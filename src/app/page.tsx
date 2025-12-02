"use client";

import { HeaderSection } from "@/components/sections/HeaderSection";
import { IntroduceSection } from "@/components/sections/IntroduceSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { Footer } from "@/components/Footer";

import { headerData } from "@/data/header";
import { introduceData } from "@/data/introduce";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <div className="container mx-auto px-6 pb-20 max-w-6xl">
        <HeaderSection data={headerData} />
        <IntroduceSection data={introduceData} />
        <ExperienceSection data={experienceData} />
        <ProjectSection data={projectsData} />
        <SkillSection data={skillsData} />
        <WritingSection data={articles} />
      </div>
      <Footer />
    </main>
  );
}
