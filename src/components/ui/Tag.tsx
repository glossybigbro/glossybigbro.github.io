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
                default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600",
                primary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800",
                success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800",
                outline: "border border-gray-300 text-gray-800 dark:border-gray-600 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800",
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
