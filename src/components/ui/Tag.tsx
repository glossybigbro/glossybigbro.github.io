import { cn } from "@/lib/utils";
import { TAG_STYLES } from "@/constants/styles";

/**
 * 태그 컴포넌트
 * 
 * 기술 스택, 키워드 등을 표시하는 재사용 가능한 태그 컴포넌트입니다.
 * 
 * @example
 * ```tsx
 * <Tag>Kotlin</Tag>
 * <Tag variant="primary">Featured</Tag>
 * <Tag variant="success">Completed</Tag>
 * ```
 */

export interface TagProps {
    /** 태그에 표시할 내용 */
    children: React.ReactNode;

    /** 
     * 태그 스타일 변형
     * - default: 회색 (기본값)
     * - primary: 파란색 (강조)
     * - success: 녹색 (완료/성공)
     */
    variant?: "default" | "primary" | "success";

    /** 추가 CSS 클래스 */
    className?: string;
}

/**
 * Tag 컴포넌트
 */
export function Tag({ children, variant = "default", className }: TagProps) {
    const variantStyles = {
        default: TAG_STYLES.DEFAULT,
        primary: TAG_STYLES.PRIMARY,
        success: TAG_STYLES.SUCCESS,
    };

    return (
        <span className={cn(TAG_STYLES.BASE, variantStyles[variant], className)}>
            {children}
        </span>
    );
}
