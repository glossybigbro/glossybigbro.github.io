"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "./ui/Icon";
import { cn } from "@/lib/utils";
import { transitionTheme } from "@/utils/theme-transition";
import { useIsMobile } from "@/hooks/useIsMobile";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // resolvedTheme은 실제 적용된 테마 ("light" 또는 "dark")
    const isDark = resolvedTheme === "dark";

    // 모바일 감지 (커스텀 훅 사용)
    const isMobile = useIsMobile();

    if (!mounted) {
        return (
            <button
                className="transition-colors duration-200"
                aria-label="테마 전환"
            >
                <div className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
        );
    }

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        transitionTheme(e, () => setTheme(isDark ? "light" : "dark"));
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "transition-colors duration-200",
                !isMobile && "hover:text-blue-600 dark:hover:text-blue-400", // PC에만 호버 효과
                "outline-none ring-0 focus:ring-0 focus:outline-none active:bg-transparent tap-highlight-transparent"
            )}
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            title={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
        >
            <Icon
                name={isDark ? "sun" : "moon"}
                size={20}
                className={cn(
                    "sm:w-6 sm:h-6 transition-transform duration-200",
                    !isMobile && "hover:rotate-12" // PC에서만 회전 애니메이션
                )}
            />
        </button>
    );
}
