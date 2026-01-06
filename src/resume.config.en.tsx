import React from "react";
import type { HeaderData, ExperienceItem, ProjectItem, SkillCategory, ArticleItem } from "@/types";

/**
 * 🎯 이력서 통합 설정 파일
 * 
 * 이 파일 하나만 수정하면 모든 이력서 정보가 업데이트됩니다.
 * 각 섹션별로 데이터를 입력하세요.
 * 
 * 💡 사용 방법:
 * 1. 아래 데이터를 본인의 정보로 수정
 * 2. `npm test` 명령어로 데이터 검증
 * 3. `npm run dev`로 로컬에서 확인
 * 4. 문제없으면 배포!
 */

// ============================================================================
// 📌 헤더 정보 (Header)
// ============================================================================
/**
 * 웹사이트 상단에 표시될 기본 정보
 * 
 * @property name - 이름
 * @property email - 이메일 주소 (클릭 시 클립보드에 복사됨)
 * @property github - GitHub 프로필 URL (선택사항)
 * @property linkedin - LinkedIn 프로필 URL (선택사항)
 * @property portfolio - 개인 웹사이트 URL (선택사항)
 */
export const header: HeaderData = {
    name: "Glossybigbro.",
    email: "glossy.bigbro@gmail.com",
    github: "https://github.com/glossybigbro",
    linkedin: "https://www.linkedin.com/in/yunhyeong-ha",
    portfolio: "",
    velog: "https://velog.io/@glossybigbro",
};

// ============================================================================
// 📌 소개 (Introduce)
// ============================================================================
/**
 * 자기소개 섹션
 * 
 * @property title - 섹션 제목
 * @property profileImage - 프로필 이미지 경로 (public/images 폴더 내)
 * @property content - 자기소개 본문 (ReactNode 배열, HTML 태그 사용 가능)
 */
export const introduce = {
    title: "Introduce.",
    profileImage: "/images/profile.jpeg",
    content: [
        <p key="p1" className="font-medium">
            Hello! As an <strong className="font-bold">8-year experienced Android developer</strong> across various domains, I led teams as an <strong className="font-bold">Android Lead and Squad Development Team Lead</strong> in large-scale commerce services. Currently, I focus on setting technical direction through <strong className="font-bold">adopting new technologies</strong>, designing <strong className="font-bold">scalable architectures</strong>, <strong className="font-bold">automating development processes with CI/CD</strong>, and fostering effective team collaboration.
        </p>,
        <p key="p2">
            I believe project success comes from <strong className="font-bold">user satisfaction and team growth</strong>. When efficient collaboration and smooth communication support the team, we can truly <strong className="font-bold">achieve business goals</strong> and create services that satisfy users. As a <strong className="font-bold">proactive developer</strong>, I solve team challenges and support every member to perform at their best.
        </p>,
        <p key="p3">
            <strong className="font-bold">'Action', 'Consistency', and 'Habit Formation'</strong>. These three keywords define my approach to work and life. Physical strength built through running and weight training translates into <strong className="font-bold">tireless focus</strong> at work, while extensive reading and continuous exploration of new technologies lead to <strong className="font-bold">flexible thinking and technical vision</strong>. I believe that small repetitions become habits, then attitudes, and ultimately <strong className="font-bold">irreplaceable skills</strong>. Daily focus and consistency accumulated silently create <strong className="font-bold">significant changes in teams and services</strong>.
        </p>
    ]
};

// ============================================================================
// 📌 경력 (Experience)
// ============================================================================
/**
 * 경력 사항 목록
 * 
 * @property id - 고유 식별자 (중복 불가, 예: "exp-1")
 * @property period - 근무 기간 (예: "2022.08 ~ 2025.01")
 * @property role - 회사명 또는 조직명
 * @property description - 주요 업무 및 성과 (배열)
 * @property tags - 관련 기술 스택 또는 역할 태그
 * @property playStoreUrl - Google Play Store 링크 (선택사항)
 * @property isEnterprise - 기업용 솔루션 여부 (선택사항)
 */
export const experience: ExperienceItem[] = [
    {
        id: "exp-1",
        period: "2022.08 ~ 2025.01",
        role: "HelloMarket",
        description: [
            "Large-scale Service Operations: Maintained 99.9%+ crash-free rate for a platform with 8M cumulative downloads and 1.3M MAU",
            "Seller Squad Development Team Lead: Managed development resources (iOS, FE, BE) within the squad, coordinated schedules, and facilitated smooth project execution through collaboration with PM and designers",
            "OKR & Agile Execution: Established and managed sprint schedules based on quarterly OKR objectives during rebranding process to address business requirements [Read More](https://velog.io/@glossybigbro/OKR-애자일로-3개월-만에-조직을-바꾼-방법)",
            "Android Lead: Led a team of 3 Android developers, driving technical knowledge sharing and architecture discussions, and actively introducing latest trends (Paging3, GraphQL, Compose) to strengthen technical competitiveness",
            "Technical Advancement: Converted 100% Java codebase to Kotlin, refactored MVC to Clean Architecture, and progressively introduced Jetpack Compose",
            "Productivity Innovation: Implemented multi-module architecture and established CI/CD pipeline based on GitHub Actions (deployment automation)",
        ],
        tags: ["Android Lead", "Seller Squad Development Team Lead"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.tuck.hellomarket",
        metrics: [
            { label: "App Downloads", value: 8000000, suffix: "+", type: "counter" as const },
            { label: "Monthly Active Users", value: 1300000, suffix: "+", type: "counter" as const },
            { label: "Crash-free Rate", value: 99.9, suffix: "%", type: "progress" as const },
        ],
    },
    {
        id: "exp-2",
        period: "2021.10 ~ 2022.07",
        role: "The Scientist",
        description: [
            "Live Commerce Platform Development: Implemented core features including broadcast streaming, real-time chat, and VOD using Tencent SDK and ExoPlayer2",
            "Performance & Architecture Optimization: Improved screen transition speed and reduced unnecessary resource waste by introducing Single Activity (Navigation Component)",
            "Architecture Design: Established maintainable and extensible codebase by applying Clean Architecture (MVVM) from the initial stage",
        ],
        tags: ["Android Developer"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.charancha.broadcast",
    },
    {
        id: "exp-3",
        period: "2018.05 ~ 2021.09",
        role: "VertexID",
        description: [
            "Nonghyup Hanaro Distribution PDA Solution Development: Lead developer for Digital Fulfillment Center (DFC) and PCS advancement projects",
            "Logistics Process Optimization: Implemented total/order-based picking logic and optimized Honeywell barcode scanning",
            "Enterprise Logistics/Sales System Development: Developed sales support and warehouse management system (WMS) PDA apps for major corporations including Dongsuh Foods and Paldo",
        ],
        tags: ["Android Developer", "Assistant Manager"],
        isEnterprise: true,
    },
    {
        id: "exp-4",
        period: "2017.09 ~ 2017.11",
        role: "BitByte",
        description: [
            "Play Keyboard UI Development: Implemented new feature screens using ConstraintLayout and collaborated with designers to create precise UI layouts",
        ],
        tags: ["Android Developer"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=kr.bitbyte.playkeyboard",
    },
];

// ============================================================================
// 📌 프로젝트 (Projects)
// ============================================================================
/**
 * 프로젝트 목록
 * 
 * @property id - 고유 식별자 (중복 불가, 예: "proj-1")
 * @property period - 프로젝트 기간 (예: "2023.01 ~ 2025.01")
 * @property title - 프로젝트 제목
 * @property role - 프로젝트에서의 역할
 * @property description - 프로젝트 상세 설명 (배열)
 * @property tags - 사용된 기술 스택 및 도구
 * @property links - 관련 링크 (선택사항)
 */
export const projects: ProjectItem[] = [
    {
        id: "proj-0",
        period: "2025.12 ~ Present",
        title: "First Web Project: Building a Resume Website",
        role: "Main Role: Web Development (Planning, Design, Development, Deployment)",
        description: [
            "Background: While preparing for freelance work, discovered many projects requiring 'web + mobile' and 'full-stack' skills, leading to the decision to learn web development. Built resume website as first project, discovering more similarities with Android development than expected. Sharing the learning journey through Velog series",
            "Architecture: Separated data and UI with Container-Presenter pattern, ensured type safety with Zod schema, built reusable component system with CVA. Applied professional-level design despite being a learning project",
            "Internationalization & Theme: Context API-based Korean/English toggle, dark mode combining Chrome system theme and website toggle (4 combinations), random-position circular transition animation with View Transition API",
            "SEO & UX: Search engine optimization with dynamic metadata generation and automatic sitemap, optimized experience by distinguishing mobile touch and desktop hover with useIsMobile hook",
            "User-Friendly Design: Centralized all data (name, experience, projects, skills, etc.) in resume.config.tsx file for single-point management. Wrote comprehensive README with step-by-step guide and example templates for beginners to follow",
            "Knowledge Sharing: Publishing 'Android Developer's Web Dev Challenge' series on Velog. Planning to cover various topics including similarities between Kotlin and TypeScript, Compose and React, Tailwind CSS, dark mode, i18n, Zod type validation, and more",
        ],
        tags: [
            "Next.js 15", "TypeScript", "React", "Tailwind CSS v4",
            "Context API", "GitHub Actions", "GitHub Pages",
            "View Transition API", "Responsive Design", "i18n", "Dark Mode"
        ],
        links: [
            {
                text: "GitHub Repository",
                href: "https://github.com/glossybigbro/glossybigbro.github.io"
            },
            {
                text: "Resume Website",
                href: "https://glossybigbro.github.io"
            },
            {
                text: "Velog Series",
                href: "https://velog.io/@glossybigbro/series/Android-개발자의-웹-개발-도전기"
            }
        ],
    },
    {
        id: "proj-1",
        period: "2023.01 ~ 2025.01",
        title: "Complete App Architecture Overhaul and Performance Optimization",
        role: "Key Role: Legacy Refactoring and Architecture Design",
        description: [
            "Overview: Transformed legacy Java/MVC codebase that had reached maintenance limits into modern architecture to secure development productivity",
            "Modern Android Migration: Converted 100% Java code to Kotlin, introduced Clean Architecture + MVVM to separate business logic and establish unit testing environment",
            "Multi-Module Implementation: Redesigned Layered Architecture into Feature, Domain, and Core-based multi-modules to reduce build time and optimize inter-module dependencies",
            "Asynchronous Processing Improvement: Transformed callback hell into Coroutine & Flow to ensure data processing stability",
            "Build Environment Optimization: Centralized dependency management and standardized build environment by introducing Gradle Kotlin DSL and Version Catalog",
            "Achievements: Improved new feature development speed and increased maintenance efficiency by 30% through technical debt resolution",
        ],
        tags: [
            "Clean Architecture", "Multi-Module", "MVC", "MVVM", "Java", "Kotlin",
            "Jetpack Compose", "Hilt", "Room", "Coroutines", "Flow", "Gradle Kotlin DSL", "Version Catalog",
            "Etc"
        ],
        metrics: [
            { label: "Maintenance Efficiency", value: 30, suffix: "%", type: "progress" as const },
            { label: "Build Speed Improvement", value: 40, suffix: "%", type: "progress" as const },
        ],
    },
    {
        id: "proj-2",
        period: "2023.05 ~ 2025.01",
        title: "DevOps Implementation and App Quality Enhancement",
        role: "Key Role: CI/CD Pipeline Construction and Quality Management System Operation",
        description: [
            "Overview: Eliminated manual deployment inefficiencies and established data-driven quality management system",
            "CI/CD Pipeline: Implemented automated static analysis (Detekt), testing, build automation, and Firebase automatic deployment using GitHub Actions",
            "Deployment Efficiency: Reduced deployment preparation time by 90%+ and eliminated human errors at the source",
            "App Stability Assurance: Established proactive issue response system through advanced Crashlytics monitoring, maintaining 99.9%+ crash-free rate",
            "Achievements: Achieved 90% reduction in deployment lead time and zero-incident operations (99.9% crash-free)",
        ],
        tags: [
            "DevOps", "CI/CD", "GitHub Actions", "Firebase App Distribution", "Crashlytics", "Detekt",
            "Etc"
        ],
        metrics: [
            { label: "Deployment Time Reduction", value: 90, suffix: "%", type: "progress" as const },
            { label: "Crash-free Rate", value: 99.9, suffix: "%", type: "progress" as const },
        ],
    },
    {
        id: "proj-3",
        period: "2023.06 ~ 2023.12",
        title: "SDUI (Server Driven UI) Based Home Feed Implementation",
        role: "Key Role: SDUI Client Design and Implementation",
        description: [
            "Problem Definition: Inefficiencies from repetitive app deployments and review waiting times due to frequent home screen UI change requests",
            "SDUI Implementation: Designed server-driven dynamic UI rendering structure using GraphQL and Apollo Client",
            "30% Development Resource Reduction: Improved home screen UI to be dynamically changeable, reducing repetitive modification work and deployment costs",
            "Network Optimization: Prevented over-fetching by querying only necessary data (GraphQL), contributing to server cost reduction through decreased data transmission",
            "Stability Assurance: Maintained zero UI-related errors with type-safe design, establishing stable operational environment",
        ],
        tags: ["GraphQL", "Apollo Client", "SDUI", "Jetpack Compose", "Optimization", "Etc"],
        metrics: [
            { label: "Development Resource Reduction", value: 30, suffix: "%", type: "progress" as const },
            { label: "UI Errors", value: 0, suffix: " cases", type: "counter" as const },
        ],
    },
    {
        id: "proj-4",
        period: "2023.01 ~ 2025.01",
        title: "Seller Business Feature Enhancement",
        role: "Key Role: Seller Business Logic Implementation and UI/UX Enhancement",
        description: [
            "Store Screen Separation: Structurally separated mixed seller and buyer functions in store screen to establish foundation for UX improvement, and implemented text slide animation to enhance information delivery",
            "Purchase Process Visualization: Intuitively visualized collection-inspection-payment stages and implemented real-time notifications to reduce CS inquiries and ensure transparency",
            "Product Management Efficiency: Implemented bulk product editing (discount/top placement) and designed bundle purchase suggestion logic to drive basket size increase",
            "Product Registration Improvement: Prevented registration abandonment and increased completion rate through input stage reorganization and enhanced validation",
            "Interest Tab Redesign: Implemented Clean Architecture-based paging view for viewing liked products/stores at a glance (Paging3 introduction)",
            "Detail Screen Redesign: Maximized user convenience by designing UI structure that places key information summary at the top and provides additional information through scrolling",
        ],
        tags: [
            "Hilt", "Room", "DataStore", "Coroutines", "Jetpack Compose", "Paging3", "Flow",
            "ListAdapter", "PagingData", "DiffUtil", "CustomView(Animation)", "Etc"
        ],
    },
    {
        id: "proj-5",
        period: "2021.10 ~ 2022.07",
        title: "Used Car Live Commerce Platform 'Charancha Studio' New Development",
        role: "Key Role: Android Main Development (Initial Design and Implementation)",
        description: [
            "Live Streaming Feature Implementation: Developed broadcast streaming, real-time chat, and VOD features using Tencent SDK and ExoPlayer2 to provide two-way communication environment between dealers and customers",
            "Performance and Architecture Optimization: Reduced unnecessary resource waste and improved screen transition speed by introducing Single Activity Architecture (Navigation Component)",
            "Scalable Architecture: Established maintainable and extensible codebase by applying Clean Architecture (MVVM) from the initial stage"
        ],
        tags: [
            "Kotlin", "MVVM", "Clean Architecture", "Tencent SDK", "ExoPlayer2",
            "Navigation Component", "Single Activity", "Coroutines", "Retrofit2", "Etc"
        ],
    },
    {
        id: "proj-6",
        period: "2018.05 ~ 2021.09",
        title: "Nonghyup Hanaro Distribution Digital Fulfillment (DFC) and PDA Solution",
        role: "Key Role: Android PDA App Development",
        description: [
            "DFC (Digital Fulfillment Center): Developed total picking list integration, tray mapping, and DAS data transmission features",
            "(New) PCS Advancement: Converted existing zone-based picking to order-based picking method and migrated system",
            "Common: Ensured high-speed barcode scan processing and data integrity using Honeywell SDK",
        ],
        tags: [
            "Clean Architecture", "MVP", "RxJava", "Retrofit2", "Room", "Honeywell SDK", "Etc"
        ],
    },
    {
        id: "proj-7",
        period: "2017.09 ~ 2017.11",
        title: "Play Keyboard New Feature UI and Layout Implementation",
        role: "Key Role: ConstraintLayout-based UI Development",
        description: [
            "UI Technology Introduction: Implemented new feature screens using ConstraintLayout and optimized layout structure efficiency",
            "Collaboration and Implementation: Collaborated with designers to implement accurate UI layouts according to guidelines and developed new feature screens",
        ],
        tags: ["Android", "ConstraintLayout", "UI/UX", "XML"],
    },
];

// ============================================================================
// 📌 기술 스택 (Skills)
// ============================================================================
/**
 * 기술 스택 목록 (카테고리별)
 * 
 * @property title - 카테고리 제목 (예: "Languages", "Framework")
 * @property skills - 해당 카테고리의 기술 목록
 */
export const skills: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            "Kotlin",
            "Java",
            "Dart",
        ],
    },
    {
        title: "Architecture & Design Patterns",
        skills: [
            "Clean Architecture",
            "Multi-Module",
            "MVVM",
            "MVP",
            "MVI",
            "Single Activity",
        ],
    },
    {
        title: "Android Libraries & Jetpack",
        skills: [
            "Jetpack Compose",
            "Coroutines",
            "Flow",
            "RxJava",
            "Hilt",
            "Navigation",
            "Room",
            "DataStore",
            "LiveData",
            "DataBinding",
            "WorkManager",
            "Paging3",
            "ExoPlayer2",
        ],
    },
    {
        title: "Network & Data",
        skills: [
            "Retrofit2",
            "OkHttp3",
            "GraphQL(Apollo Client)",
            "Glide/Coil",
        ],
    },
    {
        title: "Cross-Platform",
        skills: [
            "Flutter",
        ],
    },
    {
        title: "Build & Tools",
        skills: [
            "Gradle (Kotlin DSL)",
            "Convention Plugins",
            "Version Catalog",
            "Detekt",
            "Android Studio",
            "Visual Studio Code",
            "Git",
            "GitHub",
            "GitLab",
        ],
    },
    {
        title: "DevOps & Collaboration",
        skills: [
            "GitHub Actions",
            "Firebase App Distribution",
            "Jira",
            "Confluence",
            "Slack",
            "Trello",
            "Figma",
        ],
    },
    {
        title: "Others (SDK & AI)",
        skills: [
            "Kakao Map API",
            "Tencent SDK",
            "Honeywell SDK",
            "ChatGPT",
            "Gemini",
            "Claude(Code)",
            "Cursor",
            "Antigravity",
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
 * 
 * @property text - 글 제목 (링크 텍스트로 표시)
 * @property href - 글 URL
 * @property summary - 글 요약 (선택사항)
 * @property keywords - 관련 키워드/태그 (선택사항)
 */
export const articles: ArticleItem[] = [
    {
        text: "Part 3. TypeScript from an Android Developer's Perspective (feat. Kotlin)",
        href: "https://velog.io/@glossybigbro/Android-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EB%B3%B4%EB%8A%94-TypeScript-feat.-Kotlin",
        summary: "Third story of an 8-year Android developer's web development challenge. In-depth comparison of Kotlin and TypeScript using career display feature as an example. From classes, interfaces, polymorphism, and Null Safety to real-world architecture comparison between MVI + Clean Architecture and React Query, exploring differences and similarities of both languages.",
        keywords: ["Android", "Kotlin", "TypeScript", "OOP", "Architecture"],
        seriesName: "Android Developer's Web Dev Challenge",
    },
    {
        text: "Part 2. Getting Started with Next.js Project",
        href: "https://velog.io/@glossybigbro/Next.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0",
        summary: "Second story of an 8-year Android developer's web development challenge. Honest reasons for choosing Next.js and the process from project creation to first run, explained with comparisons to Jetpack Compose. Sharing practical experiences from Node.js installation, npx usage, to understanding project structure.",
        keywords: ["Android", "Next.js", "React", "TypeScript", "Jetpack Compose"],
        seriesName: "Android Developer's Web Dev Challenge",
    },
    {
        text: "Part 1. Huh? This is just like Kotlin?",
        href: "https://velog.io/@glossybigbro/1%ED%8E%B8.-%EC%96%B4-%EC%9D%B4%EA%B1%B0-Kotlin%EC%9D%B4%EB%9E%91-%EB%98%91%EA%B0%99%EC%9E%96%EC%95%84",
        summary: "First story of an 8-year Android developer's web development challenge. Sharing the surprising similarities felt by a developer used to Kotlin and Jetpack Compose while learning TypeScript and React, and the real reason for studying web development.",
        keywords: ["Android", "Kotlin", "Web", "Next.js", "TypeScript"],
        seriesName: "Android Developer's Web Dev Challenge",
    },
    {
        text: "[How We Transformed Our Organization in 3 Months with OKR + Agile]",
        href: "https://velog.io/@glossybigbro/OKR-%EC%95%A0%EC%9E%90%EC%9D%BC%EB%A1%9C-3%EA%B0%9C%EC%9B%94-%EB%A7%8C%EC%97%90-%EC%A1%B0%EC%A7%81%EC%9D%84-%EB%B0%94%EA%BE%BC-%EB%B0%A9%EB%B2%95",
        summary:
            "From 'That's not my job' to proactively proposing solutions. A practical record of how a squad team transformed by introducing quarterly OKR alignment instead of vague top-down directives, enabling developers to participate in planning and designers to consider development effort.",
        keywords: ["OKR", "Agile", "Startup", "Organizational Culture", "Work Methods"],
    },
];
