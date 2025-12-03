"use client";

import Link from "next/link";
import { Icon } from "./ui/Icon";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

/**
 * Footer 컴포넌트
 * 
 * 페이지 하단에 표시되는 푸터로, GitHub 저장소 링크와
 * 템플릿 사용 안내를 제공합니다.
 */
export function Footer() {
    const isMobile = useIsMobile();

    return (
        <footer className="mt-8 sm:mt-8">
            <div className="max-w-4xl mx-auto px-6 py-10">
                {/* 상단 구분선 - 섹션과 조화 */}
                <div className="w-full h-px bg-border/50 mb-10" />

                <div className="flex flex-col items-center text-center space-y-6">
                    {/* 메인 메시지 */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-foreground">
                            이 이력서 템플릿이 마음에 드시나요?
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                            GitHub에서 포크하여 나만의 이력서를 만들어보세요.<br />
                            <span className="text-xs opacity-80">Next.js 16 + Tailwind CSS v4 • 4-Way 테마 시스템 • View Transitions API</span>
                        </p>
                    </div>

                    {/* GitHub 링크 버튼 - 개선된 디자인 */}
                    <Link
                        href="https://github.com/glossybigbro/glossybigbro.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg active:scale-95 bg-primary text-primary-foreground",
                            !isMobile && "hover:shadow-xl hover:scale-105 hover:bg-primary/90"
                        )}
                    >
                        <Icon name="github" size={24} className={cn("transition-transform duration-300", !isMobile && "group-hover:rotate-12")} />
                        <span className="text-base">GitHub에서 보기</span>
                        <svg
                            className={cn("w-4 h-4 transition-transform duration-300", !isMobile && "group-hover:translate-x-1")}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>

                    {/* 추가 정보 */}
                    <div className="pt-2 text-xs text-muted-foreground space-y-1">
                        <p className="font-medium">Built with Modern Web Technologies</p>
                        <p className="opacity-70">Next.js • Tailwind CSS • TypeScript • Zod • Vitest</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
