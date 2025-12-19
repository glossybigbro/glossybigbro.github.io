import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ProjectLinkProps {
    href: string;
    text: string;
}

/**
 * 링크 타입에 따라 적절한 아이콘 반환
 */
function getLinkIcon(href: string) {
    if (href.includes('github.com')) {
        return <Icon name="github" size={16} />;
    }
    if (href.includes('velog.io')) {
        return <Icon name="book" size={16} />;
    }
    return <Icon name="globe" size={16} />;
}

/**
 * 프로젝트 링크 컴포넌트
 * 
 * 아이콘, 텍스트, 화살표로 구성된 링크를 렌더링합니다.
 * 데스크톱에서는 호버 시 원형 배경, 아이콘 애니메이션, 화살표 애니메이션이 표시됩니다.
 * 모바일에서는 호버 효과가 비활성화됩니다.
 */
export function ProjectLink({ href, text }: ProjectLinkProps) {
    const isMobile = useIsMobile();
    const icon = getLinkIcon(href);

    return (
        <Link
            href={href}
            target="_blank"
            className={cn(
                "group inline-flex items-center gap-1 text-muted-foreground transition-colors duration-200 w-fit",
                !isMobile && "hover:text-foreground"
            )}
        >
            {/* Icon container with circular background */}
            <span className="relative inline-flex items-center justify-center w-8 h-8 transition-colors duration-200">
                {/* Circular background on hover */}
                <span className={cn(
                    "absolute inset-0 rounded-full bg-transparent transition-all duration-200",
                    !isMobile && "group-hover:bg-muted"
                )} />
                {/* Icon with scale and rotate animation */}
                <span className={cn(
                    "relative transition-transform duration-200",
                    !isMobile && "group-hover:scale-110 group-hover:rotate-12"
                )}>
                    {icon}
                </span>
            </span>

            {/* Link text */}
            <span className="font-medium">{text}</span>

            {/* Arrow animation */}
            <Icon
                name="arrow-right"
                size={16}
                className={cn(
                    "opacity-0 -ml-2 transition-all duration-200",
                    !isMobile && "group-hover:opacity-100 group-hover:ml-0 group-hover:translate-x-1"
                )}
            />
        </Link>
    );
}
