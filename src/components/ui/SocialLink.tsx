import Link from "next/link";

import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

/**
 * 소셜 링크 컴포넌트
 * 
 * GitHub, LinkedIn 등의 소셜 미디어 링크를 표시하는 재사용 가능한 컴포넌트입니다.
 * 
 * @example
 * ```tsx
 * <SocialLink type="github" href="https://github.com/username" />
 * <SocialLink type="linkedin" href="https://linkedin.com/in/username" />
 * <SocialLink type="email" onClick={handleEmailClick} />
 * ```
 */

export interface SocialLinkProps {
    /** 
     * 소셜 미디어 타입
     * - github: GitHub 프로필
     * - linkedin: LinkedIn 프로필
     * - email: 이메일
     * - portfolio: 개인 웹사이트
     */
    type: "github" | "linkedin" | "email" | "portfolio";

    /** 링크 URL (비어있으면 렌더링되지 않음, email 타입은 선택사항) */
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

    /** 클릭 핸들러 (email 타입에서 사용) */
    onClick?: () => void;
}

/**
 * SocialLink 컴포넌트
 */
export function SocialLink({ type, href, size = "md", className, onClick }: SocialLinkProps) {
    // 모바일 감지 (커스텀 훅 사용) - Hook 규칙 준수를 위해 조건문보다 상위에 위치
    const isMobile = useIsMobile();

    // email 타입이 아니고 href가 없으면 렌더링하지 않음
    if (type !== "email" && !href) return null;

    const iconSizes = {
        sm: 16,
        md: 20,
        lg: 24,
    };

    const iconNames = {
        github: "github" as const,
        linkedin: "linkedin" as const,
        email: "email" as const,
        portfolio: "globe" as const,
    };

    const ariaLabels = {
        github: "GitHub Profile",
        linkedin: "LinkedIn Profile",
        email: "Copy Email Address",
        portfolio: "Portfolio Website",
    };



    const commonClassName = cn(
        "relative inline-flex items-center justify-center transition-colors duration-200",
        !isMobile && "icon-hover",
        "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded",
        className
    );

    const iconElement = (
        <Icon
            name={iconNames[type]}
            size={iconSizes[size]}
            className="sm:w-6 sm:h-6"
        />
    );

    // email 타입이거나 onClick이 있으면 button으로 렌더링
    if (type === "email" || onClick) {
        return (
            <button
                onClick={onClick}
                className={commonClassName}
                aria-label={ariaLabels[type]}
            >
                {iconElement}
            </button>
        );
    }

    // 그 외에는 Link로 렌더링
    return (
        <Link
            href={href!}
            target="_blank"
            rel="noopener noreferrer"
            className={commonClassName}
            aria-label={ariaLabels[type]}
        >
            {iconElement}
        </Link>
    );
}
