import {
    HeaderData as ZodHeaderData,
    IntroduceData as ZodIntroduceData,
    ExperienceItem as ZodExperienceItem,
    ProjectItem as ZodProjectItem,
    SkillCategory as ZodSkillCategory,
    ArticleItem as ZodArticleItem
} from "@/schemas";

/**
 * 이력서 웹사이트의 타입 정의
 * 
 * 이 파일은 프로젝트 전체에서 사용되는 타입을 중앙에서 관리합니다.
 * 실제 타입 정의는 src/schemas/index.ts의 Zod 스키마에서 추론됩니다.
 * 이를 통해 런타임 검증 로직과 정적 타입 정의를 일치시킵니다.
 */

/**
 * 헤더 섹션 데이터 타입
 * 
 * 페이지 상단에 표시되는 개인 정보 및 연락처 정보입니다.
 */
export type HeaderData = ZodHeaderData;

/**
 * 소개 섹션 데이터 타입
 * 
 * 자기소개 및 프로필 이미지 정보를 나타냅니다.
 */
export type IntroduceData = ZodIntroduceData;

/**
 * 경력 항목 타입
 * 
 * 각 회사/조직에서의 경력 사항을 나타냅니다.
 */
export type ExperienceItem = ZodExperienceItem;

/**
 * 프로젝트 항목 타입
 * 
 * 개인 또는 팀 프로젝트의 상세 정보를 나타냅니다.
 */
export type ProjectItem = ZodProjectItem;

/**
 * 기술 스택 카테고리 타입
 * 
 * 기술을 카테고리별로 그룹화하여 표시합니다.
 */
export type SkillCategory = ZodSkillCategory;

/**
 * 작성 글/아티클 항목 타입
 * 
 * 기술 블로그 글이나 외부 게시물 정보를 나타냅니다.
 */
export type ArticleItem = ZodArticleItem;
