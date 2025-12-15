/**
 * 헤더 섹션 데이터
 * 
 * ⚠️ 이 파일은 더 이상 직접 수정하지 마세요!
 * 대신 `src/resume.config.ko.tsx` 또는 `src/resume.config.en.tsx` 파일의 `header` 섹션을 수정하세요.
 * 
 * 이 파일은 하위 호환성을 위해 유지되며, 현재 언어에 맞는 설정 파일에서 데이터를 가져옵니다.
 */
import { getResumeConfig } from "@/resume.config";
import type { HeaderData } from "@/types";

export function getHeaderData(language: 'ko' | 'en'): HeaderData {
    return getResumeConfig(language).header;
}

// 기본 export (한국어) - 하위 호환성
export { header as headerData } from "@/resume.config";