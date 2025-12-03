/**
 * 사이트 전체 설정
 * 
 * 이 파일을 수정하여 사이트의 기본 정보를 변경할 수 있습니다.
 * SEO, 메타데이터, 테마 등의 전역 설정을 관리합니다.
 */

/**
 * 사이트 메타데이터 설정
 */
export const siteConfig = {
    /** 
     * 사이트 제목 (브라우저 탭에 표시)
     * 예: "하윤형 | 이력서"
     */
    title: "하윤형 | 이력서",

    /** 
     * 사이트 설명 (SEO용, 검색 결과에 표시)
     * 예: "Senior Android Developer | 하윤형의 이력서"
     */
    description: "Senior Android Developer | 하윤형의 이력서",

    /** 
     * 사이트 URL (배포된 주소)
     * 예: "https://glossybigbro.github.io"
     */
    url: "https://glossybigbro.github.io",

    /** 
     * OG 이미지 경로 (소셜 미디어 공유 시 표시될 이미지)
     * public 폴더 기준 경로
     * 예: "/og-image.png"
     */
    ogImage: "/images/profile.jpeg",

    /** 
     * 언어 설정 (HTML lang 속성)
     * 예: "ko-KR", "en-US"
     */
    locale: "ko-KR",

    /** 
     * 작성자 이름
     */
    author: "하윤형",

    /**
     * 기본 키워드 (SEO)
     * skills.ts에서 가져온 키워드와 병합됩니다.
     */
    keywords: [
        // Core
        "Resume",
        "Portfolio",
        "Android Developer",
        "Mobile App Developer",
        "Kotlin",
        "Java",

        // Modern Android
        "Jetpack Compose",
        "Coroutines",
        "Flow",
        "Hilt",
        "Dagger",
        "Retrofit",

        // Architecture
        "Clean Architecture",
        "MVVM",
        "MVI",
        "Modularization",

        // Korean Keywords
        "안드로이드 개발자",
        "앱 개발자",
        "모바일 앱 개발",
        "포트폴리오",
        "이력서",
        "하윤형",
    ],

    /**
     * 소셜 링크 및 외부 링크
     */
    links: {
        github: "https://github.com/glossybigbro",
    },
} as const;

/**
 * 테마 설정
 */
export const themeConfig = {
    /** 
     * 기본 테마 모드
     * - "light": 라이트 모드
     * - "dark": 다크 모드
     * - "system": 시스템 설정 따르기
     */
    defaultTheme: "system" as "light" | "dark" | "system",

    /** 
     * 테마 전환 애니메이션 지속 시간 (밀리초)
     */
    transitionDuration: 300,
} as const;
