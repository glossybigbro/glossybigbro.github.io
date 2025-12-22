"use client";

import dynamic from 'next/dynamic';
import { HeaderSection } from "@/features/header";
import { IntroduceSection } from "@/features/introduce";
// Dynamic imports for below-the-fold content
const ExperienceSection = dynamic(() => import("@/features/experience").then(mod => ({ default: mod.ExperienceSection })), {
  loading: () => <div className="min-h-screen" />,
});
const ProjectSection = dynamic(() => import("@/features/project").then(mod => ({ default: mod.ProjectSection })), {
  loading: () => <div className="min-h-screen" />,
});
const SkillSection = dynamic(() => import("@/features/skill").then(mod => ({ default: mod.SkillSection })), {
  loading: () => <div className="min-h-[50vh]" />,
});
const WritingSection = dynamic(() => import("@/features/writing").then(mod => ({ default: mod.WritingSection })), {
  loading: () => <div className="min-h-[50vh]" />,
});
const Footer = dynamic(() => import("@/features/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[30vh]" />,
});
import { useLanguage } from "@/shared/contexts/LanguageContext";
import { getResumeConfig } from "@/resume.config";

/**
 * 홈 페이지 컴포넌트
 * 
 * 이력서의 모든 섹션을 포함하는 메인 페이지입니다.
 * 
 * **다국어 지원**:
 * - `useLanguage()` 훅을 사용하여 현재 언어를 가져옵니다
 * - `getResumeConfig(language)`로 언어별 데이터를 동적으로 로드합니다
 * - 언어 전환 시 모든 섹션의 데이터가 자동으로 업데이트됩니다
 * 
 * **섹션 구성**:
 * 1. Header - 이름, 직함, 연락처, 언어/테마 전환 버튼
 * 2. Introduce - 자기소개
 * 3. Experience - 경력 사항
 * 4. Projects - 프로젝트 목록
 * 5. Skills - 기술 스택
 * 6. Writing - 작성한 글
 * 7. Footer - 푸터
 * 
 * @returns 이력서 페이지
 */
export default function Home() {
  // 현재 언어 가져오기
  const { language } = useLanguage();

  // 언어별 이력서 데이터 로드
  const config = getResumeConfig(language);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-[#EEEEEE]">
      <HeaderSection data={config.header} />
      <div className="pt-20 container mx-auto px-6 pb-2 max-w-6xl">
        <IntroduceSection data={config.introduce} />
        <ExperienceSection data={config.experience} />
        <ProjectSection data={config.projects} />
        <SkillSection data={config.skills} />
        <WritingSection data={config.articles} />
        <Footer />
      </div>
    </main>
  );
}