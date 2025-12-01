import { describe, it, expect } from 'vitest';
import {
    headerSchema,
    introduceSchema,
    experienceItemSchema,
    projectItemSchema,
    skillCategorySchema,
    articleItemSchema
} from '@/schemas';
import { headerData } from '@/data/header';
import { introduceData } from '@/data/introduce';
import { experienceData } from '@/data/experience';
import { projectsData } from '@/data/projects';
import { skillsData } from '@/data/skills';
import { articles } from '@/data/articles';

describe('Data Integrity Tests', () => {
    it('should validate header data', () => {
        expect(() => headerSchema.parse(headerData)).not.toThrow();
    });

    it('should validate introduce data', () => {
        // introduceData는 content가 ReactNode를 포함하므로, 
        // 스키마에서 content를 any로 허용했으므로 통과해야 함.
        expect(() => introduceSchema.parse(introduceData)).not.toThrow();
    });

    it('should validate experience data', () => {
        experienceData.forEach((item, index) => {
            try {
                experienceItemSchema.parse(item);
            } catch (error) {
                console.error(`Validation failed for experience item at index ${index} (id: ${item.id}):`, error);
                throw error;
            }
        });
    });

    it('should validate projects data', () => {
        projectsData.forEach((item, index) => {
            try {
                projectItemSchema.parse(item);
            } catch (error) {
                console.error(`Validation failed for project item at index ${index} (id: ${item.id}):`, error);
                throw error;
            }
        });
    });

    it('should validate skills data', () => {
        skillsData.forEach((item, index) => {
            try {
                skillCategorySchema.parse(item);
            } catch (error) {
                console.error(`Validation failed for skill category at index ${index} (title: ${item.title}):`, error);
                throw error;
            }
        });
    });

    it('should validate articles data', () => {
        articles.forEach((item, index) => {
            try {
                articleItemSchema.parse(item);
            } catch (error) {
                console.error(`Validation failed for article item at index ${index} (text: ${item.text}):`, error);
                throw error;
            }
        });
    });
});
