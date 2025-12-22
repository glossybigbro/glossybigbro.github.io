import { z } from 'zod';

/**
 * Zod Schemas for Runtime Validation
 * 
 * 이 스키마들은 런타임에 데이터를 검증하고,
 * TypeScript 타입을 자동으로 생성합니다.
 */

// Experience Item Schema
export const ExperienceItemSchema = z.object({
    id: z.string(),
    period: z.string().min(1),
    role: z.string().min(1),
    description: z.array(z.union([
        z.string(),
        z.object({
            text: z.string(),
            subItems: z.array(z.string()).optional(),
        })
    ])),
    tags: z.array(z.string()),
    playStoreUrl: z.string().url().optional(),
    isEnterprise: z.boolean().optional(),
});

// Project Item Schema
export const ProjectItemSchema = z.object({
    id: z.string(),
    period: z.string().min(1),
    title: z.string().min(1),
    role: z.string().optional(),
    description: z.array(z.string()),
    tags: z.array(z.string()),
    links: z.array(z.object({
        text: z.string(),
        href: z.string().url(),
    })).optional(),
});

// Skill Category Schema
export const SkillCategorySchema = z.object({
    title: z.string().min(1),
    skills: z.array(z.string()),
});

// Article Schema
export const ArticleSchema = z.object({
    text: z.string().min(1),
    href: z.string().url(),
    summary: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    seriesName: z.string().optional(),
});

// Resume Config Schema (전체)
export const ResumeConfigSchema = z.object({
    header: z.object({
        name: z.string().min(1),
        email: z.string().email(),
        github: z.string().url(),
        linkedin: z.string().url(),
        portfolio: z.string().optional(),
    }),
    introduce: z.object({
        title: z.string().min(1),
        profileImage: z.string(),
        content: z.array(z.any()), // ReactNode array
    }),
    experience: z.array(ExperienceItemSchema),
    projects: z.array(ProjectItemSchema),
    skills: z.array(SkillCategorySchema),
    articles: z.array(ArticleSchema),
    // getAllSkills는 함수이므로 검증에서 제외
});

/**
 * TypeScript Types (Zod에서 자동 생성)
 */
export type ExperienceItem = z.infer<typeof ExperienceItemSchema>;
export type ProjectItem = z.infer<typeof ProjectItemSchema>;
export type SkillCategory = z.infer<typeof SkillCategorySchema>;
export type Article = z.infer<typeof ArticleSchema>;
export type ResumeConfig = z.infer<typeof ResumeConfigSchema>;

/**
 * Validation Helper
 */
export function validateResumeConfig(data: unknown): ResumeConfig {
    return ResumeConfigSchema.parse(data);
}

export function safeValidateResumeConfig(data: unknown): {
    success: boolean;
    data?: ResumeConfig;
    error?: z.ZodError;
} {
    const result = ResumeConfigSchema.safeParse(data);
    if (result.success) {
        return { success: true, data: result.data };
    }
    return { success: false, error: result.error };
}
