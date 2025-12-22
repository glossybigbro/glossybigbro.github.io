'use client';

import { useLanguage } from "@/shared/contexts/LanguageContext";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { Icon } from "@/shared/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * 언어 전환 버튼 컴포넌트
 * 
 * 사용자가 한국어(KO)와 영어(EN) 사이를 전환할 수 있는 버튼입니다.
 * 
 * **디자인**:
 * - 모바일: 텍스트만 표시 (KO 또는 EN)
 * - 데스크톱: Globe 아이콘 + 텍스트 (🌐 KO 또는 🌐 EN)
 * 
 * **동작**:
 * - 클릭 시 언어 전환 (KO ↔ EN)
 * - localStorage에 선택한 언어 저장
 * - 페이지 전체 데이터가 선택한 언어로 변경됨
 * 
 * **디자인 결정**:
 * - Globe 아이콘 사용: 업계 표준 (Wix, Shopify, Canva 등)
 * - 국기 이모지 사용 안 함: 국기는 국가를 나타내며 언어를 나타내지 않음
 * - 언어 코드 표시: 현재 언어를 명확히 표시
 * 
 * @example
 * ```tsx
 * <LanguageSwitcher />
 * ```
 */
export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const isMobile = useIsMobile();

    /**
     * 언어 전환 핸들러
     * 
     * 현재 언어가 한국어면 영어로, 영어면 한국어로 전환합니다.
     */
    const toggleLanguage = () => {
        setLanguage(language === 'ko' ? 'en' : 'ko');
    };

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                "relative inline-flex items-center justify-center gap-1 transition-colors duration-200",
                !isMobile && "lang-hover"
            )}
            aria-label={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
            title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
        >
            {/* Globe 아이콘 - 데스크톱에서만 표시 */}
            <Icon
                name="globe"
                size={20}
                className="hidden sm:block sm:w-6 sm:h-6"
            />

            {/* 언어 코드 - 모든 화면에서 표시 */}
            <span className="text-sm font-medium uppercase">
                {language}
            </span>
        </button>
    );
}
