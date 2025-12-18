'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * 지원하는 언어 타입
 * - 'ko': 한국어
 * - 'en': 영어
 */
export type Language = 'ko' | 'en';

/**
 * 언어 컨텍스트 타입 정의
 * 
 * @property language - 현재 선택된 언어
 * @property setLanguage - 언어를 변경하는 함수
 * @property t - 번역 함수 (현재는 헤더 네비게이션용으로만 사용)
 */
interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

/**
 * 언어 컨텍스트
 * 
 * 애플리케이션 전체에서 현재 언어 상태를 공유하기 위한 Context
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * 번역 데이터
 * 
 * **포함 항목**:
 * - 헤더 네비게이션 (header.*)
 * - 공통 문구 (common.*)
 * - Footer 문구 (footer.*)
 * 
 * **실제 이력서 데이터**는 resume.config.ko.tsx / resume.config.en.tsx에서 관리
 */
const translations = {
    ko: {
        // 헤더 네비게이션
        'header.introduce': '소개',
        'header.experience': '경력',
        'header.projects': '프로젝트',
        'header.skills': '기술',
        'header.writing': '작성글',
        'header.emailCopied': '이메일 주소가 복사되었습니다',

        // 공통 문구
        'common.readMore': '더 보기',
        'common.viewProject': '프로젝트 보기',
        'common.viewArticle': '글 보기',

        // Footer
        'footer.title': '이 이력서 템플릿이 마음에 드시나요?',
        'footer.description': 'GitHub에서 포크하여 나만의 이력서를 만들어보세요.',
        'footer.features': 'Next.js 16 + Tailwind CSS v4 • 4-Way 테마 시스템 • View Transitions API',
        'footer.button': 'GitHub에서 보기',
        'footer.builtWith': 'Built with Modern Web Technologies',
        'footer.techStack': 'Next.js • Tailwind CSS • TypeScript • Zod • Vitest',
    },
    en: {
        // 헤더 네비게이션
        'header.introduce': 'Introduce',
        'header.experience': 'Experience',
        'header.projects': 'Projects',
        'header.skills': 'Skills',
        'header.writing': 'Writing',
        'header.emailCopied': 'Email copied to clipboard',

        // 공통 문구
        'common.readMore': 'Read More',
        'common.viewProject': 'View Project',
        'common.viewArticle': 'View Article',

        // Footer
        'footer.title': 'Like this resume template?',
        'footer.description': 'Fork it on GitHub and create your own resume.',
        'footer.features': 'Next.js 16 + Tailwind CSS v4 • 4-Way Theme System • View Transitions API',
        'footer.button': 'View on GitHub',
        'footer.builtWith': 'Built with Modern Web Technologies',
        'footer.techStack': 'Next.js • Tailwind CSS • TypeScript • Zod • Vitest',
    }
};

/**
 * 언어 프로바이더 컴포넌트
 * 
 * 애플리케이션 전체를 감싸서 언어 상태를 제공합니다.
 * localStorage를 사용하여 사용자의 언어 선택을 저장하고 복원합니다.
 * 
 * @param children - 자식 컴포넌트
 * 
 * @example
 * ```tsx
 * <LanguageProvider>
 *   <App />
 * </LanguageProvider>
 * ```
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('ko');

    // 초기 언어 설정 (localStorage에서 로드)
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLanguageState(savedLanguage);
        }
    }, []);

    /**
     * 언어 변경 함수
     * 
     * 언어를 변경하고 localStorage에 저장합니다.
     * 
     * @param lang - 변경할 언어 ('ko' 또는 'en')
     */
    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    /**
     * 번역 함수
     * 
     * 주어진 키에 해당하는 번역된 문자열을 반환합니다.
     * 번역이 없는 경우 키를 그대로 반환합니다.
     * 
     * @param key - 번역 키 (예: 'header.introduce')
     * @returns 번역된 문자열 또는 키
     */
    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.ko] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

/**
 * 언어 컨텍스트 훅
 * 
 * 컴포넌트에서 현재 언어 상태와 언어 변경 함수에 접근하기 위한 훅입니다.
 * 
 * @throws {Error} LanguageProvider 외부에서 사용 시 에러 발생
 * 
 * @returns 언어 컨텍스트 (language, setLanguage, t)
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { language, setLanguage } = useLanguage();
 *   
 *   return (
 *     <button onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}>
 *       {language === 'ko' ? 'EN' : 'KO'}
 *     </button>
 *   );
 * }
 * ```
 */
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
