import React from "react";
import type { HeaderData, ExperienceItem, ProjectItem, SkillCategory, ArticleItem } from "@/types";

/**
 * 🎯 이력서 통합 설정 파일 - 예시 템플릿
 * 
 * 이 파일을 `resume.config.tsx`로 복사하여 사용하세요.
 * 아래 예시 데이터를 본인의 정보로 수정하면 됩니다.
 * 
 * 💡 사용 방법:
 * 1. 이 파일을 `src/resume.config.tsx`로 복사
 * 2. 아래 데이터를 본인의 정보로 수정
 * 3. `npm run dev`로 로컬에서 확인
 * 4. 문제없으면 배포!
 */

// ============================================================================
// 📌 헤더 정보 (Header)
// ============================================================================
/**
 * 웹사이트 상단에 표시될 기본 정보
 */
export const header: HeaderData = {
    name: "홍길동",                              // 이름
    email: "hong@example.com",                   // 이메일
    github: "https://github.com/hong",           // GitHub URL (선택사항)
    linkedin: "https://linkedin.com/in/hong",    // LinkedIn URL (선택사항)
    portfolio: "",                               // 포트폴리오 URL (선택사항)
};

// ============================================================================
// 📌 소개 (Introduce)
// ============================================================================
/**
 * 자기소개 섹션
 */
export const introduce = {
    title: "Introduce.",
    profileImage: "/images/profile.jpeg",  // public/images/profile.jpeg 파일 준비
    content: [
        <p key="p1" className="font-medium">
            안녕하세요. <strong className="font-bold">5년차 풀스택 개발자</strong>입니다.
            사용자 경험을 최우선으로 생각하며, <strong className="font-bold">클린 코드</strong>와
            <strong className="font-bold">확장 가능한 아키텍처</strong>를 추구합니다.
        </p>,
        <p key="p2">
            프론트엔드부터 백엔드까지 전 영역을 다루며, 특히 <strong className="font-bold">React</strong>와
            <strong className="font-bold">Node.js</strong> 생태계에 깊은 이해를 가지고 있습니다.
        </p>,
    ]
};

// ============================================================================
// 📌 경력 (Experience)
// ============================================================================
/**
 * 경력 사항 목록
 */
export const experience: ExperienceItem[] = [
    {
        id: "exp-1",
        period: "2020.01 ~ 현재",
        role: "테크 스타트업",
        description: [
            "웹 서비스 풀스택 개발: React, Node.js 기반 서비스 설계 및 구현",
            "팀 리딩: 3명 규모의 개발팀을 이끌며 프로젝트 일정 관리",
            "성능 최적화: 페이지 로딩 속도 50% 개선",
        ],
        tags: ["Full Stack", "Team Lead"],
        // playStoreUrl: "https://play.google.com/...",  // 선택사항
        // isEnterprise: true,  // 기업용 솔루션인 경우
    },
    {
        id: "exp-2",
        period: "2018.03 ~ 2019.12",
        role: "IT 서비스 회사",
        description: [
            "프론트엔드 개발: Vue.js 기반 관리자 페이지 개발",
            "API 설계: RESTful API 설계 및 문서화",
        ],
        tags: ["Frontend Developer"],
    },
];

// ============================================================================
// 📌 프로젝트 (Projects)
// ============================================================================
/**
 * 프로젝트 목록
 */
export const projects: ProjectItem[] = [
    {
        id: "proj-1",
        period: "2023.01 ~ 2024.12",
        title: "전자상거래 플랫폼 구축",
        role: "주요 역할: 풀스택 개발 및 아키텍처 설계",
        description: [
            "개요: 중소기업을 위한 맞춤형 전자상거래 플랫폼 개발",
            "프론트엔드: Next.js, TypeScript, Tailwind CSS 활용",
            "백엔드: Node.js, Express, PostgreSQL 기반 API 서버 구축",
            "성과: 월 거래액 1억원 달성, 사용자 만족도 4.8/5.0",
        ],
        tags: [
            "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"
        ],
        // links: [  // 선택사항
        //     { text: "프로젝트 데모", href: "https://..." },
        //     { text: "GitHub", href: "https://github.com/..." },
        // ],
    },
    {
        id: "proj-2",
        period: "2022.06 ~ 2022.12",
        title: "실시간 채팅 서비스",
        role: "주요 역할: 백엔드 개발",
        description: [
            "WebSocket 기반 실시간 채팅 시스템 구현",
            "Redis를 활용한 메시지 큐 및 캐싱 처리",
            "동시 접속자 1만명 처리 가능한 확장 가능한 아키텍처 설계",
        ],
        tags: ["Node.js", "WebSocket", "Redis", "Docker"],
    },
];

// ============================================================================
// 📌 기술 스택 (Skills)
// ============================================================================
/**
 * 기술 스택 목록 (카테고리별)
 */
export const skills: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            "JavaScript",
            "TypeScript",
            "Python",
        ],
    },
    {
        title: "Frontend",
        skills: [
            "React",
            "Next.js",
            "Vue.js",
            "Tailwind CSS",
        ],
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "Express",
            "NestJS",
            "PostgreSQL",
            "MongoDB",
        ],
    },
    {
        title: "DevOps & Tools",
        skills: [
            "Docker",
            "AWS",
            "Git",
            "GitHub Actions",
        ],
    },
];

/**
 * 모든 기술 스택을 평탄화하여 반환합니다.
 * SEO 키워드 생성 등에 사용됩니다.
 */
export const getAllSkills = (): string[] => {
    return skills.flatMap((category) => category.skills);
};

// ============================================================================
// 📌 작성 글 (Articles)
// ============================================================================
/**
 * 작성한 글/아티클 목록
 */
export const articles: ArticleItem[] = [
    {
        text: "[React 성능 최적화 완벽 가이드]",
        href: "https://medium.com/@hong/react-optimization",
        summary: "React 애플리케이션의 성능을 극대화하는 실전 기법들을 소개합니다.",
        keywords: ["React", "성능 최적화", "Frontend"],
    },
    {
        text: "[Node.js 마이크로서비스 아키텍처]",
        href: "https://blog.example.com/microservices",
        summary: "Node.js로 확장 가능한 마이크로서비스를 구축하는 방법을 다룹니다.",
        keywords: ["Node.js", "마이크로서비스", "Backend"],
    },
];
