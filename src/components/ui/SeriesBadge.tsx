"use client";

import { Icon } from "@/components/ui/Icon";

/**
 * 시리즈 뱃지 컴포넌트
 * 
 * 아티클이 시리즈의 일부임을 나타내는 뱃지입니다.
 * 4-way 테마 시스템을 지원하여 Chrome 시스템 테마와 웹사이트 테마 조합에 따라
 * 4가지 다른 스타일로 표시됩니다.
 * 
 * **스타일링:**
 * - CSS 클래스: `.series-badge` (globals.css 참조)
 * - 테마 조합: Chrome Light/Dark × Website Light/Dark = 4가지
 * - 색상: Purple 계열 (차분하고 눈에 부담 없는 색상)
 * 
 * @example
 * ```tsx
 * <SeriesBadge seriesName="Android 개발자의 웹 개발 도전기" />
 * ```
 */

export interface SeriesBadgeProps {
    /** 시리즈 이름 */
    seriesName: string;
}

export function SeriesBadge({ seriesName }: SeriesBadgeProps) {
    return (
        <div className="series-badge mb-2">
            <Icon name="book" size={14} />
            <span>{seriesName}</span>
        </div>
    );
}
