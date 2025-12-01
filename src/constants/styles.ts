/**
 * 공통 스타일 패턴
 * 
 * 여러 컴포넌트에서 반복적으로 사용되는 스타일을 중앙에서 관리합니다.
 * Tailwind 클래스 문자열을 상수로 정의하여 일관성을 유지하고 유지보수를 쉽게 합니다.
 */

/**
 * 링크 스타일
 */
export const LINK_STYLES = {
    /** 기본 링크 스타일 (호버 시 파란색) */
    BASE: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200",

    /** 소셜 링크 스타일 (아이콘 링크용) */
    SOCIAL: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded",

    /** 외부 링크 스타일 (밑줄 포함) */
    EXTERNAL: "text-blue-500 hover:underline",
} as const;

/**
 * 포커스 스타일
 */
export const FOCUS_STYLES = {
    /** 기본 포커스 링 */
    BASE: "outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded",
} as const;

/**
 * 태그 스타일
 */
export const TAG_STYLES = {
    /** 태그 기본 스타일 */
    BASE: "inline-flex items-center justify-center px-2.5 py-0.5 rounded text-xs font-semibold",

    /** 기본 태그 (회색) */
    DEFAULT: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100",

    /** 강조 태그 (파란색) */
    PRIMARY: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",

    /** 성공 태그 (녹색) */
    SUCCESS: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
} as const;

/**
 * 텍스트 색상
 */
export const TEXT_COLORS = {
    /** 성공 메시지 색상 */
    SUCCESS: "text-green-600 dark:text-green-400",

    /** 에러 메시지 색상 */
    ERROR: "text-red-600 dark:text-red-400",

    /** 경고 메시지 색상 */
    WARNING: "text-yellow-600 dark:text-yellow-400",
} as const;

/**
 * 구분선 스타일
 */
export const DIVIDER_STYLES = {
    /** 점선 구분선 */
    DOTTED: "border-b border-dotted border-gray-300 dark:border-gray-600",

    /** 실선 구분선 */
    SOLID: "border-b border-solid border-gray-300 dark:border-gray-600",
} as const;
