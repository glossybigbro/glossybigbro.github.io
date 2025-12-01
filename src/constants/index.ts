/**
 * 프로젝트 전역 상수
 * 
 * 이 파일은 프로젝트 전체에서 사용되는 상수를 중앙에서 관리합니다.
 * 하드코딩된 값을 피하고 재사용성을 높이기 위해 사용됩니다.
 */

/**
 * 섹션 ID (앵커 링크용)
 * 
 * 페이지 내 섹션 이동을 위한 ID 값입니다.
 * 추후 네비게이션 메뉴 추가 시 활용할 수 있습니다.
 */
export const SECTION_IDS = {
    HEADER: "header",
    INTRODUCE: "introduce",
    EXPERIENCE: "experience",
    PROJECTS: "projects",
    SKILLS: "skills",
    WRITING: "writing",
} as const;

/**
 * 애니메이션 지속 시간 (밀리초)
 */
export const ANIMATION_DURATION = {
    /** 테마 전환 애니메이션 */
    THEME_TRANSITION: 300,

    /** 토스트 메시지 표시 시간 */
    TOAST: 1500,

    /** 일반 페이드 인/아웃 */
    FADE: 200,
} as const;

/**
 * 브레이크포인트 (픽셀)
 * 
 * Tailwind CSS의 기본 브레이크포인트와 일치합니다.
 */
export const BREAKPOINTS = {
    /** 모바일 (640px 이상) */
    SM: 640,

    /** 태블릿 (768px 이상) */
    MD: 768,

    /** 데스크톱 (1024px 이상) */
    LG: 1024,

    /** 대형 데스크톱 (1280px 이상) */
    XL: 1280,

    /** 초대형 데스크톱 (1536px 이상) */
    "2XL": 1536,
} as const;

/**
 * 외부 링크
 * 
 * 자주 사용되는 외부 링크를 상수로 관리합니다.
 */
export const EXTERNAL_LINKS = {
    /** GitHub 저장소 */
    GITHUB_REPO: "https://github.com/glossybigbro/glossybigbro.github.io",
} as const;
