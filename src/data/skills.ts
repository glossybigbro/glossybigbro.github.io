export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Kotlin", "Java", "Dart"],
    },
    {
        title: "Architecture & Design Patterns",
        skills: ["Clean Architecture", "MVVM", "MVP", "MVI", "Multi-Module"],
    },
    {
        title: "Android Libraries & Jetpack",
        skills: [
            "Jetpack Compose",
            "Coroutines",
            "Flow",
            "Hilt",
            "Navigation",
            "Room",
            "DataStore",
            "LiveData",
            "WorkManager",
        ],
    },
    {
        title: "Network & Data",
        skills: ["Retrofit2", "OkHttp3", "GraphQL (Apollo Client)", "Glide/Coil"],
    },
    {
        title: "Cross-Platform",
        skills: ["Flutter"],
    },
    {
        title: "Common (Tools & DevOps)",
        skills: [
            "Android Studio",
            "Visual Studio Code",
            "Git",
            "GitHub",
            "GitHub Actions",
            "Jira",
            "Confluence",
            "Slack",
            "Trello",
            "Figma",
            "Gemini",
            "Claude Code",
            "Cursor",
            "Anti-Gravity",
        ],
    },
];
