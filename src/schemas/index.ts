import { z } from "zod";
import React from "react";

/**
 * 헤더 데이터 스키마
 * 
 * 필수: name, email
 * 선택: github, linkedin, portfolio (빈 문자열 허용)
 */
export const headerSchema = z.object({
    name: z.string().min(1, "이름은 필수입니다."),
    email: z.string().email("유효한 이메일 주소여야 합니다."),
    github: z.string().url("유효한 URL이어야 합니다.").optional().or(z.literal("")),
    linkedin: z.string().url("유효한 URL이어야 합니다.").optional().or(z.literal("")),
    portfolio: z.string().url("유효한 URL이어야 합니다.").optional().or(z.literal("")),
});

/**
 * 소개 데이터 스키마
 */
export const introduceSchema = z.object({
    title: z.string(),
    profileImage: z.string(),
    content: z.array(z.any()), // ReactNode는 Zod로 검증하기 어려우므로 any로 허용 (런타임 검증의 한계)
});

/**
 * 메트릭 아이템 스키마
 * 
 * 정량적 성과 지표를 나타냅니다.
 * - type: 'counter' (숫자 카운트업) 또는 'progress' (프로그레스 바)
 * - icon: 선택사항 (아이콘 이름)
 */
export const metricItemSchema = z.object({
    label: z.string(),
    value: z.number(),
    suffix: z.string().optional(),
    type: z.enum(["counter", "progress"]),
    icon: z.string().optional(),
});

/**
 * 경력 아이템 스키마
 * 
 * - period: "YYYY.MM ~ YYYY.MM" 또는 "YYYY.MM ~ 현재" 형식 (Regex 검증)
 * - description: 문자열 또는 { text, subItems } 객체 배열
 * - playStoreUrl: 선택사항 (URL 형식)
 * - isEnterprise: 선택사항 (Boolean)
 * - metrics: 선택사항 (성과 지표 배열)
 */
export const experienceItemSchema = z.object({
    id: z.string(),
    period: z.string().regex(/^\d{4}\.\d{2} ~ (\d{4}\.\d{2}|현재)$/, "날짜 형식이 올바르지 않습니다. (예: 2023.01 ~ 2025.01 또는 2023.01 ~ 현재)"),
    role: z.string(),
    description: z.array(
        z.union([
            z.string(),
            z.object({
                text: z.string(),
                subItems: z.array(z.string()).optional(),
            }),
        ])
    ),
    tags: z.array(z.string()),
    playStoreUrl: z.string().url("유효한 URL이어야 합니다.").optional(),
    isEnterprise: z.boolean().optional(),
    metrics: z.array(metricItemSchema).optional(),
});

/**
 * 프로젝트 아이템 스키마
 * 
 * - period: "YYYY.MM ~ YYYY.MM" 형식 (Regex 검증)
 * - links: 선택사항 ({ text, href } 객체 배열)
 * - metrics: 선택사항 (성과 지표 배열)
 */
export const projectItemSchema = z.object({
    id: z.string(),
    period: z.string().regex(/^\d{4}\.\d{2} ~ \d{4}\.\d{2}$/, "날짜 형식이 올바르지 않습니다. (예: 2023.01 ~ 2025.01)"),
    title: z.string(),
    role: z.string(),
    description: z.array(z.string()),
    tags: z.array(z.string()),
    links: z.array(
        z.object({
            text: z.string(),
            href: z.string().url("유효한 URL이어야 합니다."),
        })
    ).optional(),
    metrics: z.array(metricItemSchema).optional(),
});

/**
 * 스킬 카테고리 스키마
 */
export const skillCategorySchema = z.object({
    title: z.string(),
    skills: z.array(z.string()),
});

/**
 * 아티클 아이템 스키마
 * 
 * @property text - 글 제목
 * @property href - 글 URL
 * @property summary - 글 요약 (선택사항)
 * @property keywords - 관련 키워드/태그 (선택사항)
 * @property seriesName - 시리즈 이름 (선택사항, 예: "Android 개발자의 웹 개발 도전기")
 */
export const articleItemSchema = z.object({
    text: z.string(),
    href: z.string().url("유효한 URL이어야 합니다."),
    summary: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    seriesName: z.string().optional(),
});

// 타입 추출 (z.infer 사용)
export type HeaderData = z.infer<typeof headerSchema>;
export type MetricItem = z.infer<typeof metricItemSchema>;
export type ExperienceItem = z.infer<typeof experienceItemSchema>;
export type ProjectItem = z.infer<typeof projectItemSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type ArticleItem = z.infer<typeof articleItemSchema>;

// IntroduceData는 content가 ReactNode를 포함하므로 별도 타입 정의로 보완
export type IntroduceData = Omit<z.infer<typeof introduceSchema>, "content"> & {
    content: React.ReactNode[];
};
