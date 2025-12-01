"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "./ui/Icon";
import { LINK_STYLES } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { transitionTheme } from "@/utils/theme-transition";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className={cn(LINK_STYLES.BASE)}
                aria-label="테마 전환"
            >
                <div className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
        );
    }

    // resolvedTheme은 실제 적용된 테마 ("light" 또는 "dark")
    const isDark = resolvedTheme === "dark";

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;

        // 클릭 후 포커스 제거 (파란색 outline 방지)
        button.blur();

        transitionTheme(e, () => setTheme(isDark ? "light" : "dark"));
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(LINK_STYLES.BASE)}
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            title={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
        >
            <Icon
                name={isDark ? "sun" : "moon"}
                size={20}
                className="sm:w-6 sm:h-6 transition-transform duration-200 hover:rotate-12"
            />
        </button>
    );
}
