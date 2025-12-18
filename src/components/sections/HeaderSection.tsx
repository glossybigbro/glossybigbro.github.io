"use client";

import { HeaderData } from "@/types";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SocialLink } from "@/components/ui/SocialLink";
import { Toast } from "@/components/ui/Toast";
import { ANIMATION_DURATION } from "@/constants";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useClipboard } from "@/hooks/useClipboard";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeaderSectionProps {
    data: HeaderData;
}

/**
 * 헤더 섹션 컴포넌트
 * 
 * 사이트 상단에 고정되어 로고, 소셜 링크, 언어/테마 설정을 제공합니다.
 * 이메일 주소 클릭 시 클립보드 복사 기능을 수행하며 토스트 알림을 표시합니다.
 */
export function HeaderSection({ data }: HeaderSectionProps) {
    const { isCopied, copyToClipboard, reset } = useClipboard();
    const isMobile = useIsMobile();
    const { t } = useLanguage();

    const handleEmailClick = () => {
        copyToClipboard(data.email);
    };

    const handleNameClick = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <>
            <div className="fixed top-0 z-[var(--z-header)] w-full bg-background/80 backdrop-blur-md border-b border-white/10 supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-6 py-4 max-w-6xl">
                    <div className="flex flex-row justify-between items-center gap-4 sm:gap-8">
                        <div className="flex-shrink-0 flex flex-col gap-1">
                            <div
                                onClick={handleNameClick}
                                className={cn(
                                    "relative text-lg sm:text-xl md:text-2xl font-bold text-foreground whitespace-nowrap cursor-pointer",
                                    "select-none [-webkit-tap-highlight-color:transparent]",
                                    !isMobile && [
                                        "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]",
                                        "after:bg-foreground after:transition-opacity",
                                        "after:opacity-0 hover:after:opacity-100"
                                    ]
                                )}
                            >
                                {data.name}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 ml-auto flex-shrink-0">
                            <div className="flex gap-2 sm:gap-4 text-foreground">
                                <SocialLink type="github" href={data.github} />
                                <SocialLink type="linkedin" href={data.linkedin} />
                                {data.email && (
                                    <SocialLink
                                        type="email"
                                        onClick={handleEmailClick}
                                    />
                                )}
                                <SocialLink type="portfolio" href={data.portfolio} />
                            </div>
                            <div className="h-5 sm:h-6 w-px bg-muted-foreground/20" />
                            <div className="flex gap-2 sm:gap-3 text-foreground">
                                <LanguageSwitcher />
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 토스트 알림 (프로그레스 바 포함) - 데스크톱에서만 표시 */}
            {!isMobile && isCopied && (
                <Toast
                    message={t('header.emailCopied')}
                    duration={ANIMATION_DURATION.TOAST}
                    onClose={reset}
                />
            )}
        </>
    );
}