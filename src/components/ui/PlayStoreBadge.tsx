"use client";

import Link from "next/link";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
import { ICON_SIZES, FOCUS_RING_COLORS } from "@/constants/ui";
import { useIsMobile } from "@/hooks/useIsMobile";

/**
 * Google Play Store 배지 컴포넌트
 * 
 * 구글 플레이 스토어 링크를 심미적인 배지 형태로 표시합니다.
 * 4-way 테마 시스템을 지원하여 Chrome 시스템 테마와 웹사이트 테마 조합에 따라
 * 4가지 다른 스타일로 표시됩니다.
 * 
 * **스타일링:**
 * - CSS 클래스: `.playstore-badge` (globals.css 참조)
 * - 테마 조합: Chrome Light/Dark × Website Light/Dark = 4가지
 * - 색상: Green 계열 (Google Play 브랜드 컬러)
 * 
 * **접근성:**
 * - 외부 링크 (`target="_blank"`)
 * - `aria-label`로 스크린 리더 지원
 * - 키보드 포커스 링 제공
 * 
 * @example
 * ```tsx
 * <PlayStoreBadge url="https://play.google.com/store/apps/details?id=com.example" />
 * ```
 */

export interface PlayStoreBadgeProps {
    /** Google Play Store URL */
    url: string;

    /** 추가 CSS 클래스 */
    className?: string;
}

/**
 * PlayStoreBadge 컴포넌트
 */
export function PlayStoreBadge({ url, className }: PlayStoreBadgeProps) {
    // 모바일 감지 (커스텀 훅 사용)
    const isMobile = useIsMobile();

    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "playstore-badge group",
                // PC에서만 transition과 hover 효과 적용
                !isMobile && "transition-all duration-200 hover:shadow-lg hover:scale-105 hover:border-green-600 dark:hover:border-green-300 hover:bg-green-50 dark:hover:bg-green-900",
                FOCUS_RING_COLORS.GREEN,
                className
            )}
            aria-label="Google Play에서 다운로드"
        >
            <Icon
                name="playstore"
                size={ICON_SIZES.BADGE}
            />
            <span>Google Play</span>
        </Link>
    );
}