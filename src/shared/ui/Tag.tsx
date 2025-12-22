import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * 태그 스타일 정의 (CVA)
 */
const tagVariants = cva(
    "inline-flex items-center justify-center rounded text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "tag-badge",
                primary: "tag-primary",
                success: "tag-success",
                outline: "tag-outline",
            },
            size: {
                default: "px-2.5 py-0.5",
                sm: "px-2 py-0.5 text-[10px]",
                lg: "px-3 py-1 text-sm",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface TagProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> { }

/**
 * 태그 컴포넌트
 * 
 * 기술 스택, 키워드 등을 표시하는 재사용 가능한 태그 컴포넌트입니다.
 * CVA를 사용하여 스타일 변형을 체계적으로 관리합니다.
 * 
 * @example
 * ```tsx
 * <Tag>Kotlin</Tag>
 * <Tag variant="primary" size="lg">Featured</Tag>
 * ```
 */
export function Tag({ className, variant, size, ...props }: TagProps) {
    return (
        <span className={cn(tagVariants({ variant, size }), className)} {...props} />
    );
}
