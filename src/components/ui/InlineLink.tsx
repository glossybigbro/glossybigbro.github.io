import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

interface InlineLinkProps {
    href: string;
    text: string;
}

/**
 * 인라인 링크 컴포넌트
 * 
 * 텍스트 내에서 사용할 수 있는 Velog 링크입니다.
 * Velog 아이콘과 텍스트로 구성되며, 4-way 테마 시스템을 사용합니다.
 * 
 * @example
 * ```tsx
 * <InlineLink href="https://velog.io/..." text="관련 글 보기" />
 * ```
 */
export function InlineLink({ href, text }: InlineLinkProps) {
    const isMobile = useIsMobile();

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "inline-link-badge group",
                "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg",
                "border-2 font-semibold text-sm",
                "transition-all duration-200",
                !isMobile && "hover:shadow-sm"
            )}
        >
            <Icon
                name="velog"
                size={14}
                className={cn(
                    "flex-shrink-0 transition-transform duration-200",
                    !isMobile && "group-hover:scale-110 group-hover:-rotate-12"
                )}
            />
            <span>{text}</span>
        </Link>
    );
}
