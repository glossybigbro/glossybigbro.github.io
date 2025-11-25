export interface SkillCategory {
    title: string;
    skills: string[];
}

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