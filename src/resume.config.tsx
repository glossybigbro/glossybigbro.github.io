/**
 * 🎯 다국어 이력서 설정 Wrapper
 * 
 * 현재 선택된 언어에 따라 적절한 설정 파일을 반환합니다.
 * 
 * **언어별 파일 구조**:
 * - 한국어: `resume.config.ko.tsx`
 * - 영어: `resume.config.en.tsx`
 * - Wrapper: `resume.config.tsx` (이 파일)
 * 
 * **사용 방법**:
 * ```tsx
 * import { getResumeConfig } from '@/resume.config';
 * 
 * const { language } = useLanguage();
 * const config = getResumeConfig(language);
 * 
 * // config.header, config.introduce, config.experience 등 사용
 * ```
 * 
 * **데이터 수정 방법**:
 * - 한국어 데이터 수정: `src/resume.config.ko.tsx` 편집
 * - 영어 데이터 수정: `src/resume.config.en.tsx` 편집
 * - 이 파일은 수정할 필요 없음
 */

import * as ko from './resume.config.ko';
import * as en from './resume.config.en';

// 타입 재export (하위 호환성)
export type { HeaderData, ExperienceItem, ProjectItem, SkillCategory, ArticleItem } from '@/types';

/**
 * 언어별 설정 객체
 * 
 * 각 언어별 이력서 데이터를 포함합니다.
 */
const configs = {
    ko,
    en,
} as const;

/**
 * 현재 언어에 맞는 이력서 설정을 반환합니다.
 * 
 * @param language - 'ko' (한국어) 또는 'en' (영어)
 * @returns 해당 언어의 이력서 설정 (header, introduce, experience, projects, skills, articles, getAllSkills)
 * 
 * @example
 * ```tsx
 * const config = getResumeConfig('ko');
 * console.log(config.header.name); // "하윤형"
 * 
 * const enConfig = getResumeConfig('en');
 * console.log(enConfig.header.name); // "Yunhyeong Ha"
 * ```
 */
export function getResumeConfig(language: 'ko' | 'en') {
    const config = configs[language];

    // Development 환경에서만 검증 (성능 최적화)
    if (process.env.NODE_ENV === 'development') {
        try {
            const { validateResumeConfig } = require('@/schemas/resume');
            validateResumeConfig(config);
            console.log(`✅ Resume config (${language}) validation passed`);
        } catch (error) {
            console.error(`❌ Resume config (${language}) validation failed:`, error);
        }
    }

    return config;
}

/**
 * 기본 export (한국어)
 * 
 * 하위 호환성을 위해 한국어 데이터를 기본으로 export합니다.
 * 새로운 코드에서는 `getResumeConfig(language)`를 사용하는 것을 권장합니다.
 */
export const { header, introduce, experience, projects, skills, articles, getAllSkills } = ko;
