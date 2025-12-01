import Link from "next/link";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
import { LINK_STYLES } from "@/constants/styles";

/**
 * 소셜 링크 컴포넌트
 * 
 * GitHub, LinkedIn 등의 소셜 미디어 링크를 표시하는 재사용 가능한 컴포넌트입니다.
 * 
 * @example
 * ```tsx
 * <SocialLink type="github" href="https://github.com/username" />
 * <SocialLink type="linkedin" href="https://linkedin.com/in/username" />
 * ```
 */

export interface SocialLinkProps {
    /** 
     * 소셜 미디어 타입
     * - github: GitHub 프로필
     * - linkedin: LinkedIn 프로필
     * - portfolio: 개인 웹사이트
     */
    type: "github" | "linkedin" | "portfolio";

    /** 링크 URL (비어있으면 렌더링되지 않음) */
    href?: string | null;

    /** 
     * 아이콘 크기
     * - sm: 16px
     * - md: 20px (기본값)
     * - lg: 24px
     */
    size?: "sm" | "md" | "lg";

    /** 추가 CSS 클래스 */
    className?: string;
}

/**
 * SocialLink 컴포넌트
 */
export function SocialLink({ type, href, size = "md", className }: SocialLinkProps) {
    // 빈 링크는 렌더링하지 않음
    if (!href) return null;

    const iconSizes = {
        sm: 16,
        md: 20,
        lg: 24,
    };

    const iconNames = {
        github: "github" as const,
        linkedin: "linkedin" as const,
        portfolio: "globe" as const,
    };

    const ariaLabels = {
        github: "GitHub Profile",
        linkedin: "LinkedIn Profile",
        portfolio: "Portfolio Website",
    };

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(LINK_STYLES.SOCIAL, className)}
            aria-label={ariaLabels[type]}
        >
            <Icon
                name={iconNames[type]}
                size={iconSizes[size]}
                className="sm:w-6 sm:h-6"
            />
        </Link>
    );
}
