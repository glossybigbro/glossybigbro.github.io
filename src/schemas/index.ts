import { z } from "zod";
import React from "react";

/**
 * 헤더 데이터 스키마
 */
export const headerSchema = z.object({
    name: z.string().min(1, "이름은 필수입니다."),
    title: z.string().min(1, "직함은 필수입니다."),
    email: z.string().email("유효한 이메일 주소여야 합니다."),
    phone: z.string().optional(),
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
 * 경력 아이템 스키마
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
});

/**
 * 프로젝트 아이템 스키마
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
 */
export const articleItemSchema = z.object({
    text: z.string(),
    href: z.string().url("유효한 URL이어야 합니다."),
    summary: z.string().optional(),
    keywords: z.array(z.string()).optional(),
});

// 타입 추출 (z.infer 사용)
export type HeaderData = z.infer<typeof headerSchema>;
export type ExperienceItem = z.infer<typeof experienceItemSchema>;
export type ProjectItem = z.infer<typeof projectItemSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type ArticleItem = z.infer<typeof articleItemSchema>;

// IntroduceData는 content가 ReactNode를 포함하므로 별도 타입 정의로 보완
export type IntroduceData = Omit<z.infer<typeof introduceSchema>, "content"> & {
    content: React.ReactNode[];
};
