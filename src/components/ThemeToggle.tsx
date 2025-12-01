"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "./ui/Icon";
import { LINK_STYLES } from "@/constants/styles";
import { cn } from "@/lib/utils";

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
        const newTheme = isDark ? "light" : "dark";

        // View Transitions API 지원 확인
        if (!(document as any).startViewTransition) {
            setTheme(newTheme);
            return;
        }

        const x = e.clientX;
        const y = e.clientY;
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );

        const transition = (document as any).startViewTransition(() => {
            setTheme(newTheme);
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];

            document.documentElement.animate(
                {
                    clipPath: clipPath,
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
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
