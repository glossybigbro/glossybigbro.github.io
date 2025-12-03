import type { SkillCategory } from "@/types";

/**
 * 기술 스택 데이터
 * 
 * 이 파일을 수정하여 기술 스택을 변경할 수 있습니다.
 * 각 카테고리는 다음 필드를 포함합니다:
 * - title: 카테고리 제목 (예: "Languages", "Framework")
 * - skills: 해당 카테고리의 기술 목록 (배열)
 */
export const skillsData: SkillCategory[] = [
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
    return skillsData.flatMap((category) => category.skills);
};