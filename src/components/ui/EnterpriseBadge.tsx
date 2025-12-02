import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
import { ICON_SIZES } from "@/constants/ui";

/**
 * Enterprise 배지 컴포넌트
 * 
 * 기업용(B2B) 솔루션임을 나타내는 배지입니다.
 * Play Store 링크가 없는 기업용 앱을 위해 사용됩니다.
 * 
 * **스타일링:**
 * - CSS 클래스: `.enterprise-badge` (globals.css 참조)
 * - 테마 조합: Chrome Light/Dark × Website Light/Dark = 4가지
 * - 색상: Amber 계열 (프리미엄 느낌)
 * 
 * **접근성:**
 * - `title` 속성으로 툴팁 제공
 * - `aria-label`로 스크린 리더 지원
 * 
 * @example
 * ```tsx
 * <EnterpriseBadge />
 * ```
 */

export interface EnterpriseBadgeProps {
    /** 추가 CSS 클래스 */
    className?: string;
}

/**
 * EnterpriseBadge 컴포넌트
 */
export function EnterpriseBadge({ className }: EnterpriseBadgeProps) {
    return (
        <div
            className={cn(
                "enterprise-badge",
                className
            )}
            title="기업용 솔루션"
            aria-label="기업용 솔루션"
        >
            <Icon name="building" size={ICON_SIZES.BADGE} />
            <span>Enterprise</span>
        </div>
    );
}
