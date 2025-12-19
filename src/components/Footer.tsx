"use client";

import Link from "next/link";
import { Icon } from "./ui/Icon";
import { SectionDivider } from "./ui/SectionDivider";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * Footer 컴포넌트
 * 
 * 페이지 하단에 표시되는 푸터로, GitHub 저장소 링크와
 * 템플릿 사용 안내를 제공합니다.
 * 
 * **다국어 지원**:
 * - LanguageContext의 `t()` 함수를 사용하여 번역
 * - 한국어/영어 자동 전환
 */
export function Footer() {
    const isMobile = useIsMobile();
    const { t } = useLanguage();

    return (
        <footer className="mt-24 sm:mt-24">
            {/* 상단 구분선 - 섹션과 조화 */}
            <SectionDivider className="py-0" />

            <div className="px-6 py-8">

                <div className="flex flex-col items-center text-center space-y-6">
                    {/* 메인 메시지 */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-foreground">
                            {t('footer.title')}
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                            {t('footer.description')}<br />
                            <span className="text-xs opacity-80">{t('footer.features')}</span>
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
                        <span className="text-base">{t('footer.button')}</span>
                        <Icon name="arrow-right" size={16} className={cn("transition-transform duration-300", !isMobile && "group-hover:translate-x-1")} />
                    </Link>

                    {/* 추가 정보 */}
                    <div className="pt-2 text-xs text-muted-foreground space-y-1">
                        <p className="font-medium">{t('footer.builtWith')}</p>
                        <p className="opacity-70">{t('footer.techStack')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
