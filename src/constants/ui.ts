/**
 * UI 관련 상수
 * 
 * 재사용 가능한 UI 설정값들을 중앙에서 관리합니다.
 */

/**
 * 아이콘 크기 상수
 */
export const ICON_SIZES = {
    /** 작은 아이콘 (배지, 버튼 내부 등) */
    BADGE: 16,
    /** 기본 아이콘 */
    DEFAULT: 24,
    /** 큰 아이콘 */
    LARGE: 32,
} as const;

/**
 * 포커스 링 스타일 상수
 * 
 * 접근성을 위한 키보드 포커스 링 스타일을 정의합니다.
 */
export const FOCUS_RING_COLORS = {
    /** 그린 포커스 링 (PlayStoreBadge 등) */
    GREEN: 'focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2',
    /** 블루 포커스 링 */
    BLUE: 'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    /** 앰버 포커스 링 */
    AMBER: 'focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2',
} as const;

/**
 * 테마 전환 애니메이션 설정
 */
export const THEME_TRANSITION_CONFIG = {
    /** 애니메이션 지속 시간 (밀리초) */
    DURATION: 500,
    /** 애니메이션 이징 함수 */
    EASING: 'ease-in-out',
} as const;
